import React from 'react'

export default function Timeline({ items }) {
  return (
    <ol className="space-y-6">
      {items.map(it => (
        <li key={it.id} className="flex gap-4">
          <div className="w-24 text-sm text-gray-500">{it.period}</div>
          <div>
            <h4 className="font-semibold">{it.title} <span className="text-sm text-gray-400">@ {it.org}</span></h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">{it.details}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
