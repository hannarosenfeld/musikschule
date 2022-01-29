import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXProvider } from "@mdx-js/react"



const teacherData = [
    { id: ,
    },
]

const records = [
    {
	id: 'piano',
	teacher: []
    }
]

const Dashboard = () => {
    const [show, setShow] = React.useState([])
    
    function handleClick(id) {
	if show.includes(id) {
	    const newShow = show.filter(a => a !== id)
	    setShow(newShow)
	} else {
	    const newShow = show.push(id)
	    setShow(newShow)
	}    
    }
    
    return (
	<StaticQuery
	    query={graphql`
	    query dashQuery {
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
	    
	    <div className="dashboard">
		render={data => (
		{records.map((record) => 
		    (
			<div className="instrument-wrapper">
			    <p onClick={() => handleClick(record.id)} >{record.id}</p> //The name of the instrument
			    {show.includes(record.id) ?  (
				<div> 
				    ... all the teachers here by mapping through the record.teachers
				</div>
			    ) : (null)}
			</div>
		    ))
		)}
	    </div>
	    />
	    )
	    }

	    export default Dashboard
