import styled from 'styled-components'

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
    line-height: 1.5;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
  }
`

export default Wrapper
