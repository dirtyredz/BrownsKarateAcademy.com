import React, { Component } from 'react'
import styled from 'styled-components'
import Section from "./Section"
import axios from 'axios'
import RenderClass from './RenderClass'
import RenderTrial from './RenderTrial'
import Loader from './Loader'
import * as Colors from '../utils/colors'

export default class Classes extends Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      classes: [],
      trialLoading: true,
      trials: [],
    }
  }
  componentDidMount() {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://www.mystudio.academy/m/Api/membership?companyid=2506`,{
      timeout: 20000,
    })
    .then(res => {
      this.setState({classes: res.data.msg, loading: false})
    })
    .catch((error) => {
      this.setState({loading: false})
    });

    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://www.mystudio.academy/t/Api/trialdetails?companyid=2506&trial_id=`,{
      timeout: 20000,
    })
    .then(res => {
      this.setState({trials: res.data.msg, trialLoading: false})
    })
    .catch((error) => {
      this.setState({trialLoading: false})
    });

  }

  render() {
    return (
      <MySection
        anchor="Classes"
      >
      <CenterHorizontal>
        <h1>CLASSES</h1>
        <br />
          <br />
        {!this.state.loading
          ? this.state.classes.length > 0
            ? (
              <ClassesWrapper>
                {this.state.classes.map((data, index) => <RenderClass key={`Class_${data.membership_id}`} index={index} data={data}/>)}
              </ClassesWrapper>
            )
            : (
              <span>The website is currently experiencing difficulties, Please call the number below for information.</span>
            )
          : <Loader />
        }
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
        {!this.state.trialLoading
          ? this.state.trials.length > 0
            ? (
              <ClassesWrapper>
                {this.state.trials.map((data, index) => <RenderTrial key={`Trial_${data.trial_id}`} index={index} data={data}/>)}
              </ClassesWrapper>
            )
            : (
              <span>The website is currently experiencing difficulties, Please call the number below for information.</span>
            )
          : null
        }
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

const ClassesWrapper = styled.ul`
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
