import axios from 'axios'

import { GET_CURRENT_USER, FETCH_SURVEYS } from './types'

// get the logged in user's data
export const getCurrentUser = () => async dispatch => {
  try {
    const res = await axios.get('/api/current_user')

    dispatch({ type: GET_CURRENT_USER, payload: res.data })
  } catch (err) {
    console.log(err)
    // TODO: dispatch failed get user
  }
}

export const handleStripeToken = token => async dispatch => {
  try {
    const res = await axios.post('/api/stripe', token)

    // server will send back updated user with credits
    dispatch({ type: GET_CURRENT_USER, payload: res.data })
  } catch (err) {
    console.log(err)
    // TODO: dispatch failed token
  }
}

export const submitSurvey = (values, history) => async dispatch => {
  try {
    const res = await axios.post('/api/surveys', values)

    history.push('/surveys')

    // get updated user
    dispatch({ type: GET_CURRENT_USER, payload: res.data })
  } catch (err) {
    console.log(err)
    // TODO: dispatch survey creation failed
  }
}

export const fetchSurveys = () => async dispatch => {
  try {
    const res = await axios.get('/api/surveys')

    dispatch({ type: FETCH_SURVEYS, payload: res.data })
  } catch (err) {
    console.log(err)
    // TODO: dispatch failed to fetch surveys
  }
}
