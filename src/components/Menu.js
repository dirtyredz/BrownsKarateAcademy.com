import React from 'react'
import { Link } from "gatsby"
import { slide as BurgerMenu } from 'react-burger-menu'
import styled, { createGlobalStyle } from 'styled-components'
import { withBreakpoints } from 'react-breakpoints'
import * as Colors from '../utils/colors'
import BreakPoints from '../utils/breakpoints'

class Menu extends React.Component {
  constructor(){
    super()

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      MenuState: false,
    }
  }
  TransformLink(link){
    link = link.replace("/","")
    link = link.replace("blog/","")
    return link//.toUpperCase()
  }
  MenuStateChanged(state){
    this.setState({MenuState: state.isOpen})
    // this.props.MenuStateChanged(state.isOpen)
  }
  handleClick(e){
    this.setState({MenuState: false})
    // this.props.MenuStateChanged(state.isOpen)
  }
  render() {
    let WrapperComp = BurgerMenu
    const { breakpoints, currentBreakpoint, NoMobile } = this.props
    const MobileView = !NoMobile && breakpoints[currentBreakpoint] <= breakpoints.tablet
    const MenuProps = {
      isOpen: this.state.MenuState,
      onStateChange: this.MenuStateChanged.bind(this)
    }

    let {
      ...rest
    } = this.props

    if (MobileView) {
      rest = { ...rest, MenuProps }
    } else {
      WrapperComp = Wrapper
    }
    return (
      <WrapperComp
        {...rest}
        width={ 300 }
        right
        key="Menu"
      >
        <GlobalStyle />
        {this.state.MenuState && <LockedMenu />}
        <MyLink onClick={this.handleClick} to="/">HOME</MyLink>
        {!MobileView ? <span>|</span> : <MyHr/>}
        <MyLink onClick={this.handleClick} to="/Classes">CLASSES</MyLink>
        {!MobileView ? <span>|</span> : <MyHr/>}
        <MyLink onClick={this.handleClick} to="/#About">ABOUT</MyLink>
        {!MobileView ? <span>|</span> : <MyHr/>}
        <MyLink onClick={this.handleClick} to="/FAQ">FAQ</MyLink>
        {!MobileView ? <span>|</span> : <MyHr/>}
        <MyLink onClick={this.handleClick} to="/#Contact">CONTACT</MyLink>
        {MobileView && <MyHr/>}
        {MobileView && <MyLink onClick={this.handleClick} to="/Events">EVENTS</MyLink>}
        {MobileView && <MyHr/>}
        {MobileView && <MyLink onClick={this.handleClick} to="/Trials">TRIALS</MyLink>}
      </WrapperComp>
    )
  }
}

Menu.propTypes = {
}

export default withBreakpoints(Menu)

const LockedMenu = createGlobalStyle`
  html > body {
    overflow: hidden;
    max-height: 100vh;
  }
`
const GlobalStyle = createGlobalStyle`
  body {
    overflow: unset;
    max-height: unset;
  }
  .bm-menu-wrap{
    top: 0px;
  }
  .bm-item{
    transition: max-height 0.5s;
    max-height: 300px;
    overflow-y: hidden;
  }
  .bm-burger-button {
    float: right;
    position: absolute;
    width: 47px;
    height: 43px;
    right: 25px;
    top: 49px;
  }

  @media only screen and (max-width:${BreakPoints.tablet}px) {
    .bm-burger-button {
      width: 42px;
      height: 38px;
      top: 40px;
    }
  }
  @media only screen and (max-width:${BreakPoints.mobileLandscape}px) {
    .bm-burger-button {
      width: 40px;
      height: 36px;
      top: 33px;
    }
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: ${Colors.White};
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /* General sidebar styles */
  .bm-menu {
    background: ${Colors.Red};
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
  }

  /* Individual item */
  a.bm-item {
    display: inline-block;
    padding: 20px 3px;
    cursor: pointer;
  }

  a.bm-item:hover {
    background-color: rgba(0,0,0,0.15);
    color: ${Colors.Green}
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
    top: 0px;
  }
`

const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
  margin: 0;

  & span {
    line-height: 1;
    font-size: 131%;
    color: ${Colors.DarkGrey};
  }
`

const MyHr = styled.hr`
  margin: 0%;
`

const MyLink = styled(Link)`
  text-decoration: none;
  padding: 0 5px;
  margin: 0;
  color: inherit;
  cursor: pointer;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${Colors.Green};
  }
`
