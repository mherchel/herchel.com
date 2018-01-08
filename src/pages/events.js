import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

const pageName = 'Events'

class EventIndex extends React.Component {
  render() {
    const siteTitle = `${get(this, 'props.data.site.siteMetadata.title')} | ${pageName}`
    const events = get(this, 'props.data.allEventsJson.edges')
    const now = new Date(Date(now)).getTime()
    const prevEvents = events.filter(event => {
      const eventDate = new Date(event.node.date).getTime()
      return eventDate < now
    })
    const upcomingEvents = events.filter(event => {
      const eventDate = new Date(event.node.date).getTime()
      return eventDate > now
    })

    return (
      <div className='content'>
        <Helmet>
          <title>{siteTitle }</title>
          <meta name="description" content={`Events and conferences that is going to, and has been to.`} />
        </Helmet>
        <h1>{pageName}</h1>
        <h2>Upcoming events</h2>
        <div className="events upcoming">
          {upcomingEvents.map(event => {
            const title = get(event, 'node.title')
            const date = get(event, 'node.date')
            const status = get(event, 'node.status')
            const location = get(event, 'node.location')
            const url = get(event, 'node.url')
            return (
              <div key={date}>
                <h3><a target="_blank" href={url}>{title}</a></h3>
                <div className="date">{date}</div>
                <div className="status">{status}</div>
                <div className="location">{location}</div>
              </div>
            )
          })}
        </div>
        <h2>Previous events</h2>
        <div className="events previous">
          {prevEvents.map(event => {
            const title = get(event, 'node.title')
            const date = get(event, 'node.date')
            const status = get(event, 'node.status')
            const location = get(event, 'node.location')
            const url = get(event, 'node.url')
            return (
              <div key={date}>
                <h3><a target="_blank" href={url}>{title}</a></h3>
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
    allEventsJson(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          date(formatString: "MMM DD, YYYY")
          status
          location
          url
        }
      }
    }
  }
`
