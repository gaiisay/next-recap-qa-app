import Head from 'next/head'
import styled from 'styled-components'
import NavBar from './NavBar'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Ask away!</title>
      </Head>
      <body>
        <main>{children}</main>
        <NavBar />
      </body>
    </>
  )
}
