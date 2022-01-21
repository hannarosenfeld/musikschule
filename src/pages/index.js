import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BiChevronDown } from "react-icons/bi";

import Navbar from "../components/NavBar.js"
import musikschule_gebaeude from "../images/Foto_01.jpg"


const rows = [
    {
	text: "Verantwortliche",
    },
    {
	text: "Lehrende der Zupfinstrumente",
    },
    {
	text: "Lehrende der Blechblasinstrumente",
    },
    {
	text: "Lehrende des Tasteninstruments",
    },
    {
	text: "Lehrende des Gesangs",
    },
    {
	text: "Lehrende des Schlagzeugs",
    },
    {
	text: "Lehrende des Akkordeons",
    },
    {
	text: "Lehrende der Musiktheorie",
    },
    {
	text: "Lehrende der Früherziehung",
    }
]

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
	<div className="dropdown-rows">
	{rows.map(row => (
	    <div className="row">
		<div className="col">{row.text}</div>
		<div className="col"><BiChevronDown style={{float: "right"}}/></div>
	    </div>
        ))}
	</div>
	</div>
	</section>
	</div>
    )
	}

export default IndexPage
