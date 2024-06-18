import styled from 'styled-components'

const Wrapper = styled.nav`
  background: var(--white);
  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
  }
  .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    color: var(--primary-500);
    text-transform: capitalize;
    font-weight: 700;
    letter-spacing: 2px;
  }
  .nav-links {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .nav-link {
    color: var(--grey-900);
    text-transform: capitalize;
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: var(--transition);
    letter-spacing: 2px;
  }

  .nav-link:hover {
    color: var(--primary-500);
  }
  .active {
    color: var(--primary-500);
  }
  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      flex-direction: row;
    }
  }
`
export default Wrapper
