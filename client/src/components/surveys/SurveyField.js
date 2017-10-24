// SurveyField - renders a single label and text input
import React from 'react'

export default ({ input, label, _name, meta: { error, touched } }) => {
  const valid = touched && error ? 'invalid' : ''

  return (
    <div className='input-field'>
      <label htmlFor={_name}>
        { label }
      </label>
      <input className={'validate ' + valid} {...input} style={{ marginBottom: '5px' }} />
      <div className='red-text' style={{ marginBottom: '20px' }}>
        { touched && error }
      </div>
    </div>
  )
}
