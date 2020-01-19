// libs
import React from 'react'
import styled from 'react-emotion'

// components
import { ThemeProvider } from 'emotion-theming'
import { PageHeader, SEO, Footer } from 'components'

// constants
import { theme } from '../../config/theme'

const Main = styled.main`
  padding-top: 68px;
  flex: 1;
`

const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Layout = ({ mainNavigation, children }) => (
  <Page>
    <ThemeProvider theme={theme}>
      <>
        <SEO />
        <PageHeader navigation={mainNavigation} />
        <Main>{children}</Main>
        <Footer />
      </>
    </ThemeProvider>
  </Page>
)

export default Layout
