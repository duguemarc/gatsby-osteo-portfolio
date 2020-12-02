import React from 'react'
import { Link } from 'gatsby'
import LayoutMain from '../components/layout'

const AboutPage = () => {
    return (
        <LayoutMain>
            <h1>About</h1>
            <p> Need a deveoper ? <Link to= "/contact">Contact me</Link></p>
        </LayoutMain>
    )
}

export default AboutPage