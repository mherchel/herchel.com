import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

const pageName = 'Events'

class EventIndex extends React.Component {
  render() {
    const siteTitle = `${get(this, 'props.data.site.siteMetadata.title')} | ${pageName}`
    const events = get(this, 'props.data.site.siteMetadata.events')
console.log(events)
    const sortedEvents = events.sort((a,b) => {
      const aDate = Date.parse(get(a, 'date'))
      const bDate = Date.parse(get(b, 'date'))
      // console.log(aDate - bDate);
      // debugger;
      return aDate - bDate

      // if (aDate > bDate) {
      //   return 1
      // }
      // else if (aDate < bDate) {
      //   return -1
      // }
      // else {
      //   return 0
      // }
    })

    console.log(sortedEvents)
    
    return (
      <div>
        <Helmet>
          <title>{siteTitle }</title>
          <meta name="description" content={get(this, 'props.data.site.siteMetadata.description')} />
        </Helmet>
        <h1>{pageName}</h1>

        <div className="events">
          {sortedEvents.map(event => {
            const title = get(event, 'title')
            const date = Date.parse(get(event, 'date'))
            const status = get(event, 'status')
            const location = get(event, 'location')
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
        description
        events {
          title
          date
          status
          location
        }
      }
    }
  }
`
