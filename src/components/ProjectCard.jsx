import { Link } from 'react-router-dom'
import './ProjectCard.css'

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="pcard">
      <div className="pcard-image">
        <img src={project.coverImage} alt={project.name} loading="lazy" />
        <span className={`status-badge ${project.status.toLowerCase()}`}>
          {project.status}
        </span>
      </div>
      <div className="pcard-info">
        <h3 className="pcard-name">{project.name}</h3>
        <p className="pcard-location">{project.location}</p>
        <p className="pcard-meta">{project.category} · {project.year}</p>
      </div>
    </Link>
  )
}
