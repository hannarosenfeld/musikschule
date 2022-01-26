import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import DropDownRows from "../components/DropDownRows"
import musikschule_gebaeude from "../images/Foto_01.jpg"



const IndexPage = ({ data }) => {
    return (
	<div>
	    <Layout>
		<div className="willkommen" width="300">
		</div>
		<img src={musikschule_gebaeude} style={{width: "100%"}}/>
		<section className="paedagogen-und-verwaltung mt-5">
		    <div className="container d-flex flex-column">
			<h1>PÄDAGOGEN & VERWALTUNG</h1>
			<DropDownRows />
			<div>
			    {/* {
				data.allFile.nodes.map(node => (
				<li key={node.name}>
				{node.name}
				</li>
				))
				} */}
			</div>
		    </div>
		</section>
	    </Layout>
	</div>
    )
}


export default IndexPage
