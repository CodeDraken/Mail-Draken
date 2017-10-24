// wrapper for SurveyForm and SurveyFormReview
import React, { Component } from 'react'

import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview'

export class SurveyNew extends Component {
  state = {
    showFormReview: false
  }

  render () {
    return (
      <div>
        <h3>Create a new survey</h3>

        { this.state.showFormReview
          ? <SurveyFormReview
            onCancel={() => this.setState({ showFormReview: false })}
            />
          : <SurveyForm
            onSurveySubmit={() => this.setState({ showFormReview: true })}
          />
        }

      </div>
    )
  }
}

export default SurveyNew
