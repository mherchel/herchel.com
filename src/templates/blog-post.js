import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import { css } from 'emotion'
import './prism-theme.css'


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div className={`content ${blogStyles}`}>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1>{post.frontmatter.title}</h1>
        <div className="meta">
          <span className="date">{post.frontmatter.date}</span>
          <span className="author">By Mike Herchel</span>
        </div>
        <article  dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className={thanksStyle}>Thanks for reading. Notice an error or have something to contribute? <a href="https://github.com/mherchel/herchel.com" target="_blank">Submit a Pull Request</a>!</div>
      </div>
    )
  }
}

const blogStyles = css`
  article {
    overflow: hidden; /* Ensure long URLs don't cause content to stretch. */
  }

  .gatsby-highlight {
    font-size: 16px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  code {
    padding: 2px 5px;
    background: #eee;
    white-space: nowrap;
  }

  .gatsby-highlight code {
    padding: initial;
    background: initial;
    white-space: inherit;
  }

  .meta {
    display: flex;
    flex-direction: column;
    font-family: var(--font-sans);
    font-size: 16px;
    color: #999;
    line-height: 1.2;

    @media (min-width: 500px) {
      flex-direction: row;
      align-items: center;

      > *:not(:last-child) {
        &:after {
          content: "   |   ";
          white-space: pre;
          color: #aaa;
        }
      }
    }
  }
  }
`

const thanksStyle = css`
  position: relative;
  margin-top: 30px;
  padding: 20px;
  background: #eee;

  &:before {
    content: "";
    position: absolute;
    left: 20px;
    bottom: 100%;
    height: 0;
    width: 0;
    border-bottom: solid 20px #eee;
    border-left: solid 20px transparent;
    border-right: solid 20px transparent;
  }
`

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default BlogPostTemplate
