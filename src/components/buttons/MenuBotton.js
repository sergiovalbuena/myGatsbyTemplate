import React from "react";
import styled from "styled-components";
import { Link } from "gatsby"

export default function MenuButton(props){
    const {item} = props
    return(
        <Link to={item.link} onClick={props.onClick}>
            <MenuItem title={item.title}>
                <img src={item.icon} alt=""/>
                {item.title}
            </MenuItem>
        </Link>
    )
}

const MenuItem = styled.div`
  color: rgba(255,255,255,.7);
  display: grid;
  grid-template-columns: 24px auto;
  gap: ${props => (props.title ? "10px" : "0px")};
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