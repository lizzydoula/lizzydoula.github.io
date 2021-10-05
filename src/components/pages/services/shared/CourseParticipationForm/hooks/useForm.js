// libs
import React from 'react'

const useForm = ({ initialValues, onSubmit }) => {
  const submitCallback = React.useRef(onSubmit)
  const [values, setValues] = React.useState(initialValues)
  const [errors, setErrors] = React.useState({})
  const [submitted, setSubmitted] = React.useState(false)

  const handleChange = React.useCallback(
    event => {
      const { value, name } = event.target

      setValues(oldValues => ({
        ...oldValues,
        [name]: value
      }))

      setErrors(oldValues => ({
        ...oldValues,
        [name]: ''
      }))
    },
    [setValues]
  )

  const handleSubmit = React.useCallback(
    event => {
      event.preventDefault()

      if (submitCallback.current) {
        submitCallback
          .current(values)
          .then(() => setSubmitted(true))
          .catch(() => {
            // ignore errors
          })
      }
    },
    [submitCallback, values, setSubmitted]
  )

  return {
    values,
    handleChange,
    errors,
    setErrors,
    handleSubmit,
    isSubmitted: submitted
  }
}

export { useForm }
