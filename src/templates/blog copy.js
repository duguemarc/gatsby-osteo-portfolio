import { graphql } from 'gatsby'
import React from 'react'
import Img from "gatsby-image"
import Layout from '../components/layout'
import  { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from "@contentful/rich-text-types"


// export const query = graphql`
//     query (
//         $slug: String!
//       ) {
//         markdownRemark(fields: { slug: { eq: $slug } }) {
//           frontmatter {
//             title
//             date
//           }
//           html
//         }
//       }
//     `

export const query = graphql`
query ($slug:String!) {
  contentfulBlogPost(slug: {eq: $slug}) {
    title
    publishedDate (locale: "FR", formatString:"LL")
    body {raw references{          ... on ContentfulAsset {
      contentful_id
      title
      description
      
      fixed(width: 1600) {
        width
        height
        src
        srcSet
    
      }
    }}}
  }
}
`

const Blog = (props) => {
  
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => <Img {...node.data.target} />,

      "embedded-asset-block": (node) => {
        const alt = node.references.description
        const url = node.references.fixed.srcSet
        return <img alt={alt} src={url} />
      }
    }
  }

    return(
        <Layout>
            {/* <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html:props.data.markdownRemark.html }}></div> */}
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            <p>{JSON.parse(props.data.contentfulBlogPost.body.raw).content[0].content[0].value}</p>
            <p>____________</p>
    
            {/* {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw), options)} */}
            {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw), options)}

            </Layout>
    )
}

export default Blog