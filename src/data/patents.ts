import { SpeculativePatent } from '../types/archive';

const corePatents: SpeculativePatent[] = [
  {
    id: 'ZIAA-PAT-031',
    title: 'Magnetorheological Fluid Decoupled Sub-Acoustic Transducer',
    filedDate: '2024-03-12',
    status: 'Defensive Filing',
    leadInventor: 'Dr. H. Zazie',
    abstract: 'A method and apparatus for absorbing and transducing non-linear mechanical resonances below 20 Hz through a suspended iron-oxide ferrofluid matrix controlled by variable magnetic flux biasing.',
    claims: [
      '1. An acoustic decoupling apparatus comprising a sealed chamber filled with magnetorheological fluid, a variable DC electromagnetic bias coil, and a piezoelectric ceramic sensing disk.',
      '2. The apparatus of claim 1 wherein the magnetic flux density is varied dynamically between 0.1 Tesla and 1.2 Tesla to modulate sub-acoustic viscosity in real time.',
      '3. A method for converting structural floor micro-vibrations into microtonal audible harmonics using the fluid cavity of claim 1.'
    ],
    priorArt: ['US Patent 5,816,564 (Magnetic Fluid Dampers)', 'DE 198 42 110 A1 (Ferrofluid Acoustic Damping)'],
    knownFailureModes: ['Thermal runaway in electromagnet coil above 65°C.', 'Nanoparticle settling during extended idle periods (>30 days).'],
    materialsConstraints: ['Requires non-magnetic borosilicate glass or 316 stainless steel housing.', 'Synthetic ester carrier fluid must maintain viscosity below -10°C.'],
    diagramType: 'coil_assembly',
    relatedPrototypeId: 'ZIAA-PROTO-084'
  },
  {
    id: 'ZIAA-PAT-004',
    title: 'Thermal Friction Controlled Tape Oxide Erasure System',
    filedDate: '2022-02-18',
    status: 'Public Speculation',
    leadInventor: 'Dr. Elene Vane',
    abstract: 'An automated magnetic tape loop apparatus utilizing calibrated friction pins heated to near-Curie temperatures to incrementally alter signal coercivity during continuous playback cycles.',
    claims: [
      '1. A method for physical signal degradation on magnetic tape media comprising passing tape over heated ceramic friction pins at controlled tension.',
      '2. The method of claim 1 wherein high-frequency signal loss rate is regulated by modulating pin surface temperature between 80°C and 140°C.'
    ],
    priorArt: ['US Patent 3,654,402 (Thermal Magnetic Erasure)', 'AES Preprint #1049 (Tape Degradation Physics)'],
    knownFailureModes: ['Tape melting and oxide shedding leading to playhead fouling.', 'Uncontrolled harmonic noise generation.'],
    materialsConstraints: ['Requires polished sapphire or ceramic pins.', 'Dust containment ventilation required.'],
    diagramType: 'patent_flow',
    relatedPrototypeId: 'ZIAA-PROTO-012'
  },
  {
    id: 'ZIAA-PAT-052',
    title: 'Ultrasonic Parametric Intersection Difference-Tone Emitter',
    filedDate: '2025-01-28',
    status: 'Defensive Filing',
    leadInventor: 'Dr. K. M. Osei',
    abstract: 'System and method for projecting intersecting modulated ultrasonic carrier beams (35-45 kHz) that generate hyper-localized audible difference tones exclusively within the non-linear medium of the human ear canal.',
    claims: [
      '1. A parametric acoustic projection system comprising dual ultrasonic arrays driven at offset carrier frequencies exceeding 35 kHz.',
      '2. The system of claim 1 wherein focal point adjustment creates a spatial listening zone measuring less than 150mm in diameter.'
    ],
    priorArt: ['US Patent 6,058,193 (Parametric Sound System)', 'J. Audio Eng. Soc. Vol 31 (Nonlinear Acoustics)'],
    knownFailureModes: ['Acoustic shadow occlusion when obstacles pass through beam path.', 'Ultrasonic energy spillover outside main beam angle.'],
    materialsConstraints: ['Piezoelectric transducer arrays must maintain 0.1% frequency stability.'],
    diagramType: 'phase_matrix',
    relatedPrototypeId: 'ZIAA-PROTO-099'
  }
];

function generateExtendedPatents(): SpeculativePatent[] {
  const extended: SpeculativePatent[] = [];
  const inventors = ['Dr. H. Zazie', 'Dr. Elene Vane', 'Aris Thorne', 'Dr. K. M. Osei', 'Yael Lindholm', 'T. M. Chen'];
  const statuses: SpeculativePatent['status'][] = ['Public Speculation', 'Defensive Filing', 'Closed Prototype', 'Expired Inquiry'];
  const diagrams: SpeculativePatent['diagramType'][] = ['patent_flow', 'coil_assembly', 'acoustic_chamber', 'phase_matrix'];

  const patentTopics = [
    'Sub-Audible Waveguide Phase Matching System',
    'Acoustic Metamaterial Low-Frequency Absorber Cell',
    'Tactile Cranial Bone Conduction Modulator',
    'Electromagnetic Ionospheric VLF Signal Reconstitution',
    'Granular Physical Buffer Scrubbing Interface',
    'Automated Aleatoric Magnetic Tape Splicing Mechanism',
    'Massless Ionized Plasma Impulse Radiator',
    'Hydrodynamic Fluidic Surface Sound Projector',
    'Piezoelectric Structural Timber Resonator Matrix',
    'Microtonal Magnetic Saturation Synthesizer',
    'Zero-Latency Psychoacoustic Masking Filter',
    'Tectonic Subterranean Horn Coupling Assembly',
    'Non-Linear Auditory Difference Tone Modulator',
    'High-Coercivity Magnetic Dust Collector',
    'Spatial Reflection Cancellation Metasurface'
  ];

  for (let i = 1; i <= 75; i++) {
    const idNum = i.toString().padStart(3, '0');
    if (corePatents.some(p => p.id === `ZIAA-PAT-${idNum}`)) continue;

    const topic = patentTopics[i % patentTopics.length];
    const inventor = inventors[i % inventors.length];
    const status = statuses[i % statuses.length];
    const year = 2021 + (i % 6);
    const month = (i % 12 + 1).toString().padStart(2, '0');
    const day = ((i * 3) % 28 + 1).toString().padStart(2, '0');

    extended.push({
      id: `ZIAA-PAT-${idNum}`,
      title: `${topic} (Ref-${idNum})`,
      filedDate: `${year}-${month}-${day}`,
      status,
      leadInventor: inventor,
      abstract: `Speculative technical disclosure detailing a ${topic.toLowerCase()} for experimental audio research, specifying non-commercial defensive prior art boundaries and structural limitations.`,
      claims: [
        `1. An apparatus for experimental sound manipulation comprising an assembly configured for ${topic.toLowerCase()}.`,
        `2. The system of claim 1 wherein operation is bounded by material tolerances specified in ZIAA Dossier ${idNum}.`,
        `3. A non-commercial research process utilizing signal modulation according to claim 1.`
      ],
      priorArt: [`ISO/TC 43 Acoustic Standard ${100 + i}`, `ZIAA Archive Dossier PROTO-${idNum}`],
      knownFailureModes: [
        `Harmonic distortion during overload phase exceeding 12% THD.`,
        `Mechanical resonance drift under temperature fluctuations.`
      ],
      materialsConstraints: [
        `Requires precision calibrated mounting chassis with vibration isolation.`,
        `Operating temperature range restricted to 5°C - 35°C.`
      ],
      diagramType: diagrams[i % diagrams.length],
      relatedPrototypeId: `ZIAA-PROTO-${idNum}`
    });
  }

  return [...corePatents, ...extended];
}

export const patentsData: SpeculativePatent[] = generateExtendedPatents();
