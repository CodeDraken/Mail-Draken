// wrapper for SurveyForm and SurveyFormReview
import React, { Component } from 'react'

import SurveyForm from './SurveyForm'

export class SurveyNew extends Component {
  render () {
    return (
      <div>
        SurveyNew
        <SurveyForm />
      </div>
    )
  }
}

export default SurveyNew
