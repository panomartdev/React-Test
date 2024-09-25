import React, { useState } from 'react'

export default function Navigation() {

  return (
    <nav className='topnav'>
        <a href='/home'>Home</a>
        <a href='/book'>My Books</a>
        <a href='/fav'>Favorites</a>
    </nav>
  )
}
