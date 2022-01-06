import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { H1 } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import { keyframes } from "styled-components"



export default function HeroSection(){
    return(
        <Wrapper>
            <ContentWrapper>
                <TextWrapper>
                <Title>React Template</Title>
                <p>Welcome to your new Gatsby site.</p>
                <p>Now go build something great.</p>
                <p>
                <Link to="/page-2/">Go to page 2</Link> <br />
                <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
                <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
                <Link to="/using-dsg">Go to "Using DSG"</Link>
                </p>
                </TextWrapper>
            </ContentWrapper>
        </Wrapper>
    )
}

const animation = keyframes`
    0%{
        opacity: 0;
        transform: translateY(-10px):
        filter: blur(10px);
    }
    70%{
        opacity: .5;
        transform: translateY(-20px):
        filter: blur(10px);
    }
    100%{
        opacity: 1;
        transform: translateY(0px):
        filter: blur(0px);
    }
`
const Wrapper = styled.div`
    background: salmon;
`
const ContentWrapper = styled.div`
    max-width: 1234px;
    margin: 0 auto;
    padding: 200px 300px;
`
const TextWrapper = styled.div`
    max-width: 360px;
    display: grid;
    gap: 30px;
    > * {
        opacity: 0;
        animation: ${animation} 1s .2s forwards;

        :nth-child(1){
            animation-delay: 0s;
        }
        :nth-child(2){
            animation-delay: 0.2s;
        }
        :nth-child(3){
            animation-delay: 0.4s;
        }
        :nth-child(4){
            animation-delay: 0.6s;
        }
    }
`
const Title = styled(H1)`
    font-size: 60px;
    font-weight: bold;
    color: ${themes.dark.text1};
    opacity: 0;
    animation: ${animation} 1s .2s forwards;

`






