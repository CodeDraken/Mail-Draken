import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Header extends Component {
  static PropTypes = {
    auth: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object
    ]).isRequired
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return (
          <li><a href='/auth/google'>Login With Google</a></li>
        )
      default:
        return <li><a href='/api/logout'>Logout</a></li>
    }
  }

  render () {
    return (
      <nav className='red lighten-1'>
        <div className='nav-wrapper'>
          <a href='#' className='left brand-logo'>MailDraken</a>
          <ul className='right'>
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  auth
})

export default connect(mapStateToProps)(Header)
