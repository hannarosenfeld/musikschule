import * as React from 'react'
import { StaticQuery, useStaticQuery, graphql } from 'gatsby'


const StaffList = ({ data }) => {
    
    return(
	<StaticQuery
	query={graphql`
	    query MyQuery {
		allMdx {
		    edges {
			node {
			    id
			    body
			    frontmatter {
				title

			    }
			}
		    }
		}
	    }	    
	`}

        render={data => (
	    <div>
	    <h1>{data.allMdx.edges.map(edge => <h1 key={edge.node.id} data={edge.node} >{edge.node.frontmatter.title}</h1>)}</h1>
	    { console.log(data.allMdx.edges[0].node) }
	    </div>
	    )}
	/>
    )
}



export default StaffList
