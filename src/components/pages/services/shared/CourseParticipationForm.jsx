// libs
import React from 'react'
import styled, { css } from 'react-emotion'

// components
import { Button } from 'components/UI/Button'
import { Typography } from 'components/UI/Typography'

const hiddenStyles = css`
  display: none;
`

const FormLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 12px 32px 48px 32px;
  width: 100%;
  height: 100%;
  max-width: 360px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 0;
  }

  form {
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 12px;
`

const FormField = styled.input`
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.brand.text.primary};
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.tide};
  border-radius: 0;
  width: 100%;
`

const SubmitButton = styled(Button)`
  margin-top: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: 24px;
  }
`

const ErrorMessage = styled(Typography)`
  display: flex;
  margin-top: 4px;
  min-height: 16px;
  visibility: ${({ error }) => (error ? 'visible' : 'hidden')};
  color: ${({ theme }) => theme.colors.error};
`

const Congratulation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.brand.text.primary};
  padding: 24px 0;
`

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

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
    [values]
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

const CourseParticipationForm = ({ course = 'Доульский кружок', onDone }) => {
  const formApi = useForm({
    initialValues: {
      'bot-field': '',
      name: '',
      email: '',
      phone: ''
    },
    onSubmit: values => {
      const currentErrors = ['name', 'email', 'phone'].reduce((acc, key) => {
        if (values[key].length === 0) {
          acc[key] = 'Обязательное поле'
        }
        return acc
      }, {})

      if (Object.keys(currentErrors).length !== 0) {
        formApi.setErrors(currentErrors)
        return Promise.reject()
      }

      return fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'participation',
          course,
          ...values
        })
      })
    }
  })

  if (formApi.isSubmitted) {
    return (
      <FormLayout>
        <svg width="113" height="122" viewBox="0 0 113 122" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.14425 11.5534C-16.0781 40.0558 33.4707 97.0605 60.8978 122C80 104.5 131.5 51.5 105.861 11.5534C96.0816 -3.68221 64.9445 17.4914 60.8978 32.9302C51.1559 13.9286 26.3666 -16.9489 5.14425 11.5534Z"
            fill="#AC8E89"
          />
        </svg>
        <Congratulation>Спасибо! Я обязательно свяжусь с Вами в ближайшее время.</Congratulation>
        <SubmitButton variant="contained" fullwidth onClick={onDone}>
          Закрыть
        </SubmitButton>
      </FormLayout>
    )
  }

  return (
    <FormLayout
      name="participation"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={formApi.handleSubmit}
      noValidate
    >
      <form
        name="participation"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={formApi.handleSubmit}
        noValidate
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="participation" />
        <div className={hiddenStyles}>
          <label htmlFor="bot-field">
            Don’t fill this out: <input id="bot-field" name="bot-field" onChange={formApi.handleChange} />
          </label>
        </div>
        <FormGroup>
          <label htmlFor="name">
            <FormField
              value={formApi.name}
              type="text"
              id="name"
              name="name"
              onChange={formApi.handleChange}
              placeholder="Имя"
            />
            <ErrorMessage error={formApi.errors.name && formApi.errors.name.length !== 0} variant="caption1">
              {formApi.errors.name}
            </ErrorMessage>
          </label>
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">
            <FormField
              value={formApi.email}
              type="email"
              id="email"
              name="email"
              onChange={formApi.handleChange}
              placeholder="Электронная почта"
            />
            <ErrorMessage error={formApi.errors.email && formApi.errors.email.length !== 0} variant="caption1">
              {formApi.errors.email}
            </ErrorMessage>
          </label>
        </FormGroup>
        <FormGroup>
          <label htmlFor="phone">
            <FormField
              value={formApi.phone}
              type="text"
              pattern="[0-9]*"
              id="phone"
              name="phone"
              onChange={formApi.handleChange}
              placeholder="Номер телефона"
            />
            <ErrorMessage error={formApi.errors.phone && formApi.errors.phone.length !== 0} variant="caption1">
              {formApi.errors.phone}
            </ErrorMessage>
          </label>
        </FormGroup>
        <input type="hidden" name="course" value={course} />
        <SubmitButton variant="contained" fullwidth type="submit">
          Я участвую
        </SubmitButton>
      </form>
    </FormLayout>
  )
}

export { CourseParticipationForm }
