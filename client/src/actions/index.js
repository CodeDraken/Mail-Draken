import axios from 'axios'

import { GET_CURRENT_USER } from './types'

// get the logged in user's data
export const getCurrentUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')

  dispatch({ type: GET_CURRENT_USER, payload: res.data })
}

export const handleStripeToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token)

  // server will send back updated user with credits
  dispatch({ type: GET_CURRENT_USER, payload: res.data })
}
