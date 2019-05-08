import React, { Component } from 'react'
import styled from 'styled-components'
import BreakPoints from '../utils/breakpoints'
import Button from './Button'
import Roll from 'react-reveal/Roll'; // Importing Zoom effect
import ErrorBoundary from './ErrorBoundary'


const GetSmallDescription = (title, description) => {
  const Search = {
    Kid: 'Weve worked with students for over 20 years and know that every child is unique. Learn about the various classes we offer.',
    Adult: "If you've always dreamed about becoming a black belt but wonder if you can meet the challenge. Let us help you make your dream come true.",
    Arnis: 'Sensei Brown has been working closely with the Philippine Masters to bring these teachings to the Midwest.',
    Weapon: 'Looking to expand your skills into weapons, then this class is for you.',
  }
  const Defaults = [
    'Join us today and see what Sensei Brown can do for you.'
  ]

  const Found = Object.keys(Search).find((des) => {
    const reg = new RegExp(`.*${des}.*`, 'i');
    return reg.test(title) || reg.test(description)
  })

  return Search[Found] || Defaults[Math.floor(Math.random() * Defaults.length)]
}

export default class RenderClass extends Component {
  render() {
    const { index } = this.props
    return (
      <ErrorBoundary FallbackComponent={
        <Class {...this.props}/>
      }>
        <Roll delay={index * 500} >
          <Class {...this.props}/>
        </Roll>
       </ErrorBoundary>
    )
  }
}

const Class = ({ data, index }) => {
  let { context, path } = data
  if (!context) {
    context = data
  }
  return (
    <ClassWrap>
      <TitleWrap Rotate={index % 2 ? 10 : 170}>
        <span>{context.Title}</span>
      </TitleWrap>
      <br/>
      <SmallDesc>{GetSmallDescription(context.Title, context.Description)}</SmallDesc>
      <br/>
      <Button
        text="VIEW CLASS"
        aria-label={`Class ${context.Title}`}
        to={path}
        index={index} />
    </ClassWrap>
  )
}

const TitleWrap = styled.div`
  background-color: white;
  padding: 20px;
  color: black;
  border-radius: 50%;
  transform: ${(props) => `rotate(${props.Rotate}deg)`};
  display: flex;
  justify-content: center;
  height: 350px;
  max-height: 121px;

  & > span {
    transform: ${(props) => `rotate(-${props.Rotate}deg)`};
    font-size: 120%;
    font-weight: 700;
    width: 200px;
  }

  @media (max-width:${BreakPoints.mobileLandscape}px) {
    max-height: 80px;
  }
  @media (min-width:${BreakPoints.mobileLandscape}px) and (max-width:${BreakPoints.tablet}px) {
    max-height: 100px;
  }
`
const SmallDesc = styled.span`
  font-size: 80%;
  padding: 5px;

  @media (max-width:${BreakPoints.mobileLandscape}px) {
    font-size: 110%;
  }
  @media (min-width:${BreakPoints.mobileLandscape}px) and (max-width:${BreakPoints.tablet}px) {
    font-size: 90%;
  }
`
const ClassWrap = styled.div`
  display: flex;
  height: 100%;
  max-width: 300px;
  flex-direction: column;
  padding-top: 20px;
  justify-content: space-between;

  @media (max-width:${BreakPoints.mobileLandscape}px) {
    max-width: 160px;
  }
  @media (min-width:${BreakPoints.mobileLandscape}px) and (max-width:${BreakPoints.tablet}px) {
    max-width: 235px;
  }
`
