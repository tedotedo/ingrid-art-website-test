import { Artwork, Exhibition, NewsItem } from './types';

export const ARTWORKS: Artwork[] = [
  {
    id: 'w1',
    title: 'Structure of Silence I',
    year: '2024',
    medium: 'Oil and cold wax on linen',
    dimensions: '120 x 100 cm',
    description: 'A study in white and the absence of noise. The texture reveals the underlying chaos of the canvas grain.',
    imageUrl: 'https://picsum.photos/seed/art1/800/1000',
    series: 'Silence',
    category: 'Painting'
  },
  {
    id: 'w2',
    title: 'Structure of Silence II',
    year: '2024',
    medium: 'Oil and cold wax on linen',
    dimensions: '120 x 100 cm',
    description: 'Continuing the exploration of negative space. The faint lines suggest an architectural form that never manifests.',
    imageUrl: 'https://picsum.photos/seed/art2/800/1000',
    series: 'Silence',
    category: 'Painting'
  },
  {
    id: 'w3',
    title: 'Untitled (Red)',
    year: '2023',
    medium: 'Acrylic on canvas',
    dimensions: '200 x 200 cm',
    description: 'Raw pigment applied directly with hands. An expression of immediate, unmediated emotion.',
    imageUrl: 'https://picsum.photos/seed/art3/1000/1000',
    series: 'Primary',
    category: 'Painting'
  },
  {
    id: 'w4',
    title: 'Decomposition',
    year: '2023',
    medium: 'Mixed media on wood panel',
    dimensions: '50 x 50 cm',
    description: 'Organic matter mixed with binding agents, allowed to decay over a period of three months before sealing.',
    imageUrl: 'https://picsum.photos/seed/art4/600/600',
    category: 'Sculpture'
  },
  {
    id: 'w5',
    title: 'Peripheral Vision',
    year: '2022',
    medium: 'Graphite on paper',
    dimensions: '30 x 42 cm',
    description: 'Drawings made without looking directly at the paper, focusing only on the subject in the corner of the eye.',
    imageUrl: 'https://picsum.photos/seed/art5/600/800',
    series: 'Sight',
    category: 'Drawing'
  },
  {
    id: 'w6',
    title: 'Echo',
    year: '2022',
    medium: 'Digital print on archival paper',
    dimensions: 'Variable',
    description: 'A recursive image of the gallery space itself, devoid of art.',
    imageUrl: 'https://picsum.photos/seed/art6/1200/800',
    category: 'Photography'
  },
  {
    id: 'w7',
    title: 'Iron Oxide',
    year: '2021',
    medium: 'Rust and water on steel',
    dimensions: '100 x 200 cm',
    description: 'Time as a medium. The steel plate was left exposed to the elements for one year.',
    imageUrl: 'https://picsum.photos/seed/art7/1200/600',
    series: 'Elements',
    category: 'Sculpture'
  },
  {
    id: 'w8',
    title: 'Winter Study',
    year: '2021',
    medium: 'Photography',
    dimensions: 'Print 40 x 50 cm',
    description: 'High contrast photography capturing the stark lines of winter branches against a grey sky.',
    imageUrl: 'https://picsum.photos/seed/art8/800/600',
    category: 'Photography'
  },
  {
    id: 'w9',
    title: 'Memory of a Room',
    year: '2020',
    medium: 'Plaster and fabric',
    dimensions: 'Installation',
    description: 'Casting the negative space of a corner in a demolished house.',
    imageUrl: 'https://picsum.photos/seed/art9/1000/800',
    category: 'Installation'
  }
];

export const EXHIBITIONS: Exhibition[] = [
  { year: '2024', title: 'The Void Stares Back', venue: 'Gallery 44', location: 'London, UK', type: 'Solo' },
  { year: '2024', title: 'Modern Textures', venue: 'Kunsthalle', location: 'Berlin, DE', type: 'Group' },
  { year: '2023', title: 'New Vanguard', venue: 'MoMA PS1', location: 'New York, USA', type: 'Group' },
  { year: '2022', title: 'Silence', venue: 'White Cube', location: 'London, UK', type: 'Solo' },
  { year: '2021', title: 'Emerging Forms', venue: 'Palais de Tokyo', location: 'Paris, FR', type: 'Group' },
  { year: '2020', title: 'Degree Show', venue: 'Royal College of Art', location: 'London, UK', type: 'Group' },
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    date: '2024.3.15',
    content: 'New exhibition "The Void Stares Back" opens at Gallery 44, London next week.'
  },
  {
    id: 'n2',
    date: '2024.2.01',
    content: 'Added new works from the "Silence" series to the painting collection.'
  },
  {
    id: 'n3',
    date: '2023.11.20',
    content: 'Interview with Art Monthly is now available online.'
  },
  {
    id: 'n4',
    date: '2023.10.05',
    content: 'I have posted a new piece on Sculpture.'
  },
  {
    id: 'n5',
    date: '2023.09.12',
    content: 'Photos from the exhibition at MoMA PS1 have been added to the Archive.'
  }
];