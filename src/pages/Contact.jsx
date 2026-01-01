import React from 'react'
import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <section>
      <SectionTitle>Contact</SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        <ContactForm />
        <div className="card">
          <h4 className="font-semibold">Social</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="https://github.com/">GitHub</a></li>
            <li><a href="https://www.linkedin.com/">LinkedIn</a></li>
            <li><a href="mailto:you@example.com">Email</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
