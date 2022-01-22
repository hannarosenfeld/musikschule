import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'


import Navbar from "../components/NavBar"

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
	query {
	    site {
		siteMetadata {
		    title
		}
	    }
	}
    `)
    
    return (
	<div>
	    <title>{data.site.siteMetadata.title}</title>
	    <header>{data.site.siteMetadata.title}</header>
	    <Navbar />
	    <main>
		{children}
	    </main>
	</div>
    )
}

export default Layout
