import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BiChevronDown } from "react-icons/bi";

import Navbar from "../components/NavBar.js"

import musikschule_gebaeude from "../images/Foto_01.jpg"

import diana from "../images/Foto_07.jpg"


const rows = [
    {
	id: 1,
	title: "Verantwortliche",
    },
    {
	id: 2,	
	title: "Lehrende der Zupfinstrumente",
	instrument: "zupfinstrumente"
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

const teachers = [
    {
	id: 1,
	name: "Diana Abouem a Tchoyi",
	teaches: "zupfinstrumente",
	picture: diana,
	instruments: "Violine Strecherklassen",
	bio: "Tis n that",
    },
]


class RowContent extends React.Component {
    render() {
	if (teachers.teaches == rows.instrument) {
    return(
	<div>
	    {teachers.map(teacher => (
		<div className="d-flex">
		    <img src={diana} style={{width: "160px"}} />
		    <div>
			<h2>{teacher.name}</h2>
			<h3>{teacher.instruments}</h3>
			<p>{teacher.bio}</p>
		    </div>
		</div>
	    ))
	    }
	</div>
    )
	} else {
	    return(
		<h1>hi</h1>
	    )
	}
    }
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
