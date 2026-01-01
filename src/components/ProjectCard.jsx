import React from 'react'

export default function ProjectCard({ project }) {
  return (
    <article className="card">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map(t => (
          <span key={t} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">{t}</span>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        <a href={project.github} className="text-sm text-primary">GitHub</a>
        <a href={project.demo} className="text-sm">Live Demo</a>
      </div>
    </article>
  )
}
