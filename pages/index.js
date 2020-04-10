import Head from 'next/head'
import React, { Component } from "react";
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

export default class Home extends Component {
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
    const greeting = () => {
      const today = new Date()
      const curHr = today.getHours()
      if (curHr < 12) {
          return 'morning'  
      } else if (curHr < 17) {
          return 'afternoon'  
      } else {
          return 'evening'
      }
    }
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
            _Good_{greeting()}.
          </h1>
        </div>
      </div>
  
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
        }s
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