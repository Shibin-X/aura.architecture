import { useMemo, useState } from 'react'
import ProjectCard from './ProjectCard.jsx'
import './ProjectGrid.css'

const FILTERS = ['All', 'Ongoing', 'Completed', 'Residential', 'Commercial', 'Landscape']

export default function ProjectGrid({ projects }) {
  const [active, setActive] = useState('All')

  const filtered = useMemo(() => {
    if (active === 'All') return projects
    if (active === 'Ongoing' || active === 'Completed') {
      return projects.filter((p) => p.status === active)
    }
    return projects.filter((p) => p.category === active)
  }, [active, projects])

  return (
    <div>
      <div className="pgrid-filters">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`pgrid-filter ${active === f ? 'is-active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="pgrid-empty">No projects in this category yet.</p>
      ) : (
        <div className="pgrid">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      )}
    </div>
  )
}
