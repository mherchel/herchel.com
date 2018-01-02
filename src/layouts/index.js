import React from 'react'
import Link from 'gatsby-link'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <div>
        <h3>
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/philosophy'}>Philosophy</Link>
          <Link to={'/contact'}>Contact</Link>
        </h3>
        {children()}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
