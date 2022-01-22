import React from "react"

import diana from "../images/Foto_07.jpg"



const teachers = [
    {
	id: 1,
	name: "Diana Abouem a Tchoyi",
	teaches: "streichinstrumente",
	picture: diana,
	instruments: "Violine Strecherklassen",
	bio: "Tis n that",
    },
]


class RowContent extends React.Component {
    render() {
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
    }
}


export default RowContent
