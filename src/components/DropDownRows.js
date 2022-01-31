import * as React from 'react'
import { useState, useEffect } from "react"
import { StaticQuery, graphql } from 'gatsby'
import { BiChevronDown } from "react-icons/bi";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXProvider } from "@mdx-js/react"


const rows = [
    {
	id: "verantwortliche",
	title: "Verantwortliche",
    },
    {
	id: "streichinstrumente",
	title: "Lehrende der Streichinstrumente",

    },
    {
	id: "zupfinstrumente",	
	title: "Lehrende der Zupfinstrumente",

    },
    {
	id: "tasteninstruments",	
	title: "Lehrende des Tasteninstruments",
    },
    {
	id: "gesangs",	
	title: "Lehrende des Gesangs",
    },
    {
	id: "schlagzeugs",	
	title: "Lehrende des Schlagzeugs",
    },
    {
	id: "akkordeons",	
	title: "Lehrende des Akkordeons",
    },
    {
	id: "musiktheorie",	
	title: "Lehrende der Musiktheorie",
    },
    {
	id: "frueherziehung",	
	title: "Lehrende der Früherziehung",
    }
]



function Departments(props) {
    return(
	    <article >
		<div className="staff-image-container">
		    <GatsbyImage alt='some alt text' image={props.image} style={{margin: "0 auto", padding: "0"}} />
		</div>
		<div style={{margin: "0 2em"}}>
		    <div>
			<h4 style={{margin: "0"}}>{props.name}</h4>
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
	this.state = {isToggleOn: false};
	// This binding is necessary to make `this` work in the callback
	this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
	const id = event.target.id;
	console.log(id);
	this.setState(prevState => ({
	    isToggleOn: !prevState.isToggleOn,
	    selectedCategory: id
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
					    style={{float: "right"}}
					    onSelect={this.handleSelect}
					    id={row.id}
					/>
				    </div>
				</div>
	<div className="staff-container">				
				{data.allMdx.edges.map(edge => (
				    this.state.isToggleOn && this.state.selectedCategory && row.id  == edge.node.frontmatter.id ? <Departments id={edge.node.id} name={edge.node.frontmatter.title} description={edge.node.frontmatter.description} key={edge.node.id} image={getImage(edge.node.frontmatter.featuredImage)}  bio={edge.node.excerpt} /> : ''
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
