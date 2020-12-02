import { Link, graphql } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import LayoutMain from '../components/layout'
import  { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { renderRichText } from "gatsby-source-contentful/rich-text"

import { BLOCKS, INLINES } from "@contentful/rich-text-types"



export const query = graphql`
query ($slug:String!) {
  contentfulBlogPost(slug: {eq: $slug}) {
    title
    publishedDate (locale: "FR", formatString:"LL")
    body {raw references{          
      ... on ContentfulAsset {
        # contentful_id is required to resolve the references
        contentful_id
        fluid(maxWidth: 600) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
  }}
  }
}
`
let cptImg = 0;
const Blog = (props) => {
  
  const options = {
    renderNode: {
      [INLINES.ENTRY_HYPERLINK]: <p>aa</p>
       ,

       [BLOCKS.EMBEDDED_ASSET]: () => {return (
       <Img {...props.data.contentfulBlogPost.body.references[cptImg++]} />
       )},

    },
  }

    return(
        <LayoutMain>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            <p>{JSON.parse(props.data.contentfulBlogPost.body.raw).content[0].content[0].value}</p>
            <p>____________</p>
            <p>AAAAAAAAAAAAAAA</p>

            <p>{JSON.stringify(props.data.contentfulBlogPost)}</p>

            <p>AAAAAAAAAAAAAAA</p>

            <p>____________</p>

            <div>{renderRichText(props.data.contentfulBlogPost.body, options)}</div>
            </LayoutMain>
    )
}

export default Blog