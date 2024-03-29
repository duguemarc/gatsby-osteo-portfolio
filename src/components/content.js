import { Content } from 'antd/lib/layout/layout'
import React from 'React'
import contentStyles from './styles/content.module.scss'




const ContentMain = (props) => {
    return (
        <Content className={contentStyles.content}>
            {/* <Breadcrumb className={contentStyles.contentBreadcrumb}>
                <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/about">About</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/contact">Contact</Link></Breadcrumb.Item>
           </Breadcrumb> */}

           <div className={contentStyles.contentSpace}> {props.children}</div>

        </Content>
    )
}

export default ContentMain