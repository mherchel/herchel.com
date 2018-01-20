import React from 'react'
import Helmet from 'react-helmet'
import { css } from 'emotion'
const pageName = '404 Page Not Found'

export default ({ data }) =>
  <div className={`${fourOhFourstyles} content`}>
    <Helmet title={`${pageName} | ${data.site.siteMetadata.title}`} />
    <h1>{pageName}</h1>
     <p>:(</p>
    </div>

const fourOhFourstyles = css`
  p {
    font-size: 30px;
  }
`

export const query = graphql`
  query fourOhFourQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`