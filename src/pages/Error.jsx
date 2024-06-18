import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/not-found.svg'

const Error = () => {
  const error = useRouteError()
  console.log(error)

  if (error.status === 404) {
    console.log('there is an error')
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found page" />
          <h3>ohh! </h3>
          <p>We can not-found the page you are looking for.</p>
          <Link to="/">Back Home</Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <h3>something went wrong</h3>
    </Wrapper>
  )
}

export default Error
