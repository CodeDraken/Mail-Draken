// SurveyForm - form for new survey
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import SurveyField from './SurveyField'

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Email Subject', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'recipients' }
]

export class SurveyForm extends Component {
  renderFields = () => FIELDS.map(field => (
    <Field
      key={field.name}
      component={SurveyField}
      type='text' {...field}
    />
  ))

  render () {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(values => console.log(values))}
        >
          { this.renderFields() }

          <button>Create Survey</button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm)
