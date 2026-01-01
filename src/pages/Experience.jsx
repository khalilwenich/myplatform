import React from 'react'
import SectionTitle from '../components/SectionTitle'
import Timeline from '../components/Timeline'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section>
      <SectionTitle>Experience & Education</SectionTitle>
      <div className="card">
        <Timeline items={experience} />
      </div>
    </section>
  )
}
