import React, { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Placeholder: client-side validation and simulate success
    if (!form.name || !form.email || !form.message) {
      setStatus('Please complete all fields.')
      return
    }
    setStatus('Message sent (demo).')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 card">
      <label className="block">
        <span className="text-sm">Name</span>
        <input name="name" value={form.name} onChange={handleChange} className="mt-1 block w-full rounded border px-3 py-2" />
      </label>
      <label className="block">
        <span className="text-sm">Email</span>
        <input name="email" value={form.email} onChange={handleChange} className="mt-1 block w-full rounded border px-3 py-2" />
      </label>
      <label className="block">
        <span className="text-sm">Message</span>
        <textarea name="message" value={form.message} onChange={handleChange} rows="5" className="mt-1 block w-full rounded border px-3 py-2" />
      </label>
      <div className="flex items-center gap-3">
        <button type="submit" className="px-4 py-2 bg-primary text-white rounded">Send</button>
        {status && <p className="text-sm text-gray-500">{status}</p>}
      </div>
    </form>
  )
}
