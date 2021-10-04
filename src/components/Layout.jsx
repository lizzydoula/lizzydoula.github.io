// libs
import React from 'react'
import styled from 'react-emotion'

// components
import Modal from 'react-modal'
import { ThemeProvider } from 'emotion-theming'
import { PageHeader } from './PageHeader'
import { SEO } from './SEO'
import { Footer } from './Footer'
import { Global } from './Global'

// constants
import { theme } from '../../config/theme'

Modal.setAppElement('#___gatsby')

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
      <Global>
        <SEO />
        <PageHeader navigation={mainNavigation} />
        <Main>{children}</Main>
        <Footer />
      </Global>
    </ThemeProvider>
  </Page>
)

export { Layout }
