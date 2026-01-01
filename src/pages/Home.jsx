import React from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import SectionTitle from '../components/SectionTitle'

export default function Home() {
  return (
    <section>
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <h1 className="text-4xl font-bold">khalil ben yahia wenich</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Software Engineer / DevOps</p>
          <p className="mt-4 text-gray-700 dark:text-gray-200">I design and build reliable cloud-native applications and automated delivery pipelines. Currently focused on DevOps, Cloud, and scalable web systems.</p>
          <div className="mt-6 flex gap-3">
            <Button href="/projects">View Projects</Button>
            <Button href="#" variant="ghost">Download CV</Button>
          </div>
        </motion.div>
        <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="card">
          <SectionTitle>Quick Facts</SectionTitle>
          <ul className="text-sm space-y-2">
            <li><strong>Location:</strong> City, Country</li>
            <li><strong>Focus:</strong> DevOps, Cloud, CI/CD, Web</li>
            <li><strong>Preferred Tools:</strong> Docker, Kubernetes, Jenkins, AWS</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
