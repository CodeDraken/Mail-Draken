import { combineReducers } from 'redux'
import { reducer as reduxForm } from 'redux-form'

import auth from './authReducer'
import surveys from './surveysReducer'

export default combineReducers({
  auth,
  surveys,
  form: reduxForm
})
