import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'

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
        <Bio />
        {posts.map(post => {
          if (post.node.path !== '/404/') {
            const title = get(post, 'node.frontmatter.title') || post.node.path
            const subtitle = get(post, 'node.frontmatter.subtitle')
            return (
              <div key={post.node.frontmatter.path}>
                <h3>
                  <Link to={post.node.frontmatter.path} >
                    {title}
                  </Link>
                </h3>
                <small>{post.node.frontmatter.date}</small>
                <p>{subtitle}</p>
              </div>
            )
          }
        })}
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
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
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
            subtitle
          }
        }
      }
    }
  }
`
