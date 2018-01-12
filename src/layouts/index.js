import React from 'react'
import { css, injectGlobal } from 'emotion'
import Link from 'gatsby-link'
import Bio from '../components/Bio'
import Nav from '../components/Nav'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <div className={layoutStyles}>
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
  }

  figcaption {
    padding: 5px 20px;
    font-family: var(--font-sans);
    font-style: italic;
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

    @media (min-width: 700px) {
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
  }
`

const layoutStyles = css`
  width: 94%;
  max-width: 1200px;
  margin: 0 auto;
  --header-width: 220px;

  @media (min-width: 700px) {
    display: flex;
    flex-wrap: wrap;
  }

  @media (min-width: 1000px) {
    --header-width: 320px;
  }

  header {
    @media (min-width: 700px) {
      margin-right: 40px;
      flex-basis: var(--header-width);
      flex-shrink: 0;
    }

    @media (min-width: 1000px) {
      margin-right: 60px;
    }
  }

  main {
    @media (min-width: 700px) {
      flex-grow: 1;
      width: calc(100% - (var(--header-width) + 40px));
    }

    @media (min-width: 1000px) {
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
