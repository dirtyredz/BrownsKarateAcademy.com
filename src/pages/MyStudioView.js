import React, { Component }  from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Section"
import * as Colors from '../utils/colors'
import BreakPoints from '../utils/breakpoints'
import styled, { createGlobalStyle } from 'styled-components'
import Fade from 'react-reveal/Fade';
import Popup from "reactjs-popup";
import sanitizeHtml from 'sanitize-html'

class MyStudioView extends Component {
  render() {
    return (
      <Layout>
        <SEO title="MyStudio" keywords={[`MyStudio`, `react`]} />
        <GlobalStyle />
        <Section>
          <Fade bottom cascade>
            <div>
              <br/>
              <br/>
              <br/>
              <br/>
              <Title>{this.props.location.state.Title}</Title>
              <br/>
              <CenterMe>
                <img alt={this.props.location.state.Image} src={this.props.location.state.Image}/>
              </CenterMe>
              <br/>
              <SubTitle>{this.props.location.state.Subtitle}</SubTitle>
              <br/>
              <br/>
              <Description
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(
                    this.props.location.state.Description,
                    {
                      allowedTags: [ 'b', 'br', 'span', 'i', 'em', 'strong', 'a' ],
                      allowedAttributes: {
                        'a': [ 'href' ]
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
                  <CenterMe>
                    <MyStudioButton>
                      <div>Membership Options</div>
                      <img alt="MyStudio Link" src="https://www.mystudio.academy/v30/WebPortal/image/logo_incourage.png"/>
                    </MyStudioButton>
                  </CenterMe>
                }
                modal
                closeOnDocumentClick
              >
                <Wrapper>
                  <MyIframe src={this.props.location.state.MyStudio}></MyIframe>
                </Wrapper>
              </Popup>
            </div>
          </Fade>
        </Section>
      </Layout>
    )
  }
}

export default MyStudioView


const GlobalStyle = createGlobalStyle`
  div.popup-content {
    width: 60% !important;
    height: 80% !important;
  }

  @media (max-width:${BreakPoints.tablet}px) {
    div.popup-content {
      width: 90% !important;
      height: 80% !important;
    }
  }
  /* @media (min-width:${BreakPoints.mobileLandscape}px) and (max-width:${BreakPoints.tablet}px) {
    div.popup-content {
      width: 60% !important;
      height: 80% !important;
    }
  } */
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

const Title = styled.div`
  font-size: 150%;
  font-weight: 900;
  text-align: center;
`
const CenterMe = styled.div`
  display: flex;
  justify-content: center;
`

const SubTitle = styled.div`
  font-size: 140%;
  font-weight: 700;
  text-align: center;
`

const Description = styled.div`
  padding: 30px;
  font-size: 120%;
  font-weight: 600;
  text-align: center;
`

const MyHR = styled.hr`
  border-bottom: ${Colors.Red} 3px solid;
`
const MyStudioButton = styled.button`
  background-color: ${Colors.Red};
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px;
  color: ${Colors.White};

  & > div {
    width: 100%;
  }
  & > img {
    margin: 0;
  }
`
