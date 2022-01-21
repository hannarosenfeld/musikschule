import * as React from "react"

import Navbar from "../components/NavBar.js"

import musikschule_gebaeude from "../images/Foto_01.jpg"
const IndexPage = () => {
    return (
	<div>
	    <Navbar />
	    <div className="willkommen" width="300">

	</div>
	    <img src={musikschule_gebaeude} style={{width: "100%"}}/>	    
	    </div>
    )
}

export default IndexPage
