import React, { Component } from 'react'
import styled from 'styled-components'
import Section from "./Section"
import * as Colors from '../utils/colors'
import { GirlKarate1 } from './Icons'
import BreakPoints from '../utils/breakpoints'

export default class GreenBox extends Component {
  render() {
    return (
      <MySection
        color={Colors.Black}
        bgColor={Colors.Grey}
      >
        <Wrapper>
          <Box>
            <InnerBox>
              <CenterVert>
                Brown’s Karate Academy is the area’s Oldest and Most Experienced Professional Martial Arts School, owned by one of the Highest Ranking Traditional Okinawan Martial Arts Instructors in Wisconsin, 7th Degree Master Lloyd A. Brown.
              </CenterVert>
            </InnerBox>
          </Box>
          <GirlWrapper>
          <MyGirl />

          </GirlWrapper>
        </Wrapper>
      </MySection>
    )
  }
}

const CenterVert = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  font-size: calc(54% + 1vw);
`

const InnerBox = styled.div`
  margin: 5px;
  height: calc(100% - 10px);
  border: 5px solid ${Colors.Grey};
  padding: 5px;
  padding-left: calc(100px + 10vw);
  text-align: center;
  color: ${Colors.Black};
  font-weight: 700;
`

const Wrapper = styled.div`
  position: relative;
  max-height: 300px;
  height: calc(100px + 10vw);
`

const Box = styled.div`
  background-color: ${Colors.Green};
  clip-path: polygon(100% 0,100% 100%,calc(calc(100px + 10vw) / 14) 100%,calc(calc(100px + 10vw) / 2.5) calc(calc(100px + 10vw) / 1.8),calc(calc(100px + 10vw) / 2.2) calc(calc(100px + 10vw) / 2.5),calc(calc(100px + 10vw) / 2) 0);
  position: absolute;
  /* z-index: 2; */
  top: 0;
  color: white;
  left: 0;
  width: 100%;
  height: calc(calc(100px + 10vw) - 12px);
  margin: 6px 0;
  @media ${`(max-width: ${BreakPoints.tablet}px)`} {
    height: calc(calc(100px + 10vw) - 8px);
    margin: 4px 0;
  }
  @media ${`(max-width: ${BreakPoints.mobile}px)`} {
    height: calc(calc(100px + 10vw) - 6px);
    margin: 3px 0;
  }
`

const MyGirl = styled(GirlKarate1)`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
`

const MySection = styled(Section)`
`

const GirlWrapper = styled.div`
    width: calc(100px + 10vw);
    height: calc(100px + 10vw);
    /* height: 0; */
    /* padding-top: calc(32 / 32 * calc(100px + 10vw)); */
    position: relative;
`
