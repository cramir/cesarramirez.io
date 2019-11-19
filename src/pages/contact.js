import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import * as PropTypes from 'prop-types'
import { css } from '@emotion/core'
import axios from 'axios'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import { rhythm } from '../utils/typography'

const disabled = css`
  &:disabled {
    background-color: #cccccc;
    opacity: 0.6;
    cursor: default;
  }
`

const inputError = css`
  color: red;
`

const inputField = css`
  border-radius: ${rhythm(0.2)};
  border: solid 0.5px;
  padding-left: ${rhythm(0.3)};
  min-height: ${rhythm(1.2)};
  min-width: 30%;
  ${disabled}
`

const inputHolder = css`
  margin: ${rhythm(0.5)};
  margin-left: 0px;
`

const buttons = css`
  border-radius: ${rhythm(0.2)};
  border: 1px solid;
  display: inline-block;
  cursor: pointer;
  background-color: gainsboro;
  &:hover {
    background-color: whitesmoke;
  }
`

const success = css`
  color: green;
  font-size: ${rhythm(1.5)};
`

const failure = css`
  color: red;
  font-size: ${rhythm(1.5)};
`

const contact = () => {
  const [submittedState, setSubmitted] = useState(false)
  const [successfulSub, setSuccess] = useState(false)

  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact</h1>
      <div>
        Feel free to use the form below or email me at{' '}
        <a href="mailto:c.ramirez@programmer.net?subject=from cesarramirez.io">c.ramirez@programmer.net</a>
      </div>
      <div css={submittedState && (successfulSub ? success : failure)}>
        {submittedState &&
          (successfulSub
            ? 'Submission was successful'
            : 'An unkonwn error has occured. Please write an email to c.ramirez@programmer.net ')}
      </div>

      <Formik
        initialValues={{ email: '', name: '', message: '' }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const res = await axios({
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            method: 'post',
            url: 'https://contact.cesarramirez.io/send',
            data: {
              name: values.name,
              replyToEmails: [values.email],
              message: values.message,
            },
          })
          if (res.status === 204) {
            setSuccess(true)
            resetForm()
          }
          setSubmitted(true)
          setSubmitting(false)
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .required('Required')
            .min(2, 'Must be at least 2 characters')
            .max(50, 'Less than 1000 characters, please'),
          email: Yup.string()
            .email()
            .required('Required'),
          message: Yup.string().max(2000, 'Less than 2000 characters, please'),
        })}
      >
        {props => {
          const { values, touched, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit } = props
          return (
            <form onSubmit={handleSubmit}>
              {isSubmitting && (
                <div
                  css={css`
                    font-size: ${rhythm(1.2)};
                  `}
                >
                  {' '}
                  Form is submitting
                </div>
              )}
              <div css={inputHolder}>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  css={inputField}
                  disabled={submittedState && successfulSub}
                />
                {errors.name && touched.name && <div css={inputError}>{errors.name}</div>}
              </div>

              <div css={inputHolder}>
                <input
                  id="email"
                  placeholder="Email Address"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email ? 'text-input error' : 'text-input'}
                  css={inputField}
                  disabled={submittedState && successfulSub}
                />
                {errors.email && touched.email && <div css={inputError}>{errors.email}</div>}
              </div>

              <div css={inputHolder}>
                <textarea
                  id="message"
                  placeholder="Message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  css={inputField}
                  disabled={submittedState && successfulSub}
                />
              </div>

              <button type="submit" disabled={isSubmitting || (submittedState && successfulSub)} css={buttons}>
                Send Message
              </button>
            </form>
          )
        }}
      </Formik>
    </Layout>
  )
}

contact.propTypes = {
  values: PropTypes.object,
  touched: PropTypes.bool,
  errors: PropTypes.arrayOf(PropTypes.string),
  dirty: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleReset: PropTypes.func,
  handleBlur: PropTypes.func,
}

contact.defaultProps = {
  values: {},
  touched: false,
  errors: [],
  dirty: false,
  isSubmitting: false,
}

export default contact
