// libs
import React from 'react'
import PropTypes from 'prop-types'
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

const Layout = ({ children }) => (
  <Page>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <SEO />
        <PageHeader />
        <Main>{children}</Main>
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  </Page>
)

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired
}
