import './ProjectGallery.css'

export default function ProjectGallery({ images, projectName }) {
  return (
    <div className="pgallery">
      {images.map((src, i) => (
        <div className="pgallery-item" key={src + i}>
          <img src={src} alt={`${projectName} — view ${i + 1}`} loading="lazy" />
        </div>
      ))}
    </div>
  )
}
