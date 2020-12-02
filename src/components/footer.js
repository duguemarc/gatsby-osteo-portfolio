import { Footer } from 'antd/lib/layout/layout'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'React'
import footerStyles from './styles/footer.module.scss'

const FooterMain = () => {

    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            author
          }
        }
      }`)
    return(
        <Footer className={footerStyles.footer}>
            <p> Created by {data.site.siteMetadata.author}, 2020</p>
        </Footer>
    )
}

export default FooterMain