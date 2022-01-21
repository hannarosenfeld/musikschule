import * as React from "react"
import { Button, Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'

import "../styles/styles.css"

import ueberuns from "../images/Header_01.png"
import instrumente from "../images/Header_02.png"
import projekte from "../images/Header_03.png"
import unterstuetzen from "../images/Header_04.png"
import service from "../images/Header_05.png"
import anmeldung from "../images/Header_06.png"
import play from "../images/Header_07.png"
import nepomuk from "../images/Header_08.png"

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
]



const NavBar = () => {
    return(
    <div className="header-navbar" bg="light" expand="lg">
      <img src={nepomuk} />
      <img src={ueberuns} />
      <img src={instrumente} />
      <img src={projekte} />
      <img src={unterstuetzen} />
      <img src={service} />
      <img src={anmeldung} />
      <img src={play} />
    </div>
    )
}

export default NavBar
