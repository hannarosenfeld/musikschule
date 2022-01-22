import React from "react"
import { graphql } from 'gatsby'

import Navbar from "../components/NavBar"
import DropDownRows from "../components/DropDownRows"
import musikschule_gebaeude from "../images/Foto_01.jpg"



const IndexPage = () => {
    return (
	<div>
	    <Navbar />
	    <div className="willkommen" width="300">
	    </div>
	    <img src={musikschule_gebaeude} style={{width: "100%"}}/>
	    <section className="paedagogen-und-verwaltung mt-5">
		<div className="container d-flex flex-column">
		    <h1>PÄDAGOGEN & VERWALTUNG</h1>
		    <DropDownRows />
		</div>
	    </section>
	</div>
    )
}



export default IndexPage
