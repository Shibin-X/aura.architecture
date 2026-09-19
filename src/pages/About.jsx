import './About.css'



export default function About() {
  return (
    <div className="wrap page">
      <header className="page-head">
        <span className="eyebrow">About</span>
        <h1>A small studio, working carefully.</h1>
      </header>

      <section className="about-block">
        <h2>Philosophy</h2>
        <p>
          We believe a building should respond to its site before it responds
          to a mood board. Every project begins with the ground it stands on —
          orientation, existing trees, prevailing wind — and the brief is
          worked into that context rather than laid over it.
        </p>
      </section>

      <section className="about-block">
        <h2>Approach</h2>
        <p>
          We keep our studio small deliberately. A limited number of active
          projects means every drawing is reviewed by the same two or three
          people who will also visit the site during construction — there is
          no handoff between the design team and the people who see it built.
        </p>
      </section>

    </div>
  )
}
