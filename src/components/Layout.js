import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Main from './Main'

export default function Layout() {
  return (
    <React.Fragment>
        <Header/>
        <Navigation/>
        <Main/>
    </React.Fragment>
  )
}
