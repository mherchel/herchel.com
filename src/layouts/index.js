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
      hue: 195,
      lightness: 50
    }
  }
  handleMouseDown(e) {
    if (!e.target.matches(`.${layoutStyles}, .${layoutStyles} *`)) {
      this.setState({ mousedown: true })
      document.addEventListener('mousemove', this.handleMouseMove)
    }
  }
  handleMouseUp(e) {
    this.setState({ mousedown: false })
    document.removeEventListener('mousemove', this.handleMouseMove)
  }
  handleMouseMove(e) {
    const hueIncrement = window.innerHeight / 360
    const mouseYPositionPercent = (e.clientY / window.innerHeight) * 100
    const hue = mouseYPositionPercent * hueIncrement
    const lightness = (e.clientX / window.innerWidth) * 100

    this.setState({ hue, lightness })
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleMouseDown)
    document.addEventListener('mouseup', this.handleMouseUp)
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleMouseDown)
    document.removeEventListener('mouseup', this.handleMouseUp)
  }
  render() {
    const { location, children } = this.props
    return (
      <div className={layoutStyles}>
        <Helmet>
          <link rel="icon" type="image/png" href="/favicon.png" />
          <meta property="og:image" content="https://herchel.com/herchelshead1.jpg" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:image" content="https://herchel.com/herchelshead1.jpg" />
          <meta name="twitter:site" content="@mikeherchel" />
          <meta name="twitter:creator" content="@mikeherchel" />
          <style>{`
            :root {
              --primary-hue: ${this.state.hue};
              --primary-lightness: ${this.state.lightness}%;
              -webkit-user-select: ${this.state.mousedown ? 'none' : 'auto'};
              -moz-user-select: ${this.state.mousedown ? 'none' : 'auto'};
              user-select: ${this.state.mousedown ? 'none' : 'auto'};
            }
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
          <span className="copyright">&copy;2018 Mike Herchel</span>
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
    --primary: hsla(var(--primary-hue),
                    var(--primary-saturation),
                    var(--primary-lightness),
                    var(--primary-alpha));
    --primary-hue: 195;
    --primary-saturation: 100%;
    --primary-lightness: 50%;
    --primary-alpha: 1;
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
    margin: 0;
    line-height: 1.7;
    overflow: scroll;
    background: linear-gradient(to bottom, var(--primary), transparent 100vh) fixed, url(/bg-boxes.png) fixed;
    background-color: var(--primary);
    font-family: var(--font-sans);
    transition: 0.2s;

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

  img {
    max-width: 100%;

    figure & {
      display: block;
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

  iframe.twitter-tweet,
  twitterwidget {
    margin-left: auto;
    margin-right: auto;
  }

  .content {
    position: relative;
    min-height: calc(100vh - 20px);
    padding: 20px;
    background: var(--white);
    font-family: var(--font-serif);
    color: #666;
    font-size: 22px;
    line-height: 1.8;

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
      margin: 5px 0;

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
  max-width: 1500px;
  margin: 10px auto;
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

  @media (min-width: 700px) {
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
