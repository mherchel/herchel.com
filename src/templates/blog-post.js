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
        <Helmet>
          <title>{`${post.frontmatter.title} | ${siteTitle}`}</title>
          <meta name="description" content={post.excerpt} />
          <meta name="twitter:title" content={`${post.frontmatter.title} | ${siteTitle}`} />
          <meta name="twitter:description" content={post.excerpt} />

        </Helmet>
        <h1>{post.frontmatter.title}</h1>
        <div className="meta">
          <span className="date">{post.frontmatter.date}</span>
          <span className="author">By {post.frontmatter.author || 'Mike Herchel'}</span>
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

  /* Make unrendered tweet look as close as possible to the rendered tweet. */
  blockquote.twitter-tweet:not(.twitter-tweet-rendered) {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 500px;
    min-width: 220px;
    max-width: 520px;
    margin: 10px auto;
    padding: 20px 20px 11.6px 20px;
    border: 1px solid #e1e8ed;
    border-radius: 5px;
    background-color: #fff;
    font: normal normal 16px/1.4 Helvetica,Roboto,"Segoe UI",Calibri,sans-serif;
    color: #1c2022;
    cursor: pointer;

    &:before {
      content: "";
      position: absolute;
      right: 20px;
      top: 20px;
      width: 20px;
      height: 20px;
      background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2072%2072%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h72v72H0z%22%2F%3E%3Cpath%20class%3D%22icon%22%20fill%3D%22%231da1f2%22%20d%3D%22M68.812%2015.14c-2.348%201.04-4.87%201.744-7.52%202.06%202.704-1.62%204.78-4.186%205.757-7.243-2.53%201.5-5.33%202.592-8.314%203.176C56.35%2010.59%2052.948%209%2049.182%209c-7.23%200-13.092%205.86-13.092%2013.093%200%201.026.118%202.02.338%202.98C25.543%2024.527%2015.9%2019.318%209.44%2011.396c-1.125%201.936-1.77%204.184-1.77%206.58%200%204.543%202.312%208.552%205.824%2010.9-2.146-.07-4.165-.658-5.93-1.64-.002.056-.002.11-.002.163%200%206.345%204.513%2011.638%2010.504%2012.84-1.1.298-2.256.457-3.45.457-.845%200-1.666-.078-2.464-.23%201.667%205.2%206.5%208.985%2012.23%209.09-4.482%203.51-10.13%205.605-16.26%205.605-1.055%200-2.096-.06-3.122-.184%205.794%203.717%2012.676%205.882%2020.067%205.882%2024.083%200%2037.25-19.95%2037.25-37.25%200-.565-.013-1.133-.038-1.693%202.558-1.847%204.778-4.15%206.532-6.774z%22%2F%3E%3C%2Fsvg%3E);
      background-size: contain;
      background-repeat: no-repeat;
    }

    > p {
      order: 2;
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
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
      }
    }
  }
`

export default BlogPostTemplate
