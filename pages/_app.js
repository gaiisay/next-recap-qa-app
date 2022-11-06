import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import GlobalStyles from '../components/GlobalStyles'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  const { asPath, isReady } = useRouter()
  const [location, setLocation] = useState('')

  useEffect(() => {
    if (isReady) {
      setLocation(new URL(asPath, window?.location?.href).pathname)
    }
  }, [asPath, isReady])

  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
