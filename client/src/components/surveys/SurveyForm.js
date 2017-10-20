// SurveyForm - form for new survey
import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

export class SurveyForm extends Component {
  render () {
    return (
      <div>
        SurveyForm
      </div>
    )
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm)
