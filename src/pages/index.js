import * as React from "react"
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import HeroSection from "../components/sections/HeroSection"




const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />

  </Layout>
)

export default IndexPage
