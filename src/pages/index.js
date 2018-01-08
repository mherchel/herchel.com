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
              <small>{post.node.frontmatter.date}</small>
              <p>{subtitle}</p></div>
            </Link>
          )
        })}
      </div>
    )
  }
}

const articleStyles = css`
  display: block;
  background: var(--white);
  margin-bottom: 2px;
  padding: 20px;
  color: var(--gray);
  text-decoration: none;

  h2 {
    margin: 10px 0;
  }

  p {
    margin: 10px;
  }

  .metadata {
    display: flex;
    align-items: center;
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
            date(formatString: "DD MMMM, YYYY")
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
