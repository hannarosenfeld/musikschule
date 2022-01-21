import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BiChevronDown } from "react-icons/bi";

import Navbar from "../components/NavBar.js"

import musikschule_gebaeude from "../images/Foto_01.jpg"


const rows = [
    {
	id: 1,
	title: "Verantwortliche",

    },
    {
	id: 2,	
	title: "Lehrende der Zupfinstrumente",
    },
    {
	id: 3,	
	title: "Lehrende der Blechblasinstrumente",
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

const RowContent = () => {
    return(
	<div>
	    <div>
		<img src={{}} alt={{}} />
	    </div>
	    <div>
		<h3> </h3>
	    </div>
	</div>
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
		    {this.state.isToggleOn ? <RowContent /> : ''}
		</div>
	    ))}

	</div>
	)
    }
}


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
