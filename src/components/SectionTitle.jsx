import React from 'react'

export default function SectionTitle({ children, subtitle }) {
  return (
    <header className="mb-6">
      <h2 className="text-2xl font-semibold">{children}</h2>
      {subtitle && <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>}
    </header>
  )
}
