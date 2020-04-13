import Head from 'next/head'
import React, { Component } from "react";
import styled from 'styled-components';
import FluidAnimation from "react-fluid-animation";
import random from "random";
import Logo from '../components/Logo'
import Nav from '../components/Nav'
import Social from '../components/Social'

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>>
      </Head>
      <Logo />
      <Nav />
      <Social />
      <div
        style={{
          height: "100vh"
        }}
      >
        <FluidAnimation config={config} animationRef={this._animationRef} />

        <Content>
          <h1>
            _Good_{greeting()}.
          </h1>
        </Content>
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

const Content = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  color: #fff;
  pointer-events: none
  padding: 1rem 2rem;
  @media screen and (min-width: 1025px) {
    padding: 1rem 10rem;
  }
  font-family: Courier, Helvetica Neue, sans-serif;
  h1 {
    font-size: 1.75rem;
    padding: 0 2rem;
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 5s;
    @media screen and (min-width: 1025px) {
      font-size: 6rem;
      padding: 0;
    }
  }
}

@keyframes fadeInOpacity {
	0% {
		opacity: 0;
  }
  60% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`;

