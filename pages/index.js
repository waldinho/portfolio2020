import Head from 'next/head'
import React, { Component } from "react";
import DatGui, { DatNumber, DatSelect, DatButton } from "react-dat-gui";
import FluidAnimation from "react-fluid-animation";
import random from "random";
import Logo from '../components/Logo'
import Nav from '../components/Nav'

const defaultConfig = {
  textureDownsample: 1,
  densityDissipation: 0.98,
  velocityDissipation: 0.99,
  pressureDissipation: 0.8,
  pressureIterations: 25,
  curl: 30,
  splatRadius: 0.005
};

export default class App extends Component {
  state = {
    config: {
      ...defaultConfig
    }
  };

  componentDidMount() {
    this._reset();
  }

  render() {
    const { config } = this.state;
 
    return (
      <>
      <Head>
        <title>James Waller | Digital</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Logo />
      <Nav />
      <div
        style={{
          height: "100vh"
        }}
      >
        <FluidAnimation config={config} animationRef={this._animationRef} />

        <div
          style={{
            position: "absolute",
            zIndex: 1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: "1em 10em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "left",
            color: "#fff",
            pointerEvents: "none"
          }}
        >
          <h1
            style={{
              fontSize: "6em",
            }}
          >
            _Hello
          </h1>
        </div>
      </div>
      <footer>
      
      </footer>
  
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Courier, Helvetica Neue, sans-serif;
          background-color: #000;
          color: #fff;
        }
  
        * {
          box-sizing: border-box;
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
          color: #4663ff;
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
  }

  
  _animationRef = ref => {
    this._animation = ref;
    this._reset();
  };

  _onUpdate = config => {
    this.setState({ config });
  };

  _onClickRandomSplats = () => {
    this._animation.addSplats((5 + Math.random() * 20) | 0);
  };

  _onReset = () => {
    this.setState({ config: { ...defaultConfig } });
  };

  _reset() {
    if (this._animation) {
      this._animation.addRandomSplats(random.int(100, 180));
    }
  }
}