import React, { Component }  from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Section"
import styled from 'styled-components'
import RenderClass from '../components/RenderClass'
import RenderTrial from '../components/RenderTrial'
import RenderEvent from '../components/RenderEvent'
import * as Colors from '../utils/colors'


class MyStudioView extends Component {
  render() {
    return (
      <Layout>
        <SEO title="MyStudio" keywords={[`MyStudio`, `react`]} />
        <Section>
          <Wrapper>
            {this.props.pageContext.data.map((pageInfo, index) => {
              let RenderComponent;
              switch (pageInfo.Type) {
                case 'm':
                  RenderComponent = RenderClass
                  break;
                case 't':
                  RenderComponent = RenderTrial
                  break;
                case 'e':
                  RenderComponent = RenderEvent
                  break;
                default:
                  return null;
              }
              return (
                <RenderComponent key={pageInfo.ID} index={index} data={pageInfo}/>
              )
            })}
          </Wrapper>
          <br/>
          <span>View our trial options via <MyLink href={this.props.pageContext.MyStudio}>MyStudio</MyLink></span>
        </Section>
      </Layout>
    )
  }
}

export default MyStudioView

const Wrapper = styled.div`
  justify-content: space-around;
  display: flex;
  z-index: 2;
  flex-wrap: wrap;
  margin: 0;
  margin-bottom: 50px;
  text-align: center;
`

const MyLink = styled.a`
  color: ${Colors.Green};
  text-decoration: none;

  &:visited {
    color: ${Colors.Green};
  }
  &:hover {
    color: ${Colors.Red};
  }
`
