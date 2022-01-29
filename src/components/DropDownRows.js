import * as React from 'react'
import { useState, useEffect } from "react"
import { StaticQuery, graphql } from 'gatsby'
import { BiChevronDown } from "react-icons/bi";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXProvider } from "@mdx-js/react"


import StaffList from "./StaffList"



const rows = [
    {
	id: 1,
	title: "Verantwortliche",
    },
    {
	id: 2,	
	title: "Lehrende der Streichinstrumente",
	instrument: "streichinstrumente"
    },
    {
	id: 3,	
	title: "Lehrende der Zupfinstrumente",
    },
    {
	id: 4,	
	title: "Lehrende des Tasteninstruments",
    },
    {
	id: 5,	
	title: "Lehrende des Gesangs",
    },
    {
	id: 6,	
	title: "Lehrende des Schlagzeugs",
    },
    {
	id: 7,	
	title: "Lehrende des Akkordeons",
    },
    {
	id: 8,	
	title: "Lehrende der Musiktheorie",
    },
    {
	id: 9,	
	title: "Lehrende der Früherziehung",
    }
]



function Departments(props) {
    return(

	    <article >
		<div className="staff-image-container">
		    <GatsbyImage key={props.key} alt='some alt text' image={props.image} style={{margin: "0 auto", padding: "0"}} />
		</div>
		<div style={{margin: "0 2em"}}>
		    <div>
			<h4 key={props.key} style={{margin: "0"}}>{props.name}</h4>
			<h5>{props.description}</h5>
		    </div>
		    <p><MDXProvider>{props.bio}</MDXProvider></p>
		</div>
	    </article> 
    )
}


class DropDownRows extends React.Component {
    constructor(props) {
	super(props);
	this.state = {isToggleOn: true};
	// This binding is necessary to make `this` work in the callback
	this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
	this.setState(prevState => ({
	    isToggleOn: !prevState.isToggleOn
	}));
    }

    
    render() {
	return (
	    <StaticQuery
		query={graphql`
	    query departmentsQuery {
		allMdx {
		    edges {
			node {
			    excerpt(pruneLength: 900)
			    id
			    body
                            fileAbsolutePath
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
		    <div className="dropdown-rows">
			{rows.map(row => (
			    <div key={row.id}>
				<div className="row">
				    <div className="col">{row.title}</div>
				    <div className="col">
					<BiChevronDown
					    onClick={this.handleClick}
					    style={{float: "right"}}/>
				    </div>
				    <div>
				    </div>
				</div>
	<div className="staff-container">				
				{data.allMdx.edges.map(edge => (

				    this.state.isToggleOn &&  edge.node.fileAbsolutePath == "/Users/hzr/Code/musikschule/src/staff/streichinstrumente/olaf-adler/index.mdx" ? <Departments name={edge.node.frontmatter.title} description={edge.node.frontmatter.description} key={edge.node.id} image={getImage(edge.node.frontmatter.featuredImage)}  bio={edge.node.excerpt} /> : ''
				))}
	    </div>
			    </div>
			))}
		    </div>
		)}
	    />
	)
    }
}

export default DropDownRows
