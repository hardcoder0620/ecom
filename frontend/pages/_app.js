import '../styles/globals.css'
import '../styles/home.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return(
    <>

    <Component {...pageProps} />
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" />

    </>
    )
}
