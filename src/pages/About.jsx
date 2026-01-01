import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { skills } from '../data/skills'

function SkillList({ items }) {
  return (
    <div className="grid gap-3">
      {items.map(s => (
        <div key={s.name} className="flex items-center justify-between">
          <div className="font-medium">{s.name}</div>
          <div className="text-sm text-gray-500">{s.level}%</div>
        </div>
      ))}
    </div>
  )
}

export default function About() {
  return (
    <section>
      <SectionTitle>About Me</SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <p>I am a Software Engineer with a strong interest in DevOps and Cloud engineering. I enjoy building scalable systems, automating delivery, and improving developer workflows.</p>
          <h4 className="mt-4 font-semibold">Education & Focus</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">Currently focused on DevOps, Cloud (AWS/Azure), CI/CD, and modern web development.</p>
        </div>
        <div className="card">
          <h4 className="font-semibold">Skills</h4>
          <div className="grid grid-cols-2 gap-4 mt-3">
            <div>
              <h5 className="font-medium">Frontend</h5>
              <SkillList items={skills.frontend} />
            </div>
            <div>
              <h5 className="font-medium">DevOps & Cloud</h5>
              <SkillList items={skills.devops} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
