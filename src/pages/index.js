import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import LayoutMain from '../components/layout'
import indexStyles from './styles/index.module.scss'
import { Button, Space } from 'antd'
import { FormOutlined, MailOutlined } from '@ant-design/icons'
import { BackgroundImage } from 'gatsby-background-image'



export const query = graphql`
query {
  contentfulImageFullScreen(titre: {eq: "Main Image"}) {
    image {
      title
      description
      fluid {
      	...GatsbyContentfulFluid_withWebp
      }
    }
  }
}
`

const IndexPage = (props) => {
  return(
  <LayoutMain className={indexStyles.index}>
      <div className={indexStyles.mainViewContainer}>

        <div className={indexStyles.mainViewContent}>
          <h1>Raphaël Linares</h1>
          <h2>Ostéopathe à Clermont-Ferrand</h2>
          <div className={indexStyles.buttonContainer}>
            <Space size={50}>
              <Button type="primary" shape="round" icon={<FormOutlined />} size="large" >Prendre rendez-vous</Button> 
              <Button type="primary" shape="round" icon={<MailOutlined />} size="large" >Me contacter</Button> 
            </Space>            
          </div>
        </div>
      </div>

   </LayoutMain>
  )
}

export default IndexPage