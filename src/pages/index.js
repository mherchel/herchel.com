import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { css } from 'emotion'

const pageName = '8th Grade Geography Bee Champion'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = `${get(this, 'props.data.site.siteMetadata.title')} | ${pageName}`
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet>
          <title>{siteTitle }</title>
          <meta name="description" content={get(this, 'props.data.site.siteMetadata.description')} />
        </Helmet>
        
        {posts.map(post => {
          const title = get(post, 'node.frontmatter.title')
          const subtitle = get(post, 'node.frontmatter.subtitle')
          return (
            <Link to={post.node.fields.slug} key={post.node.fields.slug} className={articleStyles}>
              <h2>
                {title}
              </h2>
              <div className="metadata">
                <span className="date">{post.node.frontmatter.date}</span>
                <span className="subtitle">{subtitle}</span>
              </div>
            </Link>
          )
        })}
      </div>
    )
  }
}

const articleStyles = css`
  position: relative;
  display: block;
  background: var(--white);
  margin-bottom: 20px;
  padding: 20px;
  color: var(--gray);
  text-decoration: none;
  box-shadow: 5px 6px 0px rgba(0,0,0,0.2);
  opacity: 0.98;

  @media (min-width: 1000px) {
    padding: 30px 40px;
  }

  &:hover,
  &:focus {
    opacity: 1;
  }

  @media (min-width: 700px) {
    &:before {
      --cut-width: 20px;
      content: "";
      position: absolute;
      right: -5px;
      top: -12px;
      height: 0;
      width: 0;
      border-top: solid var(--cut-width) transparent;
      border-left: solid var(--cut-width) transparent;
      border-right: solid var(--cut-width) transparent;
      border-bottom: solid var(--cut-width) var(--primary);
      transform : rotate(45deg);
      transform-origin: bottom right;
    }

    &:after {
      content: "";
      position: absolute;
      top: 15px;
      left: 100%;
      height: 20px;
      width: 10px;
      background: var(--primary);
      transform: skew(0, 45deg);
    }
  }

  h2 {
    font-size: 30px;
    line-height: 1.2;
  }

  .metadata {
    display: flex;
    flex-direction: column;
    line-height: 1.2;
    color: #666;

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

  .date {
    color: #999;
  }
`

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MM.DD.YYYY")
            title
            subtitle
          }
          fields {
            slug
          }
        }
      }
    }
  }
`