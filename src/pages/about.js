import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const AboutPage = () => {
    return(
        <Layout>
            <SEO title = "About" />
            <h1>What is DentaScan?</h1>
            <p>
                DentaScan is an upcoming AI technology that utilizes machine learning to make diagnostic reports about dental diseases
                from X-Ray scans of the patients teeth (Dental Radiographs).
            </p>
            <h1>How will dentists benefit from DentaScan?</h1>
            <p>
                In an age where people trust and rely on computers more than anything. An AI second opinion will help avoid diagnostic 
                mistakes and give dentist a higher level of confidence in their diagnoses.
            </p>
        </Layout>
    )
}

export default AboutPage;