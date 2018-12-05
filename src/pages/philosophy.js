import React from 'react'
import Helmet from 'react-helmet'

const pageName = 'Philosophy'

export default ({ data }) =>
  <div className='content'>
    <Helmet title={`${pageName} | ${data.site.siteMetadata.title}`} />
    <h1>{pageName}</h1>
    <p><em>These ideas mostly serve as a public reality check for myself. They're intended to be in constant flux.</em></p>
    <h2>Surround myself with good people</h2>
    <p><em>Recognize good people when they come into your life and make them a part of it (if possible).</em></p>
    <h2>Always be learning</h2>
    <p><em>Learning new skills keeps a person more excited and fulfilled. Don't be afraid to share what you learn.</em></p>
    <h2>Put yourself out there</h2>
    <p><em>Let opportunity happen. Never let fear of failure prevent you from trying.</em></p>
    <h2>Have fun</h2>
    <p><em>Enough said.</em></p>
    <h2>Sharing makes you stronger</h2>
    <p><em>...in so many ways.</em></p>
    <h2>Get shit done</h2>
    <p><em>Tackle stuff head on before it gets out of control</em></p>
    <h2>Be honest</h2>
    <p><em>Lack of honesty is a symptom of lack of confidence.</em></p>
    <h2>Don’t be afraid to say no</h2>
    <p><em>...and don’t overextend yourself</em></p>
  </div>

export const query = graphql`
  query PhilosphyQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
