import React from "react";
import { slide as Menu } from "react-burger-menu";
import useSWR from 'swr'

const fetcher = query =>
  fetch('/api/graphQL/nav', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then(res => res.json())
    .then(json => json.data)

export default function Index() {
  const { data, error } = useSWR('{ title { title }, nav { title, url, target } }', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div className="loader"></div>

  const { nav } = data

  return (
    <>
    <Menu right>
      {nav.map((item, i) => (
        <a className="menu-item" href={item.url} target={item.target}>{item.title}</a>
      ))}
    </Menu>
    <style jsx global>{`
    .loader {
      border: 16px solid #000;
      border-top: 16px solid #4fec8e;
      border-radius: 50%;
      width: 120px;
      height: 120px;
      animation: spin 2s linear infinite;
      z-index: 9999;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -35px;
      margin-left: -35px;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .bm-menu-wrap {
      width: 100% !important;
    }
    @media screen and (min-width: 426px) {
      .bm-menu-wrap {
        width: 14% !important;
      }
    }
    /* Individual item */
    .bm-item {
      display: inline-block;

      /* Our sidebar item styling */
      text-decoration: none;
      margin-bottom: 10px;
      color: #000;
      transition: color 0.2s;
    }

    .bm-item:focus {
      outline:0;
      color: #000;
    }

    /* Change color on hover */
    .bm-item:hover {
      color: #00adff;
    }

    /* The rest copied directly from react-burger-menu docs */

    /* Position and sizing of burger button */
    .bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      right: 36px;
      top: 36px;
    }

    /* Color/shape of burger icon bars */
    .bm-burger-bars {
      background: #fff;
    }

    /* Position and sizing of clickable cross button */
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }

    /* Color/shape of close button cross */
    .bm-cross {
      background: #000;
    }

    /* General sidebar styles */
    .bm-menu {
      background: #fff;
      padding: 2.5em 1.5em 0;
      font-size: 1.15em;
      padding: 2rem 2rem 1.5rem 2rem;
    }

    /* Morph shape necessary with bubble or elastic */
    .bm-morph-shape {
      fill: #373a47;
    }

    /* Wrapper for item list */
    .bm-item-list {
      color: #b8b7ad;
      padding: 6rem 0 0 0
    }

    /* Styling of overlay */
    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
  `}</style>
  </>
  )
}