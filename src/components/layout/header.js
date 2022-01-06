import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import styled from "styled-components"
import MenuButton from "../buttons/MenuBotton"
import {menuData} from "../data/menuData"
import MenuTooltip from "../tooltips/MenuTooltip"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick(event){
    setIsOpen(!isOpen)
    event.preventDefault()
  }

  return(
    <Wrapper>
    <Link to="/">
    <StaticImage src="../images/gatsby-icon.png" alt=""/>
    </Link>
    <MenuWrapper count={menuData.length}>
      {menuData.map((item, index) => 
        item.link === "/account" ? 
        (<MenuButton 
        item={item} key={index}
        onClick={(event) => handleClick(event)}/>) 
        :
        (
        <MenuButton item={item} key={index} />
      ))}
      <HamburgerWrapper>
        <MenuButton item={{title:"", icon:"https://img.icons8.com/material-outlined/24/00000/menu--v1.png"}}/>
      </HamburgerWrapper>
      </MenuWrapper>
      <MenuTooltip isOpen={isOpen} />
      </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
d
  @media(max-width: 768px){
    top: 30px;
  }
  @media(max-width: 450px){
    top: 20px;
    padding: 0 20px;
  }
`
const MenuWrapper = styled.div`
  display: grid;
  gap: 30;
  grid-template-columns: repeat(${props => props.count}, auto);

  @media(max-width: 768px){
      > a{
      display: none;
    }
    grid-template-columns: auto;  
  }

 
`
const HamburgerWrapper = styled.div`
  display: none;
  @media(max-width: 768px){
    display: block;
  }
`