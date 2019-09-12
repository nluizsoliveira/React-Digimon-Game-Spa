import React from 'react';
import {Jumbotron} from '../../components/jumbotron/jumbotron'
import {Navbar} from '../../components/navbar/navbar'
import {GreatIcon} from '../../components/greatIcon/greatIcon'

import './home.css'

import About from '../../components/greatIcon/assets/about.png'
import Login from '../../components/greatIcon/assets/login.png'
import Cadastro from '../../components/greatIcon/assets/cadastro.png'


export function Home(){

    return(
        <div id = "home-wrapper">
            <Navbar/>
            <div id = "background">
                <div id = "container">
                    <Jumbotron name = "Digimon World OOP Order II"/>
                </div>

                <div className = "greatIconsList">
                        <GreatIcon className = "greatIconsItem" image_path = {About} name = "Sobre"/>
                        <GreatIcon className = "greatIconsItem" image_path = {Cadastro} name = "Cadastro"/>
                        <GreatIcon className = "greatIconsItem" image_path= {Login} name = "Login"/>
                </div>
            </div>
        </div>
    )
}