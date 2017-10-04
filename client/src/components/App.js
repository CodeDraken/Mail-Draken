import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import routes from './routes'
import Header from './Header'
import * as actions from '../actions'

class App extends Component {
  static PropTypes = {
    getCurrentUser: PropTypes.func.isRequired
  }
  componentDidMount () {
    this.props.getCurrentUser()
  }

  render () {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className='container'>
            { routes }
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default connect(null, actions)(App)
