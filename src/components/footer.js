import { Footer } from 'antd/lib/layout/layout'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'React'
import footerStyles from './styles/footer.module.scss'

const FooterMain = () => {


    return(
        <Footer className={footerStyles.footer}>
            <p> Created by , 2020</p>
        </Footer>
    )
}

export default FooterMain