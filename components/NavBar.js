import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

function NavBar({ active }) {
  const { pathname } = useRouter()

  return (
    <footer>
      <StyledNav>
        <ul>
          <li>
            <StyledLink
              href="/"
              active={pathname === '/'}
            >
              Start
            </StyledLink>
          </li>
          <li>
            <StyledLink
              href="/settings"
              active={pathname === '/settings'}
            >
              Settings
            </StyledLink>
          </li>
        </ul>
      </StyledNav>
    </footer>
  )
}

const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  bottom: 0;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 5rem;
  }

  li {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`
const StyledLink = styled(Link)`
  background-color: ${({ active }) => (active ? '#A2CEBB' : '#515361')};
  text-decoration: none;
  color: white;
  font-size: 2rem;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`

export default NavBar
