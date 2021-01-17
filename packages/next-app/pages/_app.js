import { useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const importWC = async () => {
      await import('@nextjs-wc-ex/wc-components')
    }

    importWC()
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
