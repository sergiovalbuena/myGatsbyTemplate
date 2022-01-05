import React, {useState} from "react";
import styled from "styled-components";
import MenuButton from "../buttons/MenuBotton";
import { tooltipData } from "../data/menuData";

export default function MenuTooltip(){
    const [isOpen, setIsOpen] = useState(false)

    return <Wrapper isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
    {tooltipData.map((item, index) => (
        <MenuButton item={item} key={index}/>
    ))}
    </Wrapper>

    /*
    return <Wrapper onClick={() => setIsOpen(!isOpen)}>
    {isOpen ? "Open" : "Closed"}
    </Wrapper>
    */
}

const Wrapper = styled.div`
    background: rgba(15, 14, 71,.3);
    box-shadow: 0px 50px 100px rgba(0,0,0,.25),
        inset 0px 0px 0px .5px rgba(255,255,255,.2);
    backdrop-filter: blue(40px);
    border-radius: 20px;
    padding: 20px;
    position: absolute;
    top: 60px;
    right: 30px;
    opacity: ${props => (props.isOpen ? 1 : .5)};
    z-index: 1;
    display: grid;
    gap: 20px;
    grid-template-columns: 150px;
`