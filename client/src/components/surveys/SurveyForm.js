// SurveyForm - form for new survey
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'

import SurveyField from './SurveyField'
import validateEmailList from '../../utils/validateEmailList'
import formFields from './formFields'

export class SurveyForm extends Component {
  renderFields = () => formFields.map(field => (
    <Field
      key={field.name}
      component={SurveyField}
      type='text'
      _name={field.name}
      {...field}
    />
  ))

  render () {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
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

const validate = values => {
  const errors = {}

  errors.recipients = validateEmailList(values.recipients || '')

  // make sure no empty
  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must fill out the ${name} field`
    }
  })

  return errors
}

export default reduxForm({
  form: 'surveyForm',
  destroyOnUnmount: false,
  validate
})(SurveyForm)
