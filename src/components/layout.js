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
            <div className={layoutStyles.headerMain}>
                <HeaderMain/>
            </div>
            <ContentMain>
                {props.children}
            </ContentMain>
            <FooterMain/>
        </div>
        </Layout>
    )
}

export default LayoutMain