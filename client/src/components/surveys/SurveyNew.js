// wrapper for SurveyForm and SurveyFormReview
import React, { Component } from 'react'

import SurveyForm from './SurveyForm'

export class SurveyNew extends Component {
  render () {
    return (
      <div>
        <h1>Create a new survey</h1>
        <SurveyForm />
      </div>
    )
  }
}

export default SurveyNew
