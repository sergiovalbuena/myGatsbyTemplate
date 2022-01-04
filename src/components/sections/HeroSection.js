import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { H1 } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"



export default function HeroSection(){
    return(
        <Wrapper>
            <ContentWrapper>
                <Title>React Template</Title>
                <p>Welcome to your new Gatsby site.</p>
                <p>Now go build something great.</p>
                <p>
                <Link to="/page-2/">Go to page 2</Link> <br />
                <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
                <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
                <Link to="/using-dsg">Go to "Using DSG"</Link>
                </p>
            </ContentWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: salmon;
`

const ContentWrapper = styled.div`
    max-width: 1234px;
    margin: 0 auto;
    padding: 200px 300px;
`
const Title = styled(H1)`
    font-size: 60px;
    font-weight: bold;
    color: ${themes.dark.text1};
`






