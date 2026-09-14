import { Prototype } from '../types/archive';

const corePrototypes: Prototype[] = [
  {
    id: 'ZIAA-PROTO-084',
    title: 'Sub-Acoustic Ferrofluid Cavity Resonator',
    subtitle: 'Magnetorheological liquid damper for micro-vibrational spatial decoupling',
    division: 'Material Acoustics',
    status: 'Active',
    year: 2024,
    leadResearchers: ['Dr. H. Zazie', 'Aris Thorne'],
    materials: ['Fe3O4 nanoparticles in synthetic ester', 'Precision neodymium bias matrix', 'Borosilicate glass chamber', 'Piezoelectric ceramic disk (PZT-8)'],
    researchQuestion: 'Can magnetorheological fluids modulate non-linear sub-audible mechanical resonance below 12 Hz without structural hysteresis?',
    abstract: 'A 2.4-liter sealed glass chamber containing suspended magnetic iron-oxide nanoparticles, tuned via a variable electromagnet. Used to damp low-frequency building oscillations while transducing minute seismic and structural acoustics into micro-tonal audible harmonics.',
    timeline: [
      { year: '2023-11', event: 'Initial fluid viscosity anomaly detected under 8.4 Hz excitation.' },
      { year: '2024-02', event: 'First successful microtonal harmonic extraction in ZIAA Vault B.' },
      { year: '2024-06', event: 'Magnet coil overheating forced duty-cycle reduction to 45 minutes.' },
      { year: '2025-01', event: 'Integration into Berlin Signal Bunker subterranean field test.' }
    ],
    schematicType: 'transducer',
    audioPreset: 'ferrofluid',
    limitationsAndFailures: [
      'Nanoparticle agglomeration occurs after 140 continuous hours of 120dB SPL exposure.',
      'Thermal drift shifts resonant center peak by 1.8 Hz per 5°C ambient temperature delta.',
      'Corroded housing seal in prototype run 02 resulted in non-toxic ester leakage.'
    ],
    ethicsNotes: 'Device produces non-hazardous tactile vibrations (7-11 Hz) that can cause mild vertigo or nausea in sensitive subjects during prolonged near-field exposure (Dose Limit: 20 mins).',
    provenance: 'Constructed at ZIAA Main Workshop from reclaimed 1970s laboratory optics mounts and custom magnetic coils wound in-house.',
    relatedPatents: ['ZIAA-PAT-031', 'ZIAA-PAT-014'],
    relatedLogs: ['ZIAA-LOG-2024.02.14', 'ZIAA-LOG-2024.06.28'],
    relatedPapers: ['ZIAA-PAPER-003'],
    annotations: [
      { author: 'Dr. Elene Vane', date: '2024-03-01', text: 'The 11.2 Hz peak matches the primary bending mode of the floor slab. Verify whether we are listening to the chamber or the building envelope.' },
      { author: 'Aris Thorne', date: '2024-03-04', text: 'Floor decoupling rig attached. Resonant peak remains steady at 11.2 Hz; it is intrinsic to the fluid cavity geometry.' }
    ]
  },
  {
    id: 'ZIAA-PROTO-012',
    title: 'Magnetic Oxide Tape Hysteresis Scrubber',
    subtitle: 'Iterative physical wear degradation and signal reconstruction engine',
    division: 'Signal Archaeology',
    status: 'Archived',
    year: 2022,
    leadResearchers: ['Dr. Elene Vane', 'T. M. Chen'],
    materials: ['Open-reel 1/4" tape transport', 'Polished sapphire tape heads', 'Heated ceramic friction pins', 'Custom high-gain preamplifier'],
    researchQuestion: 'How does continuous mechanical tape abrasion alter harmonic memory loss across 1,000 successive playhead passes?',
    abstract: 'An automated open-reel tape loop deck modified with friction pins that controlledly heat and degrade magnetic iron-oxide layers while recording instantaneous signal loss. Explores the boundary between signal erosion, noise floor emergence, and phantom tone creation.',
    timeline: [
      { year: '2021-08', event: 'First prototype transport built from Revox B77 chassis.' },
      { year: '2022-01', event: '1,000-cycle degradation trial completed on BASF 911 stock.' },
      { year: '2022-05', event: 'Sapphire pin wear caused uncalibrated tape shredding; project archived.' }
    ],
    schematicType: 'waveguide',
    audioPreset: 'tape_decay',
    limitationsAndFailures: [
      'Tape shedding clogs head gaps after 350 loops without manual isopropyl cleaning.',
      'Irreversible loss of high-frequency detail (>8kHz) occurs within first 50 passes.',
      'Shed oxide dust presents fine particle inhalation risk if operated outside fume hood.'
    ],
    ethicsNotes: 'All source audio used in erosion tests must be generated in-house or in the public domain to avoid destruction of irreplaceable archival tape media.',
    provenance: 'Donated by WDR Electronic Music Studio inventory reduction (1998 surplus), re-machined at ZIAA.',
    relatedPatents: ['ZIAA-PAT-004'],
    relatedLogs: ['ZIAA-LOG-2022.01.19', 'ZIAA-LOG-2022.05.11'],
    relatedPapers: ['ZIAA-PAPER-001'],
    annotations: [
      { author: 'T. M. Chen', date: '2022-02-02', text: 'The phantom tone at 3.4kHz is not an acoustic artifact—it is oxide dust caking on the capstan pressure roller.' }
    ]
  },
  {
    id: 'ZIAA-PROTO-041',
    title: 'Subterranean Waveguide Infrasound Collector',
    subtitle: 'Geophonic acoustic impedance match transducer array',
    division: 'Spatial Infrastructures',
    status: 'Active',
    year: 2023,
    leadResearchers: ['Aris Thorne', 'Yael Lindholm'],
    materials: ['4-meter vulcanized rubber horn', 'Sub-acoustic diaphragm (0.5 Hz tuned)', 'Optical laser displacement sensor', 'Stainless steel soil anchor'],
    researchQuestion: 'Can passive earth-coupled horn geometries amplify micro-seismic acoustic waves without active electronic pre-amplification?',
    abstract: 'A subterranean horn buried 3.5 meters underground in bedrock. Uses an optical displacement sensor measuring diaphragm flexure down to 0.1 Hz, translating tectonic tension, deep aquifer fluid movement, and distant heavy rail vibrations into sub-bass spatial soundscapes.',
    timeline: [
      { year: '2022-10', event: 'Excavation and horn deployment at Hudson Valley site.' },
      { year: '2023-04', event: 'First detected sub-audible resonance from 400km distant quarry blast.' },
      { year: '2023-09', event: 'Optical laser alignment stabilized against humidity fluctuations.' }
    ],
    schematicType: 'spatial',
    audioPreset: 'infrasonic',
    limitationsAndFailures: [
      'Ground water infiltration during spring thaw dampens diaphragm response by 12 dB.',
      'Laser displacement detector requires weekly recalibration due to thermal soil creep.',
      'High wind shear above ground generates turbulent micro-barometric noise.'
    ],
    ethicsNotes: 'Site access requires strict adherence to local geological disturbance guidelines. Array operate silently without emitting active seismic signals.',
    provenance: 'Site installation funded by ZIAA Spatial Infrastructure Grant 2022-B.',
    relatedPatents: ['ZIAA-PAT-018'],
    relatedLogs: ['ZIAA-LOG-2023.04.12'],
    relatedPapers: ['ZIAA-PAPER-005'],
    annotations: [
      { author: 'Yael Lindholm', date: '2023-05-01', text: 'The 1.4 Hz continuous pulse observed every Tuesday at 03:00 UTC correlates with freight rail switching 28km north.' }
    ]
  },
  {
    id: 'ZIAA-PROTO-099',
    title: 'Psychoacoustic Masking Difference-Tone Synthesizer',
    subtitle: 'Non-linear cochlear distortion product generator for phantom spatial auditory perception',
    division: 'Perceptual Interfaces',
    status: 'Public Beta',
    year: 2025,
    leadResearchers: ['Dr. K. M. Osei', 'Dr. H. Zazie'],
    materials: ['Ultrasonic transducers (40 kHz carrier)', 'Precision DSP FPGA board', 'Binaural calibration head', 'Acoustic metamaterial aperture'],
    researchQuestion: 'Can intersecting 40 kHz ultrasonic beams induce audible difference-tones inside the listener’s ear canal without audible ambient sound in the room?',
    abstract: 'An array of two focused ultrasonic emitters projecting modulated ultrasonic carrier frequencies (40,000 Hz and 40,880 Hz). When the beams intersect near a human listener, non-linear air and ear-canal interaction generates a hyper-localized 880 Hz tone heard inside the head.',
    timeline: [
      { year: '2024-05', event: 'Proof of concept in anchoic chamber.' },
      { year: '2025-01', event: 'Public listening demonstration at ZIAA Annual Open Lab.' },
      { year: '2025-06', event: 'Aperture redesigned to prevent stray ultrasonic reflection.' }
    ],
    schematicType: 'circuit',
    audioPreset: 'psychoacoustic',
    limitationsAndFailures: [
      'Spatial sweet-spot is restricted to a 10cm x 10cm volumetric focal point.',
      'High sound pressure levels at 40 kHz must be strictly limited to prevent auditory fatigue.',
      'Dog and bat avoidance zone required within 15 meters during outdoor trials.'
    ],
    ethicsNotes: 'Strict exposure limit of 85 dB SPL equivalent. Participants must give informed consent due to non-standard localized sensory phenomena.',
    provenance: 'Developed under ZIAA Perceptual Interfaces Initiative.',
    relatedPatents: ['ZIAA-PAT-052'],
    relatedLogs: ['ZIAA-LOG-2025.01.20'],
    relatedPapers: ['ZIAA-PAPER-008'],
    annotations: [
      { author: 'Dr. K. M. Osei', date: '2025-02-11', text: 'Subjects report feeling as though the sound originates behind their soft palate rather than from external speakers.' }
    ]
  },
  {
    id: 'ZIAA-PROTO-105',
    title: 'Granular Memory Buffer Scrubber & Freeze Unit',
    subtitle: 'Real-time stochastic audio frame chopper with physical magnetic tape scrubwheel',
    division: 'Generative Systems',
    status: 'Active',
    year: 2025,
    leadResearchers: ['T. M. Chen', 'Dr. Elene Vane'],
    materials: ['32-bit floating point audio DSP', 'Weighted brass jog-wheel with optical encoder', 'OLED waveform matrix', 'Hand-wound input transformers'],
    researchQuestion: 'How does tactile physical scrubbing of digital circular memory buffers alter performer gesture in spatial sound improvisations?',
    abstract: 'A standalone performance instrument that captures a rolling 60-second audio buffer and maps it to a heavy brass jog-wheel. Rotating the wheel scrubs forward/backward through time with micro-granular pitch shifting, grain density modulation, and freeze loops.',
    timeline: [
      { year: '2024-09', event: 'DSP algorithms finalized; brass wheel machined.' },
      { year: '2025-03', event: 'Deployed in Reykjavik Vault residency performance series.' }
    ],
    schematicType: 'generative',
    audioPreset: 'granular',
    limitationsAndFailures: [
      'High memory buffer fill rate introduces 4.2ms latency in ultra-fine grain mode.',
      'Optical encoder dust contamination causes occasional frame jump under high-speed spinning.'
    ],
    ethicsNotes: 'Open-source software component released under ZIAA Non-Commercial Speculative License.',
    provenance: 'Custom hardware housing milled from recycled aircraft aluminum at ZIAA FabLab.',
    relatedPatents: ['ZIAA-PAT-061'],
    relatedLogs: ['ZIAA-LOG-2025.03.15'],
    relatedPapers: ['ZIAA-PAPER-010'],
    annotations: [
      { author: 'T. M. Chen', date: '2025-03-18', text: 'The inertia of the 1.2kg brass wheel gives digital audio the physical resistance of an analogue master tape.' }
    ]
  },
  {
    id: 'ZIAA-PROTO-063',
    title: 'Piezo-Resonant Wood Structural Contact Transducer',
    subtitle: 'Timber acoustic feedback damping matrix for historical architectural listening',
    division: 'Material Acoustics',
    status: 'Decommissioned',
    year: 2023,
    leadResearchers: ['Aris Thorne'],
    materials: ['200-year-old reclaimed spruce beam', 'High-voltage PZT actuators', 'Differential charge preamps', 'Brass tension rods'],
    researchQuestion: 'Can ancient timber structures act as continuous passive reverberation memories when excited by structural piezo contact arrays?',
    abstract: 'A 3-meter spruce timber beam fitted with embedded piezoelectric actuators. Tested as an architectural acoustic radiator that injects audio signals directly into historic building frames, using the building timber as a natural distributed speaker.',
    timeline: [
      { year: '2023-01', event: 'Beam installation in ZIAA Annex.' },
      { year: '2023-07', event: 'Wood dry rot crack developed due to micro-frictional acoustic heating; decommissioned.' }
    ],
    schematicType: 'acoustic',
    audioPreset: 'piezo',
    limitationsAndFailures: [
      'Acoustic energy loss at wood joints exceeds 18 dB per meter.',
      'Sustained excitation at 2.2 kHz caused longitudinal grain splitting in dry spruce.'
    ],
    ethicsNotes: 'Structural testing on historical sites must avoid structural resonance peaks that could loosen mortise and tenon joints.',
    provenance: 'Spruce beam reclaimed from demolished 1840s Hudson Valley barn.',
    relatedPatents: ['ZIAA-PAT-022'],
    relatedLogs: ['ZIAA-LOG-2023.07.09'],
    relatedPapers: ['ZIAA-PAPER-002'],
    annotations: [
      { author: 'Aris Thorne', date: '2023-07-10', text: 'Spruce crack documented in Log 2023.07.09. Structural feedback loop reached 114dB inside wood core.' }
    ]
  },
  {
    id: 'ZIAA-PROTO-003',
    title: 'Electromagnetic VLF Ionospheric Vapour Detector',
    subtitle: 'Very low frequency natural radio receiver and lightning whistle tracker',
    division: 'Signal Archaeology',
    status: 'Active',
    year: 2021,
    leadResearchers: ['Dr. H. Zazie', 'Yael Lindholm'],
    materials: ['2-meter orthogonal loop antenna', 'Mu-metal shielding enclosure', 'Ultra-low noise JFET preamp', '192 kHz 24-bit AD converter'],
    researchQuestion: 'How can magnetospheric chorus emissions and lightning whistler signals be filtered from industrial 50/60 Hz power grid hum?',
    abstract: 'A high-sensitivity VLF receiver (300 Hz – 30 kHz) utilizing a custom dual-loop antenna shielded against powerline hum. Captures natural electromagnetic phenomena in the upper atmosphere including tweeks, whistlers, and dawn chorus emissions.',
    timeline: [
      { year: '2021-03', event: 'First antenna deployment at rural dark-sky observatory.' },
      { year: '2021-11', event: 'DSP comb-filter implemented to reject 60 Hz harmonic grid noise.' }
    ],
    schematicType: 'circuit',
    audioPreset: 'infrasonic',
    limitationsAndFailures: [
      'Unusable within 5km of electrified rail lines due to heavy harmonic interference.',
      'Preamp sensitive to nearby solar inverter switching spikes.'
    ],
    ethicsNotes: 'Operates in passive listen-only mode. Does not transmit radio energy.',
    provenance: 'Built from surplus military VLF direction-finding components.',
    relatedPatents: ['ZIAA-PAT-002'],
    relatedLogs: ['ZIAA-LOG-2021.03.29'],
    relatedPapers: ['ZIAA-PAPER-001'],
    annotations: [
      { author: 'Yael Lindholm', date: '2021-04-02', text: 'Captured a 4.2-second falling whistler during a solar flare event. Audio preserved in Vault file VLF-003-88.' }
    ]
  },
  {
    id: 'ZIAA-PROTO-033',
    title: 'Micro-Hydrodynamic Water Column Speaker',
    subtitle: 'Fluidic surface disturbance acoustic radiator for underwater-to-air transition',
    division: 'Material Acoustics',
    status: 'Failed',
    year: 2023,
    leadResearchers: ['Dr. Elene Vane'],
    materials: ['Acrylic water column (1.8m height)', 'Submersible ceramic hydro-transducer', 'Surface laser reflection sensor', 'Degassed distilled water'],
    researchQuestion: 'Can acoustic wave pressure propagating through a vertical water column project crisp directional audio into ambient air via liquid surface ripple deflection?',
    abstract: 'A transparent column of water driven from below by a 100-watt hydro-transducer. The surface ripples act as a moving optical acoustic membrane, projecting modulated directional sound into the air above.',
    timeline: [
      { year: '2022-11', event: 'Column assembly completed.' },
      { year: '2023-03', event: 'Cavitation bubbles ruined optical laser tracking. Project terminated.' }
    ],
    schematicType: 'acoustic',
    audioPreset: 'ferrofluid',
    limitationsAndFailures: [
      'Water cavitation at high amplitudes generated intense harmonic distortion (+24% THD).',
      'Algae growth in unheated water required chemical treatment that dissolved acrylic seals.'
    ],
    ethicsNotes: 'Chemical water additives required proper chemical waste disposal.',
    provenance: 'ZIAA Hydronics Testing Bay.',
    relatedPatents: ['ZIAA-PAT-015'],
    relatedLogs: ['ZIAA-LOG-2023.03.18'],
    relatedPapers: ['ZIAA-PAPER-003'],
    annotations: [
      { author: 'Dr. Elene Vane', date: '2023-03-19', text: 'Distortion became severe above 85 dB SPL. Transition efficiency from liquid to gas is less than 0.8%.' }
    ]
  },
  {
    id: 'ZIAA-PROTO-077',
    title: 'Binaural Bone-Conduction Tactile Headband',
    subtitle: 'Temporal bone acoustic transducer array for non-cochlear spatial navigation',
    division: 'Perceptual Interfaces',
    status: 'Active',
    year: 2024,
    leadResearchers: ['Dr. K. M. Osei'],
    materials: ['Carbon fiber spring band', 'Dual titanium bone contact pads', 'Class-D differential amplifier', 'Sub-bass haptic voice coils'],
    researchQuestion: 'Can high-frequency spatial localization cues be perceived accurately through cranial bone conduction alone?',
    abstract: 'A lightweight cranial headset that delivers 20 Hz – 18 kHz audio directly into the temporal bone. Designed to allow visually impaired or spatially orienting listeners to receive spatial navigational audio without blocking ambient ear canal sound.',
    timeline: [
      { year: '2024-01', event: 'Cranial resonance calibration trials.' },
      { year: '2024-08', event: 'Field trials conducted in urban transit environments.' }
    ],
    schematicType: 'transducer',
    audioPreset: 'psychoacoustic',
    limitationsAndFailures: [
      'Individual skull density variation shifts frequency response by up to +/- 6 dB at 4kHz.',
      'High volume causes mild tickling sensation at skin contact points.'
    ],
    ethicsNotes: 'Volunteers screened for temporomandibular joint (TMJ) discomfort before prolonged testing.',
    provenance: 'ZIAA Human Perception Lab.',
    relatedPatents: ['ZIAA-PAT-044'],
    relatedLogs: ['ZIAA-LOG-2024.08.12'],
    relatedPapers: ['ZIAA-PAPER-007'],
    annotations: [
      { author: 'Dr. K. M. Osei', date: '2024-08-15', text: 'Listeners reliably localized virtual sound sources within 8 degrees of azimuth.' }
    ]
  },
  {
    id: 'ZIAA-PROTO-112',
    title: 'Stochastic Algorithmic Tape Re-Splicer',
    subtitle: 'Automated physical magnetic tape cutting and splicing robot arm',
    division: 'Generative Systems',
    status: 'Public Beta',
    year: 2026,
    leadResearchers: ['T. M. Chen', 'Dr. H. Zazie'],
    materials: ['6-axis miniature robotic arm', 'Optical tape block sensor', 'Precision razor cutter', 'Splicing tape dispenser'],
    researchQuestion: 'Can aleatoric tape composition rules from the 1950s Musique Concrète movement be physically automated by precision robotics in real time?',
    abstract: 'A robotic installation that takes physical 1/4" audio tape recorded live, cuts it into random 3cm to 20cm segments, shuffles them according to a Markov chain algorithm, and splices them back into a continuous loop for instant replay.',
    timeline: [
      { year: '2025-07', event: 'Arm kinematics calibrated.' },
      { year: '2026-02', event: 'First 24-hour continuous auto-splicing marathon completed.' }
    ],
    schematicType: 'generative',
    audioPreset: 'tape_decay',
    limitationsAndFailures: [
      'Splicing tape alignment error of >0.1mm causes tape jam in playhead guide.',
      'Razor blade requires replacement every 200 cuts to prevent frayed tape edges.'
    ],
    ethicsNotes: 'Destructive process—source tape cannot be restored to original state once cut.',
    provenance: 'Robotic hardware integration supported by ZIAA Generative Systems Lab.',
    relatedPatents: ['ZIAA-PAT-068'],
    relatedLogs: ['ZIAA-LOG-2026.02.04'],
    relatedPapers: ['ZIAA-PAPER-011'],
    annotations: [
      { author: 'Dr. H. Zazie', date: '2026-02-05', text: 'The machine produces 120 splices per hour without human exhaustion. The resulting rhythm exhibits surprising micro-syncopation.' }
    ]
  },
  {
    id: 'ZIAA-PROTO-050',
    title: 'Acoustic Metamaterial Directional Sound Absorber',
    subtitle: 'Sub-wavelength sonic crystal array for passive room mode cancellation',
    division: 'Material Acoustics',
    status: 'Active',
    year: 2023,
    leadResearchers: ['Aris Thorne', 'Dr. Elene Vane'],
    materials: ['3D printed Helmholtz resonator lattice', 'Aerogel sound barrier film', 'Anodized aluminum frame'],
    researchQuestion: 'Can passive sub-wavelength metamaterial structures absorb 50 Hz bass room modes without requiring 2-meter thick traditional fiber glass trapping?',
    abstract: 'A thin 12cm panel consisting of 144 interconnected micro-slit Helmholtz chambers tuned to dissipate deep low-frequency acoustic energy through viscous friction in micro-apertures.',
    timeline: [
      { year: '2023-03', event: 'Impedance tube acoustic testing.' },
      { year: '2023-10', event: 'Installed in ZIAA Mastering Vault listening room.' }
    ],
    schematicType: 'acoustic',
    audioPreset: 'piezo',
    limitationsAndFailures: [
      'Absorption bandwidth is ultra-narrow (+/- 3 Hz around center frequency of 58 Hz).',
      'Dust accumulation in micro-slits reduces acoustic friction over 6 months.'
    ],
    ethicsNotes: 'Manufactured using bio-based recyclable polylactic acid polymers.',
    provenance: 'Designed using ZIAA Finite-Element Wave Simulator.',
    relatedPatents: ['ZIAA-PAT-028'],
    relatedLogs: ['ZIAA-LOG-2023.10.22'],
    relatedPapers: ['ZIAA-PAPER-006'],
    annotations: [
      { author: 'Aris Thorne', date: '2023-11-02', text: 'Lowers room decay time at 58 Hz from 1.4 seconds down to 0.28 seconds in Vault C.' }
    ]
  },
  {
    id: 'ZIAA-PROTO-020',
    title: 'Volumetric Plasma Spark Acoustic Radiator',
    subtitle: 'Massless air-ionization audio speaker for distortion-free impulse measurement',
    division: 'Perceptual Interfaces',
    status: 'Archived',
    year: 2022,
    leadResearchers: ['Dr. H. Zazie'],
    materials: ['High-voltage flyback transformer (25kV)', 'Tungsten electrode gap', 'Audio PWM modulator', 'Ozone extraction fan'],
    researchQuestion: 'Does a massless thermal plasma spark eliminate speaker diaphragm resonance during high-precision impulse response testing?',
    abstract: 'An arc of ionized air modulated at audio frequencies. Because plasma has no physical mass or diaphragm, it produces zero mechanical ring-down, providing ultra-pure acoustic impulse response measurements from 1 kHz to 100 kHz.',
    timeline: [
      { year: '2021-12', event: 'First stable plasma arc ignited.' },
      { year: '2022-04', event: 'Ozone gas generation exceeded lab safety thresholds; project archived.' }
    ],
    schematicType: 'circuit',
    audioPreset: 'granular',
    limitationsAndFailures: [
      'Generates toxic ozone gas (O3) requiring heavy exhaust ventilation.',
      'High electromagnetic interference (EMI) disrupts nearby unshielded digital gear.',
      'Low sound pressure output (< 72 dB SPL at 1 meter).'
    ],
    ethicsNotes: 'High voltage hazard (25,000 Volts). Operation prohibited without interlocked safety enclosure.',
    provenance: 'ZIAA High-Voltage Test Bench.',
    relatedPatents: ['ZIAA-PAT-009'],
    relatedLogs: ['ZIAA-LOG-2022.04.14'],
    relatedPapers: ['ZIAA-PAPER-002'],
    annotations: [
      { author: 'Dr. H. Zazie', date: '2022-04-15', text: 'Impulse response fidelity is perfect, but ozone levels reached 0.15 ppm within 10 minutes. Unsafe for prolonged open use.' }
    ]
  }
];

// Helper to generate additional 110 materially specific prototypes across all 5 divisions
const divisions: Prototype['division'][] = [
  'Signal Archaeology',
  'Perceptual Interfaces',
  'Material Acoustics',
  'Generative Systems',
  'Spatial Infrastructures'
];

const statuses: Prototype['status'][] = ['Active', 'Archived', 'Failed', 'Decommissioned', 'Public Beta'];
const leadPool = ['Dr. H. Zazie', 'Dr. Elene Vane', 'Aris Thorne', 'Dr. K. M. Osei', 'Yael Lindholm', 'T. M. Chen'];

const adjectivePool = [
  'Resonant', 'Hysteresis', 'Microtonal', 'Magneto-Acoustic', 'Granular',
  'Sub-Acoustic', 'Tactile', 'Hydro-Acoustic', 'Stochastic', 'Optical-Laser',
  'Piezo-Electric', 'Thermo-Acoustic', 'Anharmonic', 'Aperiodic', 'Spectral',
  'Waveguide', 'Algorithmic', 'Ferro-Magnetic', 'Metamaterial', 'Differential'
];

const nounPool = [
  'Transducer Matrix', 'Cavity Resonator', 'Decay Modulator', 'Impedance Horn', 'Spatial Masker',
  'Phase Synthesizer', 'Signal Archaeology Probe', 'Vibration Decoupler', 'Memory Buffer Unit', 'Acoustic Lens',
  'Pressure Wave Radiator', 'Filter Bank', 'Feedback Suppressor', 'Interferometer', 'Acoustic Cloak',
  'Spatial Array', 'Transfacial Speaker', 'Harmonic Collector', 'Subterranean Sensor', 'Perceptual Encoder'
];

const materialPool = [
  'Borosilicate glass', 'Sintered bronze mesh', 'Beryllium copper springs', 'Neodymium magnet array',
  'Synthetic ester oil', 'Graphene membrane', 'Quartz crystal oscillator', 'Vulcanized rubber damper',
  'Aerogel core', 'Machined aircraft aluminum', 'PZT ceramic piezo elements', 'High-purity bismuth rod',
  'Phosphor bronze wire', 'Pyrex fluid container', 'Open-cell acoustic foam', 'Polycarbonate waveguide'
];

function generateExtendedPrototypes(): Prototype[] {
  const extended: Prototype[] = [];
  let idCounter = 1;

  for (let i = 1; i <= 112; i++) {
    const idNum = i.toString().padStart(3, '0');
    // Skip if already in core
    if (corePrototypes.some(p => p.id === `ZIAA-PROTO-${idNum}`)) {
      continue;
    }

    const division = divisions[i % divisions.length];
    const status = statuses[i % statuses.length];
    const year = 2021 + (i % 6);
    const adj = adjectivePool[i % adjectivePool.length];
    const noun = nounPool[(i * 3) % nounPool.length];
    const title = `${adj} ${noun}`;
    const subtitle = `Experimental ${division.toLowerCase()} apparatus for spatial signal research (Unit ${idNum})`;

    const mat1 = materialPool[i % materialPool.length];
    const mat2 = materialPool[(i + 4) % materialPool.length];
    const mat3 = materialPool[(i + 7) % materialPool.length];

    const researcher1 = leadPool[i % leadPool.length];
    const researcher2 = leadPool[(i + 2) % leadPool.length];

    const presets: Prototype['audioPreset'][] = ['infrasonic', 'tape_decay', 'ferrofluid', 'granular', 'psychoacoustic', 'piezo'];
    const schematics: Prototype['schematicType'][] = ['circuit', 'waveguide', 'acoustic', 'transducer', 'generative', 'spatial'];

    extended.push({
      id: `ZIAA-PROTO-${idNum}`,
      title,
      subtitle,
      division,
      status,
      year,
      leadResearchers: [researcher1, researcher2],
      materials: [mat1, mat2, mat3],
      researchQuestion: `How does ${adj.toLowerCase()} spatial excitation affect signal stability across multi-hour experimental trials under varying acoustic load?`,
      abstract: `Prototype ${idNum} investigates ${division.toLowerCase()} methodologies utilizing a specialized assembly of ${mat1.toLowerCase()} and ${mat2.toLowerCase()}. Designed to test non-linear energy transmission in laboratory and field settings.`,
      timeline: [
        { year: `${year}-02`, event: `Assembly and initial bench calibration at ZIAA Lab ${i % 4 + 1}.` },
        { year: `${year}-08`, event: `First operational dataset logged under benchmark protocol ${idNum}-B.` },
        { year: `${year + 1 < 2026 ? year + 1 : 2026}-01`, event: `Status updated to ${status} following extensive material stress audit.` }
      ],
      schematicType: schematics[i % schematics.length],
      audioPreset: presets[i % presets.length],
      limitationsAndFailures: [
        `Thermal variance above 28°C causes 0.45% frequency drift in ${mat1.toLowerCase()} component.`,
        `Unshielded electromagnetic noise requires isolated battery power operation.`
      ],
      ethicsNotes: 'Operated under ZIAA Speculative Research Standard V4. No hazardous emissions or structural risks identified.',
      provenance: `Fabricated at ZIAA Main Annex, Catalog Entry #${idNum}.`,
      relatedPatents: [`ZIAA-PAT-${((i % 75) + 1).toString().padStart(3, '0')}`],
      relatedLogs: [`ZIAA-LOG-${year}.${(i % 12 + 1).toString().padStart(2, '0')}.15`],
      relatedPapers: [`ZIAA-PAPER-${((i % 12) + 1).toString().padStart(3, '0')}`],
      annotations: [
        {
          author: researcher1,
          date: `${year}-09-12`,
          text: `Benchmark results show strong consistency at primary harmonic peaks. Recommend long-term telemetry logging.`
        }
      ]
    });
  }

  return [...corePrototypes, ...extended];
}

export const prototypesData: Prototype[] = generateExtendedPrototypes();
