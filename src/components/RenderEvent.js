import React, { Component } from 'react'
import styled from 'styled-components'
import BreakPoints from '../utils/breakpoints'
import Button from './Button'
import Fade from 'react-reveal/Fade'; // Importing Zoom effect
import sanitizeHtml from 'sanitize-html'

export default class RenderEvent extends Component {
  componentDidMount() {
    const MyStudioLinks = document.querySelectorAll('a[ng-click]')
    const LinksToFix = Array.prototype.slice.call(MyStudioLinks)
    
    LinksToFix.map(aTag => {
      const url = aTag.getAttribute('ng-click')
      const fixedUrl = url.replace(/^openevents\('/,'').replace(/'\)$/,'')
      aTag.setAttribute('href', fixedUrl)
      aTag.setAttribute('download', '')
      return fixedUrl
    })
  }
  render() {
    const { data, index } = this.props
    let { context, path } = data
    if (!context) {
      context = data
    }

    return (
      <Fade delay={index * 500} >
        <EventWrap>
          <Title>{context.Title}</Title>
          <br/>
          <SmallDesc
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(
                context.Description,
                {
                  allowedTags: [ 'b', 'br', 'span', 'i', 'em', 'strong', 'a' ],
                  allowedAttributes: {
                    'a': [ 'href', 'ng-click', 'target']
                  }
                }
              )
            }}
          />
          <br/>
          <Button
            text="VIEW EVENT"
            aria-label={`Event ${context.Title}`}
            to={path}
            index={index}
          />
        </EventWrap>
       </Fade>
    )
  }
}

const Title = styled.div`
  font-size: 120%;
  font-weight: 700;
`

const EventWrap = styled.div`
  display: flex;
  /* height: 100%; */
  max-width: 300px;
  flex-direction: column;
  margin-top: 30px;
  justify-content: space-between;

  @media (max-width:${BreakPoints.mobileLandscape}px) {
    max-width: 160px;
  }
  @media (min-width:${BreakPoints.mobileLandscape}px) and (max-width:${BreakPoints.tablet}px) {
    max-width: 235px;
  }
`


const SmallDesc = styled.span`
  font-size: 80%;
  font-weight: 600;

  @media (max-width:${BreakPoints.mobileLandscape}px) {
    font-size: 110%;
  }
  @media (min-width:${BreakPoints.mobileLandscape}px) and (max-width:${BreakPoints.tablet}px) {
    font-size: 90%;
  }
`