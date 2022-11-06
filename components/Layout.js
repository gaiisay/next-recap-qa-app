import styled from 'styled-components'
import NavBar from './NavBar'

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <NavBar />
    </>
  )
}
