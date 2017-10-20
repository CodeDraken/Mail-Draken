import { combineReducers } from 'redux'
import { reducer as reduxForm } from 'redux-form'

import auth from './authReducer'

export default combineReducers({
  auth,
  form: reduxForm
})
