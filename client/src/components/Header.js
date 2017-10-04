import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object
    ]).isRequired
  }

  renderContent () {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return (
          <li><a href='/auth/google'>Login</a></li>
        )
      default:
        return <li><a className='btn--logout' href='/api/logout'>Logout</a></li>
    }
  }

  render () {
    return (
      <nav className='red lighten-1'>
        <div className='nav-wrapper'>

          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className='left brand-logo'>
            MailDraken
          </Link>

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
