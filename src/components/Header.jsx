import React from 'react'
import { NavLink } from 'react-router'

export const Header = () => {

  const navLinkClass = ({ isActive }) =>
  `btn btn-ghost ${isActive ? "text-fucsia-300" : "" }`

  return (
    <header className="bg-white shadow-sm">
      <div className="navbar max-w-7xl mx-auto px-4">

        <div className="flex-1">
          <NavLink to="/" className="text-2xl font-bold text-fuchsia-600">
            Webshop
          </NavLink>
        </div>

        <div className="flex-none gap-2">
          <NavLink to="/" className={navLinkClass}> Kezdőlap</NavLink>

          <NavLink to="/products" className={navLinkClass}>Termékek</NavLink>
{/* 
          <button className="btn btn-ghost btn-circle">
            <icon name="search" />
          </button>

          <button className="btn btn-ghost btn-circle">
            <icon name="shopping-cart" />
          </button>*/}
        </div>

      </div>
</header>
  )
}


