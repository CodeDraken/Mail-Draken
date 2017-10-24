import React from 'react'
import { connect } from 'react-redux'

import formFields from './formFields'
import * as actions from '../../actions'

const SurveyFormReview = ({ onCancel, values, submitSurvey }) => {
  const reviewFields = formFields.map(({ name, label }) => (
    <div key={name}>
      <label>{ label }</label>
      <div>
        { values[name] }
      </div>
    </div>
  ))

  return (
    <div>
      <h5>Confirm entries</h5>

      { reviewFields }

      <button
        className='orange btn-flat white-text'
        onClick={onCancel}
      >
        Back
      </button>

      <button
        className='green btn-flat right white-text'
        onClick={() => submitSurvey(values)}
        >
        Send Survey
        <i className='material-icons right'>email</i>
      </button>
    </div>
  )
}

const mapStateToProps = ({ form: { surveyForm: values } }) => ({
  ...values
})

export default connect(mapStateToProps, actions)(SurveyFormReview)
