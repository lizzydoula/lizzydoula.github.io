// libs
import React from 'react'
import { Link } from 'gatsby'
import styled, { css, cx } from 'react-emotion'

// components
import { Typography } from 'components/UI/Typography'

// constants
import { theme } from '../../config/theme'

const Menu = styled.div`
  padding: 0 16px;
`

const MenuItem = styled.div`
  border-bottom: 1px solid ${props => props.theme.brand.text.secondary};

  &:last-of-type {
    border-bottom: none;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    border: none;
  }
`

const linkStyles = css`
  display: block;
  padding: 16px 0;
  text-decoration: none;
  color: ${theme.colors.black};

  @media (min-width: ${theme.breakpoints.lg}) {
    border: none;
    padding: 0 16px;
    text-transform: uppercase;
    font-size: 12px;
  }

  &.active {
    font-weight: bold;
  }
`

const MainNavigation = ({ className, items, mobile = false }) => (
  <Menu className={className}>
    {items.map(navigationItem => (
      <MenuItem key={navigationItem.id}>
        <Link className={linkStyles} activeClassName="active" to={navigationItem.href}>
          <Typography color={mobile ? 'secondary' : 'inherit'} variant={mobile ? 'body2' : 'caps'}>
            {navigationItem.title}
          </Typography>
        </Link>
      </MenuItem>
    ))}
  </Menu>
)

export { MainNavigation }
