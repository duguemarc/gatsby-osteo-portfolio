import { Button } from 'antd'
import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import { FormOutlined } from '@ant-design/icons'



const BlogPage = () => {

    const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate (locale: "FR", formatString:"LL")
          }
        }
      }
    }    
    `)
    return(
        <Layout>
            <h1>Blog</h1>

            <Button type="primary" shape="round" icon={<FormOutlined />} size="large" >Prendre rendez-vous</Button>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                          <Link to={`/blog/${edge.node.slug}`}>
                            <h2>{edge.node.title}</h2>
                            <p>{edge.node.date}</p>
                          </Link>
                        </li>
                    )
                } )}
            </ol>
        </Layout>
    )
}

export default BlogPage