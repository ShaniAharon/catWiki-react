import React from 'react'
import logo from '../assets/CatwikiLogo.svg'

export const AppHeader = () => {
  return (
    <section className="flex align-base space-between">
      <header className="main-layout-container mt-1 flex">
        <img
          className="logo-img"
          // onClick="goToHome"
          src={logo}
          alt=""
        />
      </header>
    </section>
  )
}
