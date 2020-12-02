import React from 'react'
import { Link } from 'gatsby'
import LayoutMain from '../components/layout'
import indexStyles from './styles/index.module.scss'

const IndexPage = () => {
  return(
  <LayoutMain className={indexStyles.index}>
      <h1>Gatsby main page</h1>
      <p> Need a deveoper ? <Link to= "/contact">Contact me</Link></p>
  </LayoutMain>
  )
}

export default IndexPage