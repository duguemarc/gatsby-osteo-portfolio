const path = require('path')

// module.exports.onCreateNode = ({ node, actions }) => {
//     const { createNodeField } = actions
//     // Transform the new node here and create a new node or
//     // create a new node field.

//     if(node.internal.type === 'MarkdownRemark') {
//         const slug = path.basename(node.fileAbsolutePath, '.md')
//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }

// 4  }


// module.exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions
//     const blogTemplate = path.resolve('./src/templates/blog.js')
//     const response = await graphql(`
//     query {
//         allMarkdownRemark {
//           edges {
//             node {
//               fields{
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `)
//     response.data.allMarkdownRemark.edges.forEach((edge) => {
//         createPage({
//             component: blogTemplate,
//             path: `/blog/${edge.node.fields.slug}`,
//             context: {
//                 slug: edge.node.fields.slug
//             }
//         })
//     })
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const response = await graphql(`
    query {
        allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      }
  `)
  response.data.allContentfulBlogPost.edges.forEach((edge) => {
      createPage({
          component: blogTemplate,
          path: `/blog/${edge.node.slug}`,
          context: {
              slug: edge.node.slug
          }
      })
  })
}
