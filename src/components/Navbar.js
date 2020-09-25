import React from "react"
import logo from '../img/logo.png'

export default function Navbar() {
		return (
            <nav class="nav">
            <div>
                <img src={logo} alt="logo" className="logo"/>
                <br/> 
                <span className="sub">by Anami and Bevo</span>
            </div>
            </nav>
		)
}