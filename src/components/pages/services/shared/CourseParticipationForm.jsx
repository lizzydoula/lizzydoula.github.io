// libs
import React from 'react'
import styled, { css, cx } from 'react-emotion'

// components
import { Button } from 'components/UI/Button'

// constants
import { theme } from '../../../../../config/theme'

const Text = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: ${theme.brand.text.primary};
  margin: 0;
  text-align: center;
`

const hiddenStyles = css`
  display: none;
`

const formButtonStyles = css`
  flex-shrink: 0;
  margin-left: 16px;
`

const FormLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const FormGroup = styled.div``

const FormGroupField = styled.input`
  font-size: 12px;
  line-height: 16px;
  color: ${theme.brand.text.primary};
  padding: 8px 16px;
  border: 1px solid ${theme.colors.tide};
  border-radius: 0;
`

const Congratulation = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: ${theme.brand.text.primary};
  text-align: center;
`

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

const CourseParticipationForm = ({ course = 'Доульский кружок' }) => {
  const [formData, setFormData] = React.useState({})
  const [isSubmitted, setSubmitted] = React.useState(false)

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!formData.email) {
      return
    }

    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        'form-course': course,
        ...formData
      })
    })
      .then(() => setSubmitted(true))
      .catch(error => console.error(error))
  }

  if (isSubmitted) {
    return <Congratulation>Спасибо! Я обязательно свяжусь с Вами в ближайшее время.</Congratulation>
  }

  return (
    <div>
      <form
        name="participation"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <FormLayout>
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="participation" />
          <div className={hiddenStyles}>
            <label htmlFor="bot-field">
              Don’t fill this out: <input id="bot-field" name="bot-field" onChange={handleChange} />
            </label>
          </div>
          <FormGroup>
            <label htmlFor="email">
              <FormGroupField type="email" id="email" name="email" onChange={handleChange} placeholder="Email" />
            </label>
          </FormGroup>
          <Button className={formButtonStyles} variant="contained" type="submit">
            Я участвую
          </Button>
        </FormLayout>
      </form>
      <Text>35 EUR - самостоятельно (видеоуроки)</Text>
      <Text>65 EUR - в группе (видеоуроки, чат, 1 встреча в Zoom)</Text>
      <Text>110 EUR - индивидуально (видеоуроки, моя поддержка в чате, 2 индивидуальные встречи в Zoom)</Text>
      {/* <Text>Стоимость марафона 110 EUR</Text> */}
      {/* <Text>Стоимость 190 EUR</Text> */}
    </div>
  )
}

export { CourseParticipationForm }
