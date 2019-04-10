import React from 'react'
import styled from 'styled-components'

import Section from './Section'
import * as Colors from '../utils/colors'
import { FooterMenu as Menu} from './Menu'

const Footer = props => {
  return (
    <Section
      color={Colors.Black}
      bgColor={Colors.Grey}
      padding={false}
      tag="footer"
    >
        <CallToday>CALL TODAY&nbsp;&nbsp;715-541-2187</CallToday>
        <FooterMenuStyled/>
        <br />
        <br />
        <OnTheRight>
          We believe that you will find Brown’s Karate Academy to be one of the best Martial Arts Schools you will encounter….Come and experience the difference for yourself!
        </OnTheRight>
        <br />
        <SpreadApart>
          <span>Website by <MyLink href="https://digitalredz.com">Digital Redz</MyLink></span>
          <span>
            © <time>{new Date().getFullYear()}</time> BrownsKarateAcademy  | All Rights Reserved
          </span>
        </SpreadApart>
    </Section>
  )
}

Footer.propTypes = {

}

export default Footer

const MyLink = styled.a`
  color: ${Colors.Red};
  text-decoration: none;

  &:visited {
    color: ${Colors.Red};
  }
  &:hover {
    color: ${Colors.Green};
  }
`
const CallToday = styled.div`
  /* width: 500px; */
  text-align: right;
  padding: 0 25px;
  font-weight: 700;
  font-size: 140%;
`

const OnTheRight = styled.div`
  width: 80%;
  text-align: right;
  padding: 5px 20px;
  margin-left: auto;
`

const FooterMenuStyled = styled(Menu)`
  padding: 5px 20px;
  float: right;
`
const SpreadApart = styled.div`
  font-size: 60%;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
`
