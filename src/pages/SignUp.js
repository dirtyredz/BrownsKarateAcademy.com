import React, { Component }  from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Section"
import * as Colors from '../utils/colors'
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"

class SignUpPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="SignUp" keywords={[`SignUp`]} />
        <StaticQuery
          query={graphql`
            query {
              Search: file(relativePath: { eq: "Mystudio Instructions/Search.png" }) {
                childImageSharp {
                  fluid(maxWidth: 350) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              Install: file(relativePath: { eq: "Mystudio Instructions/Install.png" }) {
                childImageSharp {
                  fluid(maxWidth: 350) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              Open: file(relativePath: { eq: "Mystudio Instructions/Open.png" }) {
                childImageSharp {
                  fluid(maxWidth: 350, maxHeight: 350) {
                    ...GatsbyImageSharpFluid
                    presentationHeight
                  }
                }
              }
              StudioCode: file(relativePath: { eq: "Mystudio Instructions/Studio Code.png" }) {
                childImageSharp {
                  fluid(maxWidth: 350) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              LogIn: file(relativePath: { eq: "Mystudio Instructions/Log In.png" }) {
                childImageSharp {
                  fluid(maxWidth: 350) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              NewUser: file(relativePath: { eq: "Mystudio Instructions/New User.png" }) {
                childImageSharp {
                  fluid(maxWidth: 350) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              Menu: file(relativePath: { eq: "Mystudio Instructions/Menu.png" }) {
                childImageSharp {
                  fluid(maxWidth: 350) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              Membership: file(relativePath: { eq: "Mystudio Instructions/Membership.png" }) {
                childImageSharp {
                  fluid(maxWidth: 350) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              SelectMembership: file(relativePath: { eq: "Mystudio Instructions/Select Membership.png" }) {
                childImageSharp {
                  fluid(maxWidth: 350) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              MembershipOptions: file(relativePath: { eq: "Mystudio Instructions/Membership Options.png" }) {
                childImageSharp {
                  fluid(maxWidth: 350) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              SelectOption: file(relativePath: { eq: "Mystudio Instructions/Select Option.png" }) {
                childImageSharp {
                  fluid(maxWidth: 350) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              SelectStartDate: file(relativePath: { eq: "Mystudio Instructions/Start Date Button.png" }) {
                childImageSharp {
                  fluid(maxWidth: 350) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              SelectDate: file(relativePath: { eq: "Mystudio Instructions/Select Date.png" }) {
                childImageSharp {
                  fluid(maxWidth: 350) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              CheckOut: file(relativePath: { eq: "Mystudio Instructions/Check Out.png" }) {
                childImageSharp {
                  fluid(maxWidth: 350) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              ParticipantInfo: file(relativePath: { eq: "Mystudio Instructions/Participant Info.png" }) {
                childImageSharp {
                  fluid(maxWidth: 350) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              BuyerInfo: file(relativePath: { eq: "Mystudio Instructions/Buyer Info.png" }) {
                childImageSharp {
                  fluid(maxWidth: 350) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              AddressInfo: file(relativePath: { eq: "Mystudio Instructions/Address Info.png" }) {
                childImageSharp {
                  fluid(maxWidth: 350) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              PaymentInfo: file(relativePath: { eq: "Mystudio Instructions/Payment Info.png" }) {
                childImageSharp {
                  fluid(maxWidth: 350) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              Waiver: file(relativePath: { eq: "Mystudio Instructions/Waiver.png" }) {
                childImageSharp {
                  fluid(maxWidth: 350) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          `}
          render={data => (
            <Section
              color={Colors.Black}
              bgColor={Colors.White}
            >
              <Centered>
                <h1>MyStudio Sign Up Instructions</h1>
                <span>
                  Thank you for considering to Join Browns Karate Academy,
                  <br/>
                  Below you will find instructions on how to install and sign up using the MyStudio App.
                </span>
                <br />
                <br />
                <h3>Step 1</h3>
                <SubTitle>Installing The App</SubTitle>
                <br/>
                <br/>
                <span>
                  These links will take you to the app, otherwise you can search for the app
                  <br/>
                  You can use search terms "MyStudio App", or "MyStudio Academy"
                  <br/>
                  Android: <a href="https://play.google.com/store/apps/details?id=com.mystudio.app">https://play.google.com/store/apps/details?id=com.mystudio.app</a>
                  <br/>
                  Itunes: <a href="https://itunes.apple.com/us/app/mystudio-app/id1258207230?mt=8">https://itunes.apple.com/us/app/mystudio-app/id1258207230?mt=8</a>
                </span>
                <CenterImg>
                  <MyImg fluid={data.Search.childImageSharp.fluid}/>
                </CenterImg>
                <span>
                  Using the google store or the app store, Search for the MyStudio App.
                  <br/>
                  You can use search terms "MyStudio App", or "MyStudio Academy"
                </span>
                <br />
                <br/>
                <span>
                  After you have found the app, Install and open the app.
                </span>
                <br/>
                <CenterImg>
                  <MyImg fluid={data.Install.childImageSharp.fluid}/>
                  <MyImg style={{maxHeight: data.Open.childImageSharp.fluid.presentationHeight,}} fluid={data.Open.childImageSharp.fluid}/>
                </CenterImg>
                <br />
                <br />
                <h3>Step 2</h3>
                <SubTitle>Sign up for MyStudio</SubTitle>
                <br/>
                <br/>
                <span>
                  Select "Studio Member Log In".
                </span>
                <br/>
                <CenterImg>
                  <MyImg fluid={data.LogIn.childImageSharp.fluid}/>
                </CenterImg>
                <br/>
                <br/>
                <span>
                  Select "I'm a New User".
                </span>
                <br/>
                <CenterImg>
                  <MyImg fluid={data.NewUser.childImageSharp.fluid}/>
                </CenterImg>
                <br/>
                <br/>
                <span>Enter the Studio Code "7155412187".</span>
                <br/>
                <CenterImg>
                  <MyImg fluid={data.StudioCode.childImageSharp.fluid}/>
                </CenterImg>
                <br/>
                <br/>
                <h3>Step 3</h3>
                <SubTitle>Selecting a Membership</SubTitle>
                <br/>
                <br/>
                <span>On this page you can view currently available events, messages, and resources.</span>
                <br/>
                <span>To sign up for a membership you will want to open the menu</span>
                <br/>
                <CenterImg>
                  <MyImg fluid={data.Menu.childImageSharp.fluid}/>
                </CenterImg>
                <br/>
                <br/>
                <span>and select "Memberships"</span>
                <br/>
                <CenterImg>
                  <MyImg fluid={data.Membership.childImageSharp.fluid}/>
                </CenterImg>
                <br/>
                <br/>
                <span>Here you will want to select the class that you wish to attend.</span>
                <br/>
                <CenterImg>
                  <MyImg fluid={data.SelectMembership.childImageSharp.fluid}/>
                </CenterImg>
                <br/>
                <br/>
                <h3>Step 5</h3>
                <SubTitle>Signing up for your selected membership.</SubTitle>
                <br/>
                <br/>
                <span>After reading the details of the membership you will want to select "Membership Options" at the bottom of the page.</span>
                <br/>
                <CenterImg>
                  <MyImg fluid={data.MembershipOptions.childImageSharp.fluid}/>
                </CenterImg>
                <br/>
                <br/>
                <span>Here you will choose from the availale payment options for this class.</span>
                <br/>
                <CenterImg>
                  <MyImg fluid={data.SelectOption.childImageSharp.fluid}/>
                </CenterImg>
                <br/>
                <br/>
                <span>After reading through the payment option you will want to select the "Select Membership Start Date" button.</span>
                <br/>
                <CenterImg>
                  <MyImg fluid={data.SelectStartDate.childImageSharp.fluid}/>
                </CenterImg>
                <br/>
                <br/>
                <span>Click the date that you wish for your membership to begin.</span>
                <br/>
                <CenterImg>
                  <MyImg fluid={data.SelectDate.childImageSharp.fluid}/>
                </CenterImg>
                <br/>
                <br/>
                <span>You will then be presented with you registration details and payment plan. As well as be given the opportunity to add any discount code.</span>
                <br/>
                <CenterImg>
                  <MyImg fluid={data.CheckOut.childImageSharp.fluid}/>
                </CenterImg>
                <br/>
                <br/>
                <span>After selecting Check Out you will need to fill out your participant information, this is information of the student who will be attending the class.</span>
                <br/>
                <CenterImg>
                  <MyImg fluid={data.ParticipantInfo.childImageSharp.fluid}/>
                </CenterImg>
                <br/>
                <br/>
                <span>Buyer information is the person responsible for paying for the membership, usually yourself or the parent.</span>
                <br/>
                <CenterImg>
                  <MyImg fluid={data.BuyerInfo.childImageSharp.fluid}/>
                </CenterImg>
                <br/>
                <br/>
                <span>Next you fill out your address information</span>
                <br/>
                <CenterImg>
                  <MyImg fluid={data.AddressInfo.childImageSharp.fluid}/>
                </CenterImg>
                <br/>
                <br/>
                <span>Payment information for the card that will be charged for sign up fee's and monthly payments.</span>
                <br/>
                <Note>If you are paying in cash you will not be required to fill out any payment information.</Note>
                <br/>
                <CenterImg>
                  <MyImg fluid={data.PaymentInfo.childImageSharp.fluid}/>
                </CenterImg>
                <br/>
                <br/>
                <span>Then finally you will need to read and agree to the waiver.</span>
                <br/>
                <CenterImg>
                  <MyImg fluid={data.Waiver.childImageSharp.fluid}/>
                </CenterImg>
                <br/>
                <span>After everything is filled out select the button at the bottom to pay any fees due immediatly and sign up for your class.</span>
                <br/>
                <br/>
                <a href="https://drive.google.com/file/d/17joxDq2Gi2IiKERyTlTvFJ15Zk_KaESV/view">More Instructions from MyStudio Here.</a>
                <br/>
                <br/>
                <h3>We look forward to seeing you soon!</h3>
                <br/>
                <br/>
              </Centered>
            </Section>
          )}
        />
      </Layout>
    )
  }
}

export default SignUpPage

const Centered = styled.div`
  text-align: center;
`

const MyImg = styled(Img)`
  width: 350px;
  margin: 5px;
`
const SubTitle = styled.span`
  font-weight: 400;
  font-size: 120%;
`
const Note = styled.span`
  font-weight: 200;
  font-size: 90%;
`
const CenterImg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
