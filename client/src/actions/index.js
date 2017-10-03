import axios from 'axios'

import { GET_CURRENT_USER } from './types'

// get the logged in user's data
export const getCurrentUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')

  dispatch({ type: GET_CURRENT_USER, payload: res.data })
}
