// Add a new project by pushing an object into this array.
// The Projects listing and the /projects/:slug detail page both
// read from here — no new React page or route is needed per project.

const projects = [
  {
    id: 1,
    slug: 'courtyard-residence',
    name: 'Courtyard Residence',
    location: 'Chennai, Tamil Nadu',
    category: 'Residential',
    status: 'Completed',
    year: 2025,

    siteArea: '4,500 sq.ft',
    builtUpArea: '3,200 sq.ft',
    client: 'Private Client',
    designBy: 'AURA Studio',
    interiorDesignBy: 'AURA Studio',

    statement:
      'A contemporary residence organized around a central courtyard, drawing daylight and cross-ventilation into every room while keeping the street elevation quiet and private.',

    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 2,
    slug: 'harbor-view-offices',
    name: 'Harbor View Offices',
    location: 'Kochi, Kerala',
    category: 'Commercial',
    status: 'Ongoing',
    year: 2026,

    siteArea: '12,000 sq.ft',
    builtUpArea: '9,800 sq.ft',
    client: 'Confidential',
    designBy: 'AURA Studio',
    interiorDesignBy: 'AURA Studio',

    statement:
      'A low-rise commercial campus that steps back from the waterfront in shaded terraces, giving every floor plate a view without overheating the workspace below.',

    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 3,
    slug: 'palm-grove-landscape',
    name: 'Palm Grove Landscape',
    location: 'Coimbatore, Tamil Nadu',
    category: 'Landscape',
    status: 'Completed',
    year: 2024,

    siteArea: '2 acres',
    builtUpArea: '—',
    client: 'Private Client',
    designBy: 'AURA Studio',
    interiorDesignBy: '—',

    statement:
      'A landscape masterplan that keeps an existing palm grove intact, threading walking paths and a stepped water channel between the mature trees.',

    coverImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    ],
  },
]

export default projects
