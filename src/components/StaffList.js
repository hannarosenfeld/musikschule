import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXProvider } from "@mdx-js/react"


function StaffList({ data }) {
    
    return(
	<StaticQuery
	query={graphql`
	    query staffQuery {
		allMdx {
		    edges {
			node {
			    excerpt(pruneLength: 900)
			    id
			    body
			    frontmatter {
                                id
				title
				description
				featuredImage {
				    childImageSharp {
					gatsbyImageData(
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
	    <div className="staff-container">
		{data.allMdx.edges.map(edge => (
		    <article>
		    <div className="staff-image-container">
			<GatsbyImage key={edge.node.id} alt='some alt text' image={getImage(edge.node.frontmatter.featuredImage)} style={{margin: "0 auto", padding: "0"}} />
		    </div>
		    <div style={{margin: "0 2em"}}>
			<div>
			    <h4 key={edge.node.id} style={{margin: "0"}}>{edge.node.frontmatter.title}</h4>
			    <h5>{edge.node.frontmatter.description}</h5>
			</div>
			<p><MDXProvider>{edge.node.excerpt}</MDXProvider></p>
		    </div>
		</article> 
	    ))}
	    </div>
	)}
	/>
    )
}



export default StaffList
