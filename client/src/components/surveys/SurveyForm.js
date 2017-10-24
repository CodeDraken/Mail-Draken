// SurveyForm - form for new survey
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'

import SurveyField from './SurveyField'
import validateEmailList from '../../utils/validateEmailList'

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
      type='text'
      {...field}
    />
  ))

  render () {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(values => console.log(values))}
        >
          { this.renderFields() }

          <Link to='/surveys' className='red btn-flat white-text'>
            Cancel
          </Link>
          <button className='teal btn-flat right white-text'>
            Next
            <i className='material-icons right'>done</i>
          </button>
        </form>
      </div>
    )
  }
}

const validate = (values) => {
  const errors = {}

  errors.recipients = validateEmailList(values.recipients || '')

  // make sure no empty
  FIELDS.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must fill out the ${name} field`
    }
  })

  return errors
}

export default reduxForm({
  form: 'surveyForm',
  validate
})(SurveyForm)
