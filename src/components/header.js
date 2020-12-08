import { Affix, Anchor, Button, Menu } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import React from 'react'
import headerStyles from './styles/header.module.scss'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { RightSquareFilled } from '@ant-design/icons'


const HeaderMain = () => {

    const data = useStaticQuery(graphql`
    query {
        allContentfulMenuTab (sort: { fields: ordre, order: ASC }) {
          edges {
            node {
              label
              slug
              ordre
            }
          }
        }
      }
    `)

    return (
        <Affix>
            <Header className={headerStyles.header}>
                <Menu theme="dark" style={{'borderBottom':'2px solid white'}} className= {headerStyles.menu} mode="horizontal" defaultSelectedKeys={['2']}>
                    {data.allContentfulMenuTab.edges.map((edge, index)=> {
                        return(                            
                            <Menu.Item className={headerStyles.menuItem} key={index}>
                                    <Link to={'#'+edge.node.slug}>
                                        <span>{edge.node.label}</span>
                                    </Link>
                            </Menu.Item>
                        )
                
                    })}
                </Menu>
                
                {/* <Link className={headerStyles.title} to="/">
                    {data.site.siteMetadata.title}
                </Link> */}
            </Header>
        </Affix>

    )
}

export default HeaderMain