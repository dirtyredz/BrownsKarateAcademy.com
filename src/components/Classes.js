import React, { Component } from 'react'
import styled from 'styled-components'
import Section from "./Section"
// import axios from 'axios'
import RenderClass from './RenderClass'
import RenderTrial from './RenderTrial'
// import Loader from './Loader'
import * as Colors from '../utils/colors'
import { StaticQuery, graphql } from "gatsby"

export default class Classes extends Component {
  render() {
    return (
      <MySection
        anchor="Classes"
      >
      <CenterHorizontal>
        <h1>CLASSES</h1>
        <br />
        <br />
        <StaticQuery
          query={graphql`
            query {
              Classes: allSitePage(filter: { context: { Type: { eq: "m" }}}) {
                edges {
                  node {
                    path,
                    context{
                      Title
                      Type
                      Description
                      ID
                    }
                  }
                }
              },
              Trials: allSitePage(filter: { context: { Type: { eq: "t" }}}) {
                edges {
                  node {
                    path,
                    context{
                      Title
                      Type
                      Description
                      ID
                    }
                  }
                }
              }
            }
          `}
          render={data => {
            const Classes = data.Classes.edges
            const Trials = data.Trials.edges
            return (
              <>
                <ClassesWrapper>
                  {Classes.map((classInfo, index) => <RenderClass key={`Class_${classInfo.node.context.ID}`} index={index} data={classInfo.node}/>)}
                </ClassesWrapper>
                <br />
                <br />
                <Larger>Call Today for more details</Larger>
                <Smaller>715-541-2187</Smaller>
                <br/>
                <MyHR />
                <br/>
                <Smaller>Check out our current trial options!</Smaller>
                <br/>
                <br/>
                <ClassesWrapper>
                  {Trials.map((trialInfo, index) => <RenderTrial key={`Trial_${trialInfo.node.context.ID}`} index={index} data={trialInfo.node}/>)}
                </ClassesWrapper>
              </>
            )
          }}
        />
        <br/>
        <br/>
      </CenterHorizontal>
    </MySection>
    )
  }
}

const MySection = styled(Section)`
  min-height: 400px;
`
const MyHR = styled.hr`
  border-bottom: ${Colors.Red} 3px solid;
`

const ClassesWrapper = styled.div`
  justify-content: space-around;
  display: flex;
  z-index: 2;
  flex-wrap: wrap;
  margin: 0;
`
const Larger = styled.span`
  font-size: 150%;
  font-weight: 700;
`
const Smaller = styled.span`
  font-size: 130%;
  font-weight: 700;
`
const CenterHorizontal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`
