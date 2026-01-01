import React, { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const categories = ['All','Web','DevOps','Cloud']

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <section>
      <SectionTitle>Projects</SectionTitle>
      <div className="mb-4 flex gap-2">
        {categories.map(c => (
          <button key={c} onClick={() => setFilter(c)} className={`px-3 py-1 rounded ${filter===c? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-700'}`}>
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}
