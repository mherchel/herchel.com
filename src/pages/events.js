import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import dateFormat from 'dateformat'

const pageName = 'Events'

class EventIndex extends React.Component {
  render() {
    const siteTitle = `${get(this, 'props.data.site.siteMetadata.title')} | ${pageName}`
    const events = get(this, 'props.data.allEventsJson.edges')


    // let sortedEvents = events.sort((a,b) => {
    //   const aDate = Date.parse(get(a, 'date'))
    //   const bDate = Date.parse(get(b, 'date'))
    //   return aDate - bDate
    // })

    // sortedEvents.forEach(event => {
    //   const dateObj = new Date(get(event, 'date'))
    //   event.formattedDate = dateFormat(dateObj, 'mmm d, yyyy')
    // })

    return (
      <div>
        <Helmet>
          <title>{siteTitle }</title>
          <meta name="description" content={get(this, 'props.data.site.siteMetadata.description')} />
        </Helmet>
        <h1>{pageName}</h1>

        <div className="events">
          {events.map(event => {
            const title = get(event, 'node.title')
            const date = get(event, 'node.date')
            const status = get(event, 'node.status')
            const location = get(event, 'node.location')
            return (
              <div key={date}>
                <h3>{title}</h3>
                <div className="date">{date}</div>
                <div className="status">{status}</div>
                <div className="location">{location}</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

EventIndex.propTypes = {
  route: React.PropTypes.object,
}

export default EventIndex

export const eventQuery = graphql`
  query EventQuery {
    site {
      siteMetadata {
        title
      }
    }
    allEventsJson {
      edges {
        node {
          title
          date
          status
          location
        }
      }
    }
  }
`
