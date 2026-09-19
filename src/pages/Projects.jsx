import projects from '../data/projects.js'
import ProjectGrid from '../components/ProjectGrid.jsx'
import './Page.css'

export default function Projects() {
  return (
    <div className="wrap page">
      <header className="page-head">
        <span className="eyebrow">Work</span>
        <h1>Projects</h1>
        <p>Residential, commercial and landscape work, completed and in progress.</p>
      </header>

      <ProjectGrid projects={projects} />
    </div>
  )
}
