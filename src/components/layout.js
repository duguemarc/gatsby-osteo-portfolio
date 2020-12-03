import { Layout } from 'antd'
import React from 'react'
import ContentMain from './content'
import FooterMain from './footer'
import HeaderMain from './header'

import layoutStyles from './styles/layout.module.scss'

const LayoutMain = (props) => {
    return(
        <Layout className={layoutStyles.layout}>
        <div className={layoutStyles.container}>
            <HeaderMain/>
            <ContentMain>
                {props.children}
            </ContentMain>
            <FooterMain/>
        </div>
        </Layout>
    )
}

export default LayoutMain