const path = require('path')

// module.exports.createPages = async ({graphql, actions})=>{
//   const { createPages} = actions;
//   const blogTemplate = path.resolve("./src/template/blog.js");
//   const res = await graphql(`
//     query{
//       allContetfulBlogPost{
//         edges{
//           node{
//             slug
//           }
//         }
//       }
//     }
//   `)

//   res.data.allContentfull
// }