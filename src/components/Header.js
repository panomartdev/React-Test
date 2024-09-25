import React from 'react'
import myLogo from '../logo.svg';

export default function Header() {
  return (
    <header style={{"background-color":"coral" , "text-align":"left", "padding":"20px"}}>
        <img src={myLogo} alt='app-logo' height='40' style={{"margin-right":"20px"}}/>
        <b>This is my Personal Homepage</b>
    </header>
  )
}
