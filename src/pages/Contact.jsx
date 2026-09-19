import ContactForm from '../components/ContactForm.jsx'
import './Contact.css'
import './Page.css'

export default function Contact() {
  return (
    <div className="wrap page">
      <header className="page-head">
        <span className="eyebrow">Contact</span>
        <h1>Let&rsquo;s discuss your project.</h1>
      </header>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-block">
            <span className="eyebrow">Studio</span>
            <p>
              AURA Architecture Studio<br />
              Kulasekaram Thucaklay RD<br />
              Kanyakumari, Tamil Nadu 629166<br />
              India
            </p>
          </div>

          <div className="contact-block">
            <span className="eyebrow">Email</span>
            <p><a href="mailto:hello@aurastudio.in">hello@aurastudio.in</a></p>
          </div>

          <div className="contact-block">
            <span className="eyebrow">Phone</span>
            <p><a href="tel:+919000000000">+91 90000 00000</a></p>
          </div>

          <div className="contact-block">
            <span className="eyebrow">Follow the studio</span>
            <p>
              <a href="https://www.instagram.com/aura.architecture.studio/" target="_blank" rel="Aura Architecture Studio">Instagram</a>
              {' · '}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            </p>
          </div>
        </div>

        <div className="contact-form-col">
          <span className="eyebrow">Start a Project</span>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
