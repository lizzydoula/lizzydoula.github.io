// libs
import React from 'react'
import styled, { cx, css } from 'react-emotion'

// constants
import theme from '../../../../../config/theme'

const CourseProgramList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media (min-width: ${theme.breakpoints.lg}) {
    flex-direction: row;

    &:before {
      content: '';
      display: block;
      background-color: ${theme.colors.chablis};
      height: 1px;
      width: 696px;
      position: absolute;
      bottom: 20px;
      left: 116px;
      z-index: -1;
    }
  }
`

const CourseProgramListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  box-sizing: content-box;
  margin: 8px 0;

  @media (min-width: ${theme.breakpoints.lg}) {
    margin: 0;
    width: 200px;
    flex-direction: column-reverse;
  }
`

const CourseProgramListText = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: ${theme.brand.text.primary};
  margin: 0;
  margin-left: 16px;

  @media (min-width: ${theme.breakpoints.lg}) {
    text-align: center;
    margin-left: 0;
    margin-bottom: 8px;
  }
`

const CourseProgramListNumber = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: ${theme.brand.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 41px;
  height: 41px;
  border-radius: 50%;
  background-color: ${theme.colors.chablis};
  margin-top: auto;
  flex-shrink: 0;
`

const secondListCss = css`
  @media (min-width: ${theme.breakpoints.lg}) {
    margin-top: 64px;

    & > div {
      flex-direction: column;
    }
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    margin-left: 116px;
  }

  &:before {
    bottom: auto;
    top 20px;
  }
`

const ListSeparator = styled.div`
  content: '';

  @media (min-width: ${theme.breakpoints.lg}) {
    display: block;
    background-color: ${theme.colors.chablis};
    height: 1px;
    width: 580px;
    position: absolute;
    top: -32px;
    left: 116px;
  }
`

const ServiceProgram = () => (
  <>
    <CourseProgramList>
      <CourseProgramListItem>
        <CourseProgramListNumber>1</CourseProgramListNumber>
        <CourseProgramListText>В ожидании родов. Работа с информацией</CourseProgramListText>
      </CourseProgramListItem>
      <CourseProgramListItem>
        <CourseProgramListNumber>2</CourseProgramListNumber>
        <CourseProgramListText>План родов и участники</CourseProgramListText>
      </CourseProgramListItem>
      <CourseProgramListItem>
        <CourseProgramListNumber>3</CourseProgramListNumber>
        <CourseProgramListText>С чего начинаются роды. Работа с тревогой</CourseProgramListText>
      </CourseProgramListItem>
      <CourseProgramListItem>
        <CourseProgramListNumber>4</CourseProgramListNumber>
        <CourseProgramListText>Схватки. Боль, дыхание, расслабляющие техники</CourseProgramListText>
      </CourseProgramListItem>
    </CourseProgramList>
    <CourseProgramList className={secondListCss}>
      <CourseProgramListItem>
        <CourseProgramListNumber>5</CourseProgramListNumber>
        <CourseProgramListText>Что происходит в родзале. Первые часы после родов</CourseProgramListText>
      </CourseProgramListItem>
      <CourseProgramListItem>
        <CourseProgramListNumber>6</CourseProgramListNumber>
        <CourseProgramListText>Восстановление женщины после родов</CourseProgramListText>
      </CourseProgramListItem>
      <CourseProgramListItem>
        <CourseProgramListNumber>7</CourseProgramListNumber>
        <CourseProgramListText>Грудное вскармливание и уход за младенцем</CourseProgramListText>
      </CourseProgramListItem>
      <CourseProgramListItem>
        <CourseProgramListNumber>8</CourseProgramListNumber>
        <CourseProgramListText>Отношения в семье после родов</CourseProgramListText>
      </CourseProgramListItem>
    </CourseProgramList>
  </>
)

export { ServiceProgram }
