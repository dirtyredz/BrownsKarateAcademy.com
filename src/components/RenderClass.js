import React, { Component } from 'react'
import styled from 'styled-components'
import BreakPoints from '../utils/breakpoints'
import Button from './Button'
import Roll from 'react-reveal/Roll'; // Importing Zoom effect


const GetSmallDescription = (title, description) => {
  const Search = {
    Kid: 'Weve worked with students for over 20 years and know that every child is unique. Learn about the various classes we offer.',
    Adult: "If you've always dreamed about becoming a black belt but wonder if you can meet the challenge. Let us help you make your dream come true.",
    Arnis: 'Sensei Brown has been working closely with the Philippine Masters to bring these teachings to the Midwest.',
    Weapon: 'Looking to expand your skills into weapons, then this class is for you.',
  }
  const Defaults = [
    'Some Default Message'
  ]

  const Found = Object.keys(Search).find((des) => {
    const reg = new RegExp(`.*${des}.*`, 'i');
    return reg.test(title) || reg.test(description)
  })

  return Search[Found] || Defaults[Math.floor(Math.random() * Defaults.length)]
}

export default class RenderClass extends Component {
  render() {
    const {data, index} = this.props
    const type = 'm'
    return (
      <Roll delay={index * 500} onReveal={ () => console.log('Reveal')} >
        <ClassWrap>
          <TitleWrap Rotate={index % 2 ? 10 : 170}>
            <span>{data.category_title}</span>
          </TitleWrap>
          <br/>
          <SmallDesc>{GetSmallDescription(data.category_title, data.category_description)}</SmallDesc>
          <br/>
          <Button
            to="/MyStudioView/"
            state={{
              Image: data.category_image_url,
              Title: data.category_title,
              Description: data.category_description,
              Subtitle: data.category_subtitle,
              type,
              MyStudio: `https://www.mystudio.academy/${type}/?=7155412187/2506/${data.membership_id}`
            }}
            index={index} />
        </ClassWrap>
       </Roll>
    )
  }
}

const TitleWrap = styled.div`
  background-color: white;
  padding: 20px;
  color: black;
  border-radius: 50%;
  transform: ${(props) => `rotate(${props.Rotate}deg)`};
  display: flex;
  justify-content: center;
  height: 100%;
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
const ClassWrap = styled.li`
  display: flex;
  height: 100%;
  max-width: 300px;
  flex-direction: column;
  margin-top: 20px;
  justify-content: space-between;

  @media (max-width:${BreakPoints.mobileLandscape}px) {
    max-width: 160px;
  }
  @media (min-width:${BreakPoints.mobileLandscape}px) and (max-width:${BreakPoints.tablet}px) {
    max-width: 235px;
  }
`
