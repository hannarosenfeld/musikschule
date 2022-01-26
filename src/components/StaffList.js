import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

    
function StaffList({ data }) {
    return(
    <StaticQuery
    query={graphql`
        query staffQuery {
        allMdx {
            edges {
            node {
                id
                body
                frontmatter {
                title
                featuredImage {
                 childImageSharp {
                   gatsbyImageData(
                     width: 200
                     placeholder: BLURRED
                   )
                 }
                }
                }
            }
            }
        }
        }       
        `}

        render={data => (
         <div style={{background: "#faf9ff"}}>
        {data.allMdx.edges.map(edge => (
         <article >
          <h1 key={edge.node.id}>{edge.node.frontmatter.title}</h1>
            <GatsbyImage  key={edge.node.id} alt='some alt text' image={getImage(edge.node.frontmatter.featuredImage)} />

         </article> 
        ))}
        </div>
    )}
    />
    )
}



export default StaffList
