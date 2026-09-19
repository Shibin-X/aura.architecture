import { Link } from 'react-router-dom'
import projects from '../data/projects.js'
import services from '../data/services.js'
import ProjectCard from '../components/ProjectCard.jsx'
import './Home.css'

export default function Home() {
  const featured = projects.slice(0, 3)
  const ongoing = projects.find((p) => p.status === 'Ongoing')

  return (
    <div>
      <section className="home-hero">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop"
          alt="A courtyard residence at dusk"
          className="home-hero-image"
        />
        <div className="home-hero-text wrap">
          <h1>
            We design buildings<br />around how light falls.
          </h1>
          <p>AURA Architecture Studio — KanyaKumari, India</p>
        </div>
      </section>

      <section className="wrap home-intro">
        <p className="home-intro-text">
          AURA is a small studio working across residential, commercial and
          landscape architecture. We take on a limited number of projects at
          a time, so every one gets the same attention from first sketch to
          final handover.
        </p>
        <Link to="/about" className="btn btn-outline">About the studio</Link>
      </section>

      <section className="wrap home-section">
        <div className="home-section-head">
          <h2>Selected Projects</h2>
          <Link to="/projects" className="home-section-link">View all →</Link>
        </div>
        <div className="home-featured-grid">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      <section className="wrap home-section">
        <h2>Services</h2>
        <ul className="home-services-list">
          {services.map((s) => (
            <li key={s.id}>
              <Link to="/services" className="home-service-row">
                <span>{s.name}</span>
                <span className="home-service-arrow">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {ongoing && (
        <section className="wrap home-section home-ongoing">
          <span className="eyebrow">Currently building</span>
          <Link to={`/projects/${ongoing.slug}`} className="home-ongoing-card">
            <img src={ongoing.coverImage} alt={ongoing.name} />
            <div>
              <h3>{ongoing.name}</h3>
              <p>{ongoing.location} — {ongoing.category}, {ongoing.year}</p>
            </div>
          </Link>
        </section>
      )}

      <section className="wrap home-philosophy">
        <h2>
          Every project starts with the site — its light, its climate, and
          what was already there before we arrived.
        </h2>
      </section>

      <section className="wrap home-cta">
        <h2>Have a project in mind?</h2>
        <Link to="/contact" className="btn">Start a Project</Link>
      </section>
    </div>
  )
}
