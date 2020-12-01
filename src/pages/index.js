import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return(
  <Layout>
      <h1>Gatsby main page</h1>
      <p> Need a deveoper ? <Link to= "/contact">Contact me</Link></p>
  </Layout>
  )
}

export default IndexPage