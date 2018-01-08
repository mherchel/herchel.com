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
      </div>
    )
  }
}

injectGlobal`
  * {
    box-sizing: border-box;

    &:before,
    &:after {
      box-sizing: inherit;
    }
  }

  :root {
    --primary: deepskyblue;
    --gray: #333;
    --white: white;
  }

  body {
    margin: 10px;
    background: var(--primary);
    line-height: 1.7;
    overflow: scroll;
    font-family: helvetica, arial, sans-serif;
  }

  h1, h2, h3 {
    line-height: 1.4;
    color: var(--gray);
    margin: 1em 0 0.5em;

    &:first-child {
      margin-top: 0;
    }
  }

  .content {
    position: relative;
    min-height: calc(100vh - 20px);
    padding: 40px;
    background: var(--white);
    font-family: georgia;
    color: #666;
    font-size: 22px;
    line-height: 2;

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

    em {
      color: #777;
    }

    a {
      color: var(--primary);
      filter: brightness(0.8);
    }
  }
`

const layoutStyles = css`
  width: 94%;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 700px) {
    display: flex;
  }

  header {
    margin-right: 60px;

    @media (min-width: 700px) {
      flex-basis: 320px;
      flex-shrink: 0;
    }
  }

  main {
    @media (min-width: 700px) {
      flex-grow: 1;
      width: calc(100% - 320px);
    }
  }
`

const headerStyles = css`
  text-align: right;
  color: white;
`

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
