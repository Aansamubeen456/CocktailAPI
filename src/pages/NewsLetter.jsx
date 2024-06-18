import { Form, redirect, useNavigation } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    const response = await axios.post(newsletterUrl, data)
    // console.log(response)

    toast.success(response.data.msg)
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    // console.log(error)
    return error
  }

  return redirect('/')
}

const NewsLetter = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <Form className="form" method="post">
      <h4 style={{ marginBottom: '2rem', textAlign: 'center' }}>
        our newsletter
      </h4>
      {/* name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-input"
          required
        />
      </div>
      {/*last name */}
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name:
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="form-input"
          required
        />
      </div>
      {/* email */}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-input"
          defaultValue="test@test.com"
          required
        />
      </div>
      <button type="submit" className="btn btn-block" disabled={isSubmitting}>
        {isSubmitting ? 'submitting' : 'submit'}
      </button>
    </Form>
  )
}

export default NewsLetter
