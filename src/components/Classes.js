import React, { Component } from 'react'
import styled from 'styled-components'
import Section from "./Section"
import RenderClass from './RenderClass'
import * as Colors from '../utils/colors'
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

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
                <MyLink to="/Classes">VIEW ALL CLASSES</MyLink>
              </>
            )
          }}
        />
      </CenterHorizontal>
    </MySection>
    )
  }
}

const MySection = styled(Section)`
  min-height: 400px;
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

const MyLink = styled(Link)`
  color: ${Colors.Green};
  text-decoration: none;
  text-align: left;

  &:visited {
    color: ${Colors.Green};
  }
  &:hover {
    color: ${Colors.Red};
  }
`
