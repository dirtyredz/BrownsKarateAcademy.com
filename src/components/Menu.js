import React from 'react'
import { Link } from "gatsby"
import { slide as BurgerMenu } from 'react-burger-menu'
import styled, { createGlobalStyle } from 'styled-components'
import * as Colors from '../utils/colors'
import BreakPoints from '../utils/breakpoints'
import NoScroll from 'no-scroll'

class Menu extends React.Component {
  constructor(){
    super()

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      MenuState: false,
    }
  }
  componentDidMount(){
    NoScroll.off()
  }
  MenuStateChanged(state){
    if (state.isOpen) {
      NoScroll.on()
    } else {
      NoScroll.off()
    }
    this.setState({MenuState: state.isOpen})
  }
  handleClick(e){
    this.MenuStateChanged({isOpen: false})
  }
  render() {
    return (
      <BurgerMenu
        {...this.props}
        isOpen={this.state.MenuState}
        onStateChange={this.MenuStateChanged.bind(this)}
        width={ 300 }
        right
        key="Menu"
      >
        <GlobalStyle />
        <MyLink onClick={this.handleClick} to="/">HOME</MyLink>
        <MyHr/>
        <MyLink onClick={this.handleClick} to="/Classes">CLASSES</MyLink>
        <MyHr/>
        <MyLink onClick={this.handleClick} to="/Calendar">CALENDAR</MyLink>
        <MyHr/>
        <MyLink onClick={this.handleClick} to="/#About">ABOUT</MyLink>
        <MyHr/>
        <MyLink onClick={this.handleClick} to="/FAQ">FAQ</MyLink>
        <MyHr/>
        <MyLink onClick={this.handleClick} to="/#Contact">CONTACT</MyLink>
        <MyHr/>
        <MyLink onClick={this.handleClick} to="/Events">EVENTS</MyLink>
        <MyHr/>
        <MyLink onClick={this.handleClick} to="/Gallery">GALLERY</MyLink>
        <MyHr/>
        <MyLink onClick={this.handleClick} to="/SignUp">SIGN UP INSTRUCTIONS</MyLink>
      </BurgerMenu>
    )

  }
}
export default Menu

export const FooterMenu = (props) => {
  return (
    <Wrapper {...props}>
      <MyLink to="/">HOME</MyLink>
      <span>|</span>
      <MyLink to="/Classes">CLASSES</MyLink>
      <span>|</span>
      <MyLink to="/#About">ABOUT</MyLink>
      <span>|</span>
      <MyLink to="/FAQ">FAQ</MyLink>
      <span>|</span>
      <MyLink to="/#Contact">CONTACT</MyLink>
    </Wrapper>
  )
}

const GlobalStyle = createGlobalStyle`
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
