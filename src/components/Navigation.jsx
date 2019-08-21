import React from 'react'
import { Link } from 'gatsby'
import { FaInstagram, FaFacebook, FaYoutubeSquare } from 'react-icons/fa'
import styled, { css } from 'react-emotion'
import config from '../../config/website'
import theme from '../../config/theme'

const Wrapper = styled.header`
  a {
    color: ${props => props.theme.colors.black};
    text-decoration: none;
  }
`

const TopHeader = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    padding: 1.5rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    flex-direction: column;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 1rem 0;
  }
`

const BottomHeader = styled.img`
  margin: 0;
  height: 60vh;
  width: 100%;
  object-fit: cover;
  opacity: 0.8;
`

const active = css`
  border-color: ${theme.brand.primary} !important;
  border-bottom: 3px solid;
`

const Nav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  a:not(:first-child) {
    margin-left: 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    margin-top: 0.5rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    flex-direction: column;
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    order: 2;
  }
`

const Links = styled.div`
  display: flex;
`

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 0 ${props => props.theme.spacer.horizontal};
  a {
    color: ${props => props.theme.brand.secondary};
    font-size: 1.25rem;
    line-height: 20px;
  }
  a:not(:first-child) {
    margin-left: 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    margin-top: 1rem;
    padding: 0 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    order: 3;
  }
`

const LogoImage = styled.img`
  margin: 0;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 0 2rem;
  }
`

const Navigation = () => (
  <Wrapper>
    <TopHeader>
      <Link to="/">
        <LogoImage src="/logo.jpg" alt={config.siteTitle} />
      </Link>
      <Nav>
        <Links>
          <Link
            to="/"
            activeClassName={css`
              ${active};
            `}
          >
            Привет
          </Link>
          {/* 
          <Link
            to="/services"
            activeClassName={css`
              ${active};
            `}
          >
            Услуги
          </Link>
          <Link
            to="/contact"
            activeClassName={css`
              ${active};
            `}
          >
            Контакты
          </Link> */}
        </Links>
        <SocialMedia>
          <a href="https://www.instagram.com/doula_lizzy/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/doulalizzyCY" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.youtube.com/channel/UCAn9mBvc8dTjhDwYS3yjajg" target="_blank" rel="noopener noreferrer">
            <FaYoutubeSquare />
          </a>
        </SocialMedia>
      </Nav>
    </TopHeader>
    <BottomHeader src="/doula.jpg" alt="Доула" />
  </Wrapper>
)

export default Navigation
