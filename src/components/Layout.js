import * as React from 'react'
import { Link } from 'gatsby'

import Navbar from "../components/NavBar"

const Layout = ({ children }) => {
    return (
	<div>
	<Navbar />
	<main>
            {children}
	</main>
	</div>
    )
}

export default Layout
