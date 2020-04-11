import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <>
    <Menu right>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/about">
        About
      </a>

      <a className="menu-item" href="/portfolio">
        Portfolio
      </a>

      <a className="menu-item" href="/contact">
        Contact
      </a>
      <a className="menu-item" href="/resume">
        Resume
      </a>
    </Menu>
    <style jsx global>{`
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
        }

        /* Change color on hover */
        .bm-item:hover {
          color: #31deff;
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
  );
};
