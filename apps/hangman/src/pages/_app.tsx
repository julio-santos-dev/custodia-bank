import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('~/components/layout'), { ssr: false })
import { Provider, useStore } from '@packages/sdk/store'
import React from 'react'
import theme from '~/theme'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body, #__next {
    height: 100%;
  }

  #__next {
    margin: 0 auto;
  }

  body {
    font-family: "Open Sans", sans-serif;
    letter-spacing: -0.4px;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }
`

export default function App({ Component, pageProps }): JSX.Element {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </React.Fragment>
      </ThemeProvider>
    </Provider>
  )
}
