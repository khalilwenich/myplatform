import React from 'react'
import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Link = ({ to, children }) => (
  <NavLink to={to} className={({ isActive }) => isActive ? 'text-primary font-semibold' : 'text-gray-600 dark:text-gray-300'}>
    {children}
  </NavLink>
)

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-700">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <a href="/" className="text-lg font-bold">Khalil Ben Yahia wenich</a>
          <nav className="hidden md:flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
