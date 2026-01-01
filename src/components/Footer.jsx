import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 py-6">
      <div className="container text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Name — Built with React, Vite and Tailwind.
      </div>
    </footer>
  )
}
