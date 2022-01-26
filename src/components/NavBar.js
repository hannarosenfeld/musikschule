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
