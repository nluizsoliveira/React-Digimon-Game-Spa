import React from "react";
import './navbar.css'
import Logo from './assets/logo.png'

export function Navbar(){
    return(
        <div id = "aboveall">
            <div id = "orange"></div>
            <header>
                <img id = "logo" src = {Logo}></img>
                <nav>
                    <ul id = "menu">
                        <li><a href = ""><strong>HOME</strong></a></li>
                        <li><a href = "">SOBRE</a></li>
                        <li><a href = "">CADASTRO</a></li>
                        <li><a href = "">LOGIN</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}