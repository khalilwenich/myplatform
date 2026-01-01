import React, { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])

  return (
    <button aria-label="Toggle theme" onClick={() => setDark(s => !s)} className="p-2 rounded-md border">
      {dark ? '🌙' : '☀️'}
    </button>
  )
}
