import { Link, useParams } from 'react-router-dom'
import projects from '../data/projects.js'
import ProjectGallery from '../components/ProjectGallery.jsx'
import './ProjectDetails.css'

const INFO_ROWS = [
  ['Project Name', 'name'],
  ['Location', 'location'],
  ['Type', 'category'],
  ['Status', 'status'],
  ['Year', 'year'],
  ['Site Area', 'siteArea'],
  ['Build-up Area', 'builtUpArea'],
  ['Client', 'client'],
  ['Design By', 'designBy'],
  ['Interior Design By', 'interiorDesignBy'],
]

export default function ProjectDetails() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="wrap page">
        <h1>Project not found</h1>
        <p>
          <Link to="/projects" className="home-section-link">← Back to projects</Link>
        </p>
      </div>
    )
  }

  const related = projects.filter((p) => p.slug !== slug && p.category === project.category).slice(0, 3)

  return (
    <div>
      <div className="pd-hero">
        <img src={project.coverImage} alt={project.name} />
      </div>

      <div className="wrap pd-body">
        <header className="pd-head">
          <h1>{project.name}</h1>
          <p>{project.location}, India</p>
        </header>

        <p className="pd-statement">{project.statement}</p>

        <table className="pd-table">
          <tbody>
            {INFO_ROWS.map(([label, key]) => (
              <tr key={key}>
                <th>{label}</th>
                <td>{project[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <section className="pd-gallery-section">
          <h2>Gallery</h2>
          <ProjectGallery images={project.gallery} projectName={project.name} />
        </section>

        {related.length > 0 && (
          <section className="pd-related">
            <h2>Related Projects</h2>
            <div className="pd-related-list">
              {related.map((p) => (
                <Link key={p.id} to={`/projects/${p.slug}`} className="pd-related-item">
                  <img src={p.coverImage} alt={p.name} />
                  <span>{p.name}</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
