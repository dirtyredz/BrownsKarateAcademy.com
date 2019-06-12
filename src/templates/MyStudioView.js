import React  from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Section"
import * as Colors from '../utils/colors'
import BreakPoints from '../utils/breakpoints'
import styled, { createGlobalStyle } from 'styled-components'
import Popup from "reactjs-popup";
import sanitizeHtml from 'sanitize-html'

const MyStudioView = (props) => {
  const Title = props.pageContext ? props.pageContext.Title : ''
  const Image = props.pageContext ? props.pageContext.Image : false
  const SubTitle = props.pageContext ? props.pageContext.SubTitle : ''
  const Description = props.pageContext ? props.pageContext.Description : '404'
  const Iframe = props.pageContext ? props.pageContext.MyStudio : false
  const Type = props.pageContext ? props.pageContext.Type : 'm'
  let ButtonText = ''
  switch (Type) {
    case 'm':
      ButtonText="Membership Options"
      break;
    case 'e':
      ButtonText="Register for Event"
      break;
    case 't':
      ButtonText="Sign Up Today"
      break;
    default:
      break;
  }
  return (
    <Layout>
      <SEO title="MyStudio" keywords={[`MyStudio`, `react`]} />
      <GlobalStyle />
      <Section>
        <br/>
        <br/>
        <br/>
        <br/>
        <TitleWrap>{Title}</TitleWrap>
        <br/>
        <CenterMe>
          {Image && <img alt={Image} src={Image}/>}
        </CenterMe>
        <br/>
        <SubTitleWrap>{SubTitle}</SubTitleWrap>
        <br/>
        <br/>
        <DescriptionWrap
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(
              Description,
              {
                allowedTags: [ 'b', 'br', 'span', 'i', 'em', 'strong', 'a', 'li', 'ul'  ],
                allowedAttributes: {
                'a': [ 'href', 'ng-click', 'target'],
                  'span': ['style']
                }
              }
            )
          }}
        />
        <br/>
        <MyHR/>
        <br/>
        <CenterMe>
          Click below to see available options!
        </CenterMe>
        <br />
        <Popup
          trigger={
            <CenterMeButton>
              <MyStudioButton>
                <div>{ButtonText}</div>
                <img alt="MyStudio Link" src="https://www.mystudio.academy/v30/WebPortal/image/logo_incourage.png"/>
              </MyStudioButton>
            </CenterMeButton>
          }
          modal
          closeOnDocumentClick
        >
          <Wrapper>
            {Iframe && <MyIframe src={Iframe}></MyIframe>}
          </Wrapper>
        </Popup>
      </Section>
    </Layout>
  )
}
export default MyStudioView

const GlobalStyle = createGlobalStyle`
  div.popup-content {
    width: 60%;
    height: 80%;
  }
  @media (max-width:${BreakPoints.tablet}px) {
    div.popup-content {
      width: 95% !important;
      height: 80% !important;
    }
  }
`
const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
`

const MyIframe = styled.iframe`
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`

const TitleWrap = styled.div`
  font-size: 150%;
  font-weight: 900;
  text-align: center;
`
const CenterMe = styled.div`
  display: flex;
  justify-content: center;
`
const CenterMeButton = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  margin: auto;
`
const SubTitleWrap = styled.div`
  font-size: 140%;
  font-weight: 700;
  text-align: center;
`

const DescriptionWrap = styled.div`
  padding: 30px;
  font-size: 120%;
  font-weight: 600;
  text-align: left;
`

const MyHR = styled.hr`
  border-bottom: ${Colors.Red} 3px solid;
`
const MyStudioButton = styled.button`
  width: 100%;
  background-color: ${Colors.Red};
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px;
  border-radius: 21px;
  box-shadow: 2px 3px 6px -2px ${Colors.White};

  & > div {
    width: 100%;
  }
  & > img {
    margin: 0;
  }

  &:hover {
    box-shadow: unset;
  }
`
