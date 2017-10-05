import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import StripeCheckout from 'react-stripe-checkout'

import * as actions from '../actions'

class Payments extends Component {
  static propTypes = {
    handleStripeToken: PropTypes.func.isRequired
  }

  render () {
    return (
      <StripeCheckout
        name='MailDraken'
        description='$5 for 5 email credits'
        amount={500}
        token={token => this.props.handleStripeToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className='btn blue'>
          Add Credits
        </button>
      </StripeCheckout>
    )
  }
}

export default connect(null, actions)(Payments)
