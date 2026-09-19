import { Link } from 'react-router-dom'
import services from '../data/services.js'
import './Services.css'
import './Page.css'

export default function Services() {
  return (
    <div className="wrap page">
      <header className="page-head">
        <span className="eyebrow">What we do</span>
        <h1>Services</h1>
      </header>

      <div className="services-list">
        {services.map((s) => (
          <section key={s.id} className="service-row" id={s.slug}>
            <div className="service-image">
              <img src={s.heroImage} alt={s.name} loading="lazy" />
            </div>
            <div className="service-text">
              <h2>{s.name}</h2>
              <p className="service-summary">{s.summary}</p>
              <p className="service-approach">{s.approach}</p>
              <ul className="service-included">
                {s.included.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-outline">Enquire about this</Link>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
