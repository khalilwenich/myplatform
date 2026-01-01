import React from 'react'

export default function Button({ children, href, onClick, variant = 'primary', ...rest }) {
  const base = 'inline-flex items-center gap-2 px-4 py-2 rounded-md font-medium'
  const styles = {
    primary: 'bg-primary text-white hover:opacity-90',
    ghost: 'bg-transparent border border-gray-300 dark:border-gray-700'
  }
  if (href) {
    return (
      <a href={href} className={`${base} ${styles[variant]}`} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button onClick={onClick} className={`${base} ${styles[variant]}`} {...rest}>
      {children}
    </button>
  )
}
