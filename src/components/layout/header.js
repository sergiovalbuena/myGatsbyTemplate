import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import {menuData} from "../data/menuData"

export default function Header() {
  return(
    <Wrapper>
    <h1>LogoBrand
    <img src="/images/gatsby-icon.png" alt=""/>
    </h1>
    <MenuWrapper>
      {menuData.map((item, index) => (
        <Link to={item.link} key={index}>
        <MenuItem>
          <img src={item.icon} alt=""/>
          {item.title}</MenuItem>
        </Link>
      ))}
      </MenuWrapper>
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
`
const MenuWrapper = styled.div`
  display: grid;
  gap: 30;
  grid-template-columns: repeat(5, auto);
`
const MenuItem = styled.div`
  color: rgba(255,255,255,.7);
  display: grid;
  grid-template-columns: 24px auto;
  gap: 10px;
  align-items: center;
  padding: 10px;
  transition: .5s ease-out;
  border-radius: 10px;

  :hover{
    background: rgba(255,255,255,.1);
    box-shadow: 0px 10px 20px rgba(0,0,0,.1), inset 0px 0px 0px .5px rgba(255,255,255,.2);
    border-radius: 10px;
  }
`
 