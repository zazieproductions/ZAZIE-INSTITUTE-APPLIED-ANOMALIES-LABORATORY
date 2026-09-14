import { Exhibition } from '../types/archive';

export const exhibitionsData: Exhibition[] = [
  {
    id: 'EXHIB-2025-A',
    title: 'Sub-Audible Geometries: 5 Years of Material Signal Research',
    venue: 'ZIAA Main Vault & Annex',
    location: 'Hudson Valley, NY',
    dates: 'October 12 – December 20, 2025',
    description: 'Comprehensive retrospective exhibition featuring 40 active and archived ZIAA prototypes, live ferrofluid cavity resonators, subterranean waveguides, and physical tape erosion installations.',
    installations: [
      'Sub-Acoustic Ferrofluid Cavity Resonator (Proto-084 Live Rig)',
      'Subterranean Waveguide Realtime Feed',
      'Parametric Ultrasonic Chamber (Proto-099)'
    ],
    visitorsEstimate: 4200,
    documentationUrls: ['/archives/exhib-2025-a-catalog.pdf']
  },
  {
    id: 'EXHIB-2024-B',
    title: 'Signals From Bedrock: Geophonic Listening Post',
    venue: 'Reykjavík Acoustic Vault',
    location: 'Reykjavík, Iceland',
    dates: 'June 4 – August 18, 2024',
    description: 'A subterranean public listening infrastructure installation coupling geothermal earth vibrations directly into tactile timber contact radiators.',
    installations: [
      'Geothermal Piezo Timber Radiator (Proto-063 Variant)',
      'VLF Atmospheric Radio Loop Antenna Array'
    ],
    visitorsEstimate: 8900,
    documentationUrls: ['/archives/reykjavik-vault-log.pdf']
  },
  {
    id: 'EXHIB-2023-C',
    title: 'Erosion as Archives: Material Memory in Sound',
    venue: 'Berlin Signal Bunker Gallery',
    location: 'Berlin, Germany',
    dates: 'March 15 – April 30, 2023',
    description: 'An exhibition dedicated to physical tape abrasion, oxide shedding, and high-coercivity magnetic signal loss, featuring daily 1,000-pass tape loop degradation runs.',
    installations: [
      'Tape Hysteresis Scrubber (Proto-012)',
      'Massless Plasma Spark Impulse Demonstrator (Proto-020)'
    ],
    visitorsEstimate: 6100,
    documentationUrls: ['/archives/berlin-bunker-exhib.pdf']
  }
];
