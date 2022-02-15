import { globalStyles } from "../styles/global"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {globalStyles()}
    </>
  )
}

export default MyApp
