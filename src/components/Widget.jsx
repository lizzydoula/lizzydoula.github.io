// libs
import React from 'react'
import styled from 'react-emotion'

const WidgetLayout = styled.div`
  padding: 64px 0;
`

const Widget = ({ children }) => <WidgetLayout>{children}</WidgetLayout>

export { Widget }
