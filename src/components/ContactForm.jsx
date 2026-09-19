import { useState } from 'react'
import './ContactForm.css'

// Replace with the studio's real Formspree endpoint before launch:
// https://formspree.io/f/xxxxxxxx
const FORM_ENDPOINT = 'https://formspree.io/f/mppwwglv'

const PROJECT_TYPES = [
  'Residential',
  'Commercial',
  'Interior',
  'Landscape',
  'Renovation',
  'Restoration',
  'Other',
]

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="cform-done">
        <h3>Enquiry received.</h3>
        <p>Thank you for reaching out — we&rsquo;ll get back to you shortly.</p>
      </div>
    )
  }

  return (
    <form className="cform" onSubmit={handleSubmit}>
      <div className="cform-row">
        <label>
          Name *
          <input type="text" name="name" required />
        </label>
        <label>
          Email *
          <input type="email" name="email" required />
        </label>
      </div>

      <div className="cform-row">
        <label>
          Phone
          <input type="tel" name="phone" />
        </label>
        <label>
          Company / Organization
          <input type="text" name="company" />
        </label>
      </div>

      <fieldset className="cform-fieldset">
        <legend>Project Type *</legend>
        <div className="cform-radios">
          {PROJECT_TYPES.map((t) => (
            <label key={t} className="cform-radio">
              <input type="radio" name="projectType" value={t} required />
              {t}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="cform-row">
        <label>
          Project Location *
          <input type="text" name="location" required />
        </label>
        <label>
          Estimated Budget
          <input type="text" name="budget" placeholder="e.g. ₹50L–₹1Cr" />
        </label>
      </div>

      <label>
        Expected Start Date
        <input type="text" name="startDate" placeholder="e.g. Q2 2026" />
      </label>

      <label>
        Project Description *
        <textarea name="message" rows={5} required />
      </label>

      <label>
        How did you hear about us?
        <input type="text" name="source" />
      </label>

      <button type="submit" className="btn" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Submit Project Enquiry'}
      </button>

      {status === 'error' && (
        <p className="cform-error">
          Something went wrong sending your enquiry. Please try again, or email us directly.
        </p>
      )}
    </form>
  )
}
