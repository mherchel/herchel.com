import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { css } from 'emotion'

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
        <h2 className={eventsHeading}>Upcoming events</h2>
        <div className={eventsWrapper}>
          {upcomingEvents.map(event => {
            const title = get(event, 'node.title')
            const date = get(event, 'node.date')
            const status = get(event, 'node.status')
            const location = get(event, 'node.location')
            const url = get(event, 'node.url')
            return (
              <article className={eventStyles} key={date}>
                <h3><a target="_blank" href={url}>{title}</a></h3>
                <div className="meta">{date} in {location}</div>
              </article>
            )
          })}
        </div>
        <h2 className={eventsHeading}>Previous events</h2>
        <div className={eventsWrapper}>
          {prevEvents.map(event => {
            const title = get(event, 'node.title')
            const date = get(event, 'node.date')
            const status = get(event, 'node.status')
            const location = get(event, 'node.location')
            const url = get(event, 'node.url')
            return (
              <article className={eventStyles} key={date}>
                <h3><a target="_blank" href={url}>{title}</a></h3>
                <div className="meta">{date} in {location}</div>
              </article>
            )
          })}
        </div>
      </div>
    )
  }
}

const eventsHeading = css`
  clear: both;
`

const eventsWrapper = css`
  clear: both;
  border-left: solid 4px var(--primary);
  margin-left: 20px;
  padding-left: 20px;

  &:after {
    content: "";
    display: block;
    clear: both;
  }
`

const eventStyles = css`
  --offset: 20px;
  position: relative;
  float: left;
  clear: both;
  margin: 20px 0;  
  background: #eee;
  border-left: solid 4px var(--primary);
  padding: var(--offset);

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  h3 {
    font-size: 18px;
    margin: 0;
  }

  .meta {
    font-size: 16px;
  }

  &:before {
    content: "";
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translatey(-50%);
    width: calc(var(--offset) + 4px);
    height 4px;
    background: var(--primary);
  }

  &:after {
    content: "";
    --width: 20px;
    position: absolute;
    right: calc(100% + var(--offset) - 4px);
    top: 50%;
    transform: translatey(-50%);
    width: var(--width);
    height: var(--width); 
    border-radius: 50%;
    background: var(--primary);

  }
`

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
    allEventsJson(sort: { fields: [date], order: ASC }) {
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
