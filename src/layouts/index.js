import React from 'react'
import Helmet from 'react-helmet'
import { css, injectGlobal } from 'emotion'
import Link from 'gatsby-link'
import Bio from '../components/Bio'
import Nav from '../components/Nav'
import vars from '../layouts/variables'

class Template extends React.Component {
  constructor() {
    super()
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.state = {
      mousedown: false,
      xpos: 0,
      ypos: 0,
      hue: 195,
      saturation: 100,
      luminosity: 50
    }
  }
  handleMouseDown(e) {
    this.setState({ mousedown: true })
    document.addEventListener('mousemove', this.handleMouseMove)
    document.addEventListener('touchmove', this.handleMouseMove)
  }
  handleMouseUp(e) {
    this.setState({ mousedown: false })
    document.removeEventListener('mousemove', this.handleMouseMove)
    document.removeEventListener('touchmove', this.handleMouseMove)
  }
  handleMouseMove(e) {
    const hueIncrement = window.innerHeight / 255
    const mouseYPositionPercent = (e.clientY / window.innerHeight) * 100
    const mouseXPositionPercent = (e.clientX / window.innerWidth) * 100
    const hueValue = mouseYPositionPercent * hueIncrement

    this.setState({
      xpos: e.clientX,
      ypos: e.clientY,
      hue: hueValue,
      luminosity: mouseXPositionPercent
    })
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleMouseDown)
    document.addEventListener('mouseup', this.handleMouseUp)
    document.addEventListener('touchdown', this.handleMouseDown)
    document.addEventListener('touchup', this.handleMouseUp)
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleMouseDown)
    document.removeEventListener('mouseup', this.handleMouseUp)
    document.removeEventListener('touchdown', this.handleMouseDown)
    document.removeEventListener('touchup', this.handleMouseUp)
  }
  render() {
    const { location, children } = this.props
    return (
      <div className={layoutStyles}>
        <Helmet>
          <link rel="icon" type="image/png" href="favicon.png" />
          <meta property="og:image" content="https://herchel.com/herchelshead.jpg" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:image" content="https://herchel.com/herchelshead.jpg" />
          <meta name="twitter:site" content="@mikeherchel" />
          <meta name="twitter:creator" content="@mikeherchel" />
          <style>{`
            body {
              --primary: hsla(${this.state.hue}, ${this.state.saturation}%, ${this.state.luminosity}%, 1);
              -webkit-user-select: ${this.state.mousedown ? 'none' : 'auto'};
              -moz-user-select: ${this.state.mousedown ? 'none' : 'auto'};
              user-select: ${this.state.mousedown ? 'none' : 'auto'};
            `}
          </style>
        </Helmet>
        <header className={headerStyles}>
          <Bio />
          <Nav />
        </header>
        <main role="main">
          {children()}
        </main>
        <footer className={footerStyles}>
          <span className="developed">Developed using <a target="_blank" href="http://gatsbyjs.org">GatsbyJS</a></span>
          <span className="github">Submit a PR <a target="_blank" href="https://github.com/mherchel/herchel.com">on GitHub</a></span>
        </footer>
      </div>
    )
  }
}

injectGlobal`
  * {
    box-sizing: border-box;
    touch-action: manipulation;

    &:before,
    &:after {
      box-sizing: inherit;
    }
  }

  :root {
    --primary: deepskyblue;
    --gray: #333;
    --white: white;
    --font-sans: helvetica, arial, sans-serif;
    --font-serif: georgia, serif;
  }

  ::selection {
    color: var(--primary); 
    background: black;
  }

  body {
    margin: 10px;
    background-color: var(--primary);
    line-height: 1.7;
    overflow: scroll;
    font-family: var(--font-sans);
    transition: 0.2s;

    &:before {
      content: "";
      position: fixed;
      z-index: -1;
      backface-visibility: hidden;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: url(/bg-boxes.jpg);
      opacity: 0.4;
      filter: grayscale(100%) invert(100%);
    }

    &:after {
      content: "";
      position: fixed;
      z-index: -1;
      backface-visibility: hidden;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-image: linear-gradient(to bottom, var(--primary), transparent 70%);
    }
  }

  h1, h2, h3 {
    line-height: 1.4;
    color: var(--gray);
    margin: 1em 0 0.5em;

    &:first-child {
      margin-top: 0;
    }
  }

  h1 {
    @media (max-width: 700px) {
      font-size: 30px;
    }
  }

  h2 {
    border-bottom: dotted 1px #ccc;

    @media (max-width: 700px) {
      font-size: 25px;
    }
  }

  h3 {
    margin: 40px 0 5px;
    color: var(--primary);
    filter: brightness(75%);
    font-size: 22px;
    font-family: var(--font-sans);

    + p {
      margin-top: 10px;
    }
  }

  blockquote {
    background-color: #eee;
    padding: 10px 20px;
    border-left: solid 5px #ccc;
    font-family: var(--font-sans);

    @media (max-width: 500px) {
      margin-left: 0;
      margin-right: 0;
    }
  }

  video {
    display: block;
  }

  figure {
    margin: 20px 0;
    background #eee;

    &[border] {
      padding: 3px;
    }
  }

  figcaption {
    padding: 5px 20px;
    font-family: var(--font-sans);
    font-style: italic;
    font-size: 16px;
    line-height: 1.2;
  }

  twitterwidget {
    margin: 0 auto;
  }

  .content {
    position: relative;
    min-height: calc(100vh - 20px);
    padding: 20px;
    background: var(--white);
    font-family: var(--font-serif);
    color: #666;
    font-size: 22px;
    line-height: 2;
    user-select: initial;

    @media (min-width: ${vars.breakpoints.navChange}) {
      padding: 40px;

      &:before {
        content: "";
        position: absolute;
        right: 100%;
        top: 70px;
        transform: translatey(-50%);
        height: 0;
        width: 0;
        border-top: solid transparent 20px;
        border-right: solid var(--white) 20px;
        border-bottom: solid transparent 20px;
      }
    }

    em {
      opacity: 0.9;
    }

    a {
      color: var(--primary);
    }

    li {
      margin: 15px 0;

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`

const layoutStyles = css`
  width: 94%;
  max-width: 1200px;
  margin: 0 auto;
  --header-width: 220px;

  @media (min-width: ${vars.breakpoints.navChange}) {
    display: flex;
    flex-wrap: wrap;
  }

  @media (min-width: ${vars.breakpoints.large}) {
    --header-width: 320px;
  }

  header {
    @media (min-width: ${vars.breakpoints.navChange}) {
      margin-right: 40px;
      flex-basis: var(--header-width);
      flex-shrink: 0;
    }

    @media (min-width: ${vars.breakpoints.large}) {
      margin-right: 60px;
    }
  }

  main {
    @media (min-width: ${vars.breakpoints.navChange}) {
      flex-grow: 1;
      width: calc(100% - (var(--header-width) + 40px));
    }

    @media (min-width: ${vars.breakpoints.large}) {
      width: calc(100% - (var(--header-width) + 60px));
    }
  }

  footer {
    flex-basis: 100%;
  }
`

const headerStyles = css`
  text-align: right;
  color: white;
`

const footerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: rgba(255, 255, 255, 0.8);

  @media (min-width: 500px) {
    flex-direction: row;
    align-items: center;

    > *:not(:last-child) {
      &:after {
        content: "   |   ";
        white-space: pre;
        color: white;
      }
    }
  }

  a {
    color: white;
  }
`

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
