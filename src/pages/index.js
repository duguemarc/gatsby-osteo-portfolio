import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import LayoutMain from '../components/layout'
import indexStyles from './styles/index.module.scss'
import { Button, Space } from 'antd'
import Img from 'gatsby-image' 
import { FormOutlined, MailOutlined } from '@ant-design/icons'
import BackgroundImage from 'gatsby-background-image'



const IndexPage = (props) => {
  return(
  <LayoutMain className={indexStyles.index}>
        <div id="osteopathe-clermont-ferrand" className={indexStyles.mainViewContainer}>
        <BackgroundImage className={indexStyles.mainImage} fluid={props.data.contentfulImageFullScreen.image.fluid}>
          <div className={indexStyles.mainImageContainer}> </div>
        </BackgroundImage>
          {/* {props.data.contentfulImageFullScreen.image.title} */}
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
        <div id="votre-osteopathe" className={indexStyles.votreOsteopathe}>
          <div className={indexStyles.votreOsteopatheTitleContainer}>
            <h1>Qui suis-je ?</h1>
          </div>
          <div className={indexStyles.contentContainer}>
            <div className={indexStyles.votreOsteopatheImageContainer}><Img className={indexStyles.maPhoto} fluid={props.data.contentfulImgStandard.image.fluid}></Img></div>
            <div className={indexStyles.votreOsteopatheDescriptionContainer}>
              <h2>Diplomé Atman en 2020</h2>
              <p>{props.data.contentfulLongText.label.label}</p>
            </div>           
         </div>
        </div>
        <div id="le-cabinet" className={indexStyles.cabinetContainer}>
         <h1>Le cabinet</h1>
        </div>

   </LayoutMain>
  )
}
// const StyledBackgroundImage = styled(BackgroundImage)`
//   width: 100%;
//   background-position: bottom center;
//   background-repeat: repeat-y;
//   background-size: cover;
// `


export const query = graphql`
query {
  contentfulLongText(contentfulid: { eq: "ma-description" }) {
    label {
      label
    }
  }
  contentfulImgStandard(contentfulid: { eq: "ma-photo" }) {
    image {
      title
      description
      fluid {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
  contentfulImageFullScreen(contentfulid: {eq: "main-image"}) {
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

export default IndexPage