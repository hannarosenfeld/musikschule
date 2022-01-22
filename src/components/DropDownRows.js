import * as React from 'react'
import { useState, useEffect } from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { BiChevronDown } from "react-icons/bi";

import StaffList from "./StaffList"



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
		    {this.state.isToggleOn ? <StaffList /> : ''}
		</div>
	    ))}
	</div>
	)
    }
}

export default DropDownRows
