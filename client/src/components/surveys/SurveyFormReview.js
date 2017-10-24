import React from 'react'
import { connect } from 'react-redux'

const SurveyFormReview = ({ onCancel, values }) => {
  return (
    <div>
      <h5>Confirm entries</h5>

      <div>
        <div>
          <label>Survey Title</label>
          <div>{values.title}</div>
        </div>
        <div>
          <label>Email Subject</label>
          <div>{values.subject}</div>
        </div>
        <div>
          <label>Email Body</label>
          <div>{values.body}</div>
        </div>
        <div>
          <label>Recipient List</label>
          <div>{values.recipients}</div>
        </div>
      </div>

      <button
        className='red btn-flat white-text'
        onClick={onCancel}
      >
        Cancel
      </button>

      <button className='teal btn-flat right white-text'>
        Create survey
        <i className='material-icons right'>done</i>
      </button>
    </div>
  )
}

const mapStateToProps = ({ form: { surveyForm: values } }) => ({
  ...values
})

export default connect(mapStateToProps)(SurveyFormReview)
