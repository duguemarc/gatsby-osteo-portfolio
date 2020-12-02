import { Menu } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import headerStyles from './styles/header.module.scss'
import '../styles/custom-theme.less'


const HeaderMain = () => {

    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)

    return (
        <Header className={headerStyles.header}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
            
            {/* <Link className={headerStyles.title} to="/">
                {data.site.siteMetadata.title}
            </Link> */}
        </Header>
    )
}

export default HeaderMain