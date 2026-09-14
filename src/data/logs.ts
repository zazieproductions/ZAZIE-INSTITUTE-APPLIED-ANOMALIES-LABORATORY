import { LabLog } from '../types/archive';

const coreLogs: LabLog[] = [
  {
    id: 'ZIAA-LOG-2024.02.14',
    title: 'Ferrofluid Cavity Resonator: First Microtonal Peak Extraction',
    date: '2024-02-14',
    author: 'Dr. H. Zazie',
    category: 'Laboratory Log',
    location: 'ZIAA Main Vault B, Hudson Valley',
    summary: 'Observed spontaneous 8.4 Hz to 11.2 Hz non-linear harmonic splitting under 0.8 Tesla magnetic bias in Prototype 084.',
    content: 'At 14:22 UTC, magnetic flux across the borosilicate glass chamber was increased to 0.84 T while driving the PZT transducer with a 7.0 Hz sine wave at 90 dB SPL. The suspension fluid exhibited localized standing wave ridges. The laser displacement sensor captured a secondary harmonic peak at 11.2 Hz that was not present in the input excitation signal.',
    decibelReadings: 'Input: 90 dB SPL @ 7.0 Hz | Output Peak: 74 dB SPL @ 11.2 Hz',
    spectralData: 'FFT shows primary peak at 7.0 Hz (-6dB), sub-harmonic at 3.5 Hz (-22dB), non-linear resonance at 11.2 Hz (-12dB).',
    tags: ['ferrofluid', 'sub-acoustic', 'resonance', 'non-linear'],
    relatedPrototypes: ['ZIAA-PROTO-084']
  },
  {
    id: 'ZIAA-LOG-2024.06.28',
    title: 'Coil Overheating Anomaly in Magnetic Resonator Rig',
    date: '2024-06-28',
    author: 'Aris Thorne',
    category: 'Transducer Stress',
    location: 'ZIAA Electrical Workshop',
    summary: 'DC bias coil reached 78°C after 52 minutes of continuous operation; duty cycle protocol established.',
    content: 'During continuous 1.2 Tesla hold test, the copper winding temperature rose rapidly from 22°C ambient to 78°C. Thermal expansion of the coil bobbin created micro-friction against the glass housing, producing a faint mechanical 120 Hz buzz. Current cut-off interlock triggered successfully. New protocol: maximum continuous run capped at 45 minutes followed by 20 minutes force-air cooling.',
    decibelReadings: 'Ambient noise floor: 32 dBA | Mechanical buzz peak: 48 dBA @ 120 Hz',
    spectralData: 'Power line harmonic hum spikes at 60 Hz, 120 Hz, 180 Hz during thermal expansion phase.',
    tags: ['thermal', 'failure', 'electromagnet', 'safety'],
    relatedPrototypes: ['ZIAA-PROTO-084']
  },
  {
    id: 'ZIAA-LOG-2023.04.12',
    title: 'Subterranean Waveguide Field Log: 400km Quarry Blast Signal',
    date: '2023-04-12',
    author: 'Yael Lindholm',
    category: 'Field Measurement',
    location: 'Hudson Valley Subterranean Site 04',
    summary: 'Deep horn array recorded micro-seismic primary and secondary wave arrivals from a distant commercial quarry explosion.',
    content: 'The passive subterranean horn array detected low-frequency seismic ground displacement starting at 09:14:02 UTC. The P-wave arrived 42 seconds before the S-wave arrival. The optical displacement sensor tracked diaphragm flexure down to 0.14 Hz with zero clipping. Signal matches USGS regional seismic catalog event #40291.',
    decibelReadings: 'Peak displacement: 14.2 micrometers | Acoustic conversion: 68 dB SPL @ 1.8 Hz',
    spectralData: 'Energy concentrated in 0.5 Hz – 4.2 Hz band.',
    tags: ['seismic', 'waveguide', 'infrasound', 'field-report'],
    relatedPrototypes: ['ZIAA-PROTO-041']
  },
  {
    id: 'ZIAA-LOG-2022.05.11',
    title: 'Tape Hysteresis Scrubber: Head Clogging & Project Archive Directive',
    date: '2022-05-11',
    author: 'T. M. Chen',
    category: 'Protocol Failure',
    location: 'ZIAA Signal Archaeology Bay',
    summary: 'Sapphire friction pin wear resulted in excessive oxide shedding; decision made to archive Prototype 012.',
    content: 'After pass #682 in the 1,000-pass tape erosion protocol, high-frequency output dropped by 28 dB. Inspection revealed a dense layer of magnetic iron-oxide dust compacted into the sapphire pin guides and capstan roller. Cleaning restored signal briefly, but physical tape width had thinned from 6.35mm to 6.12mm. Due to media destruction risks, active development on Proto-012 is officially suspended.',
    decibelReadings: 'High frequency drop: -28 dB @ 10 kHz | Noise floor rise: +14 dB broad-spectrum hiss',
    spectralData: 'Pink noise spectrum shift toward low-mid frequencies below 800 Hz.',
    tags: ['magnetic-tape', 'archived', 'oxide-shedding', 'wear-test'],
    relatedPrototypes: ['ZIAA-PROTO-012']
  },
  {
    id: 'ZIAA-LOG-2025.01.20',
    title: 'Parametric Ultrasonic Difference-Tone Auditory Perception Audit',
    date: '2025-01-20',
    author: 'Dr. K. M. Osei',
    category: 'Laboratory Log',
    location: 'ZIAA Perceptual Testing Suite',
    summary: '12 test subjects evaluated localized 880 Hz phantom tone creation via 40 kHz ultrasonic beam intersection.',
    content: 'Subjects were placed at the intersection point of two 40 kHz ultrasound emitters (Carrier A: 40,000 Hz, Carrier B: 40,880 Hz). 100% of participants confirmed hearing an 880 Hz pure tone perceived as originating inside their cranial vault. Microphones placed 20cm away in the room measured ambient sound levels below 34 dBA. Confirms internal ear-canal intermodulation distortion product generation.',
    decibelReadings: 'Room ambient: 32 dBA | Internal perceived tone: ~65 dBA equivalent | Ultrasonic beam SPL: 110 dB SPL @ 40 kHz',
    spectralData: 'Acoustic microphone FFT in ambient room reveals zero 880 Hz energy; 40 kHz carrier spikes present.',
    tags: ['ultrasonic', 'difference-tone', 'psychoacoustics', 'perception'],
    relatedPrototypes: ['ZIAA-PROTO-099']
  }
];

function generateExtendedLogs(): LabLog[] {
  const extended: LabLog[] = [];
  const authors = ['Dr. H. Zazie', 'Dr. Elene Vane', 'Aris Thorne', 'Dr. K. M. Osei', 'Yael Lindholm', 'T. M. Chen'];
  const categories: LabLog['category'][] = [
    'Laboratory Log', 'Field Measurement', 'Transducer Stress',
    'Signal Scan', 'Protocol Failure', 'Listening Post'
  ];
  const locations = [
    'ZIAA Main Vault A, Hudson Valley',
    'ZIAA Signal Archaeology Bay',
    'Reykjavík Acoustic Vault Site',
    'Berlin Signal Bunker Subterranean Lab',
    'Kyoto Subterranean Well Field Post',
    'ZIAA Perceptual Testing Suite'
  ];

  const tagGroups = [
    ['infrasound', 'seismic', 'waveguide'],
    ['ferrofluid', 'viscosity', 'magnetism'],
    ['magnetic-tape', 'degradation', 'hysteresis'],
    ['psychoacoustics', 'difference-tone', 'auditory'],
    ['granular', 'dsp', 'buffer-scrub'],
    ['piezoelectric', 'timber', 'resonance'],
    ['plasma', 'ozone', 'impulse-response'],
    ['metamaterial', 'helmholtz', 'absorption']
  ];

  let logCount = 1;

  for (let year = 2021; year <= 2026; year++) {
    for (let month = 1; month <= 12; month++) {
      // 3-4 logs per month to reach ~250+ entries
      const logsThisMonth = (year === 2026 && month > 8) ? 1 : 4;
      for (let dayIdx = 1; dayIdx <= logsThisMonth; dayIdx++) {
        logCount++;
        const day = (dayIdx * 7 % 28 + 1).toString().padStart(2, '0');
        const mStr = month.toString().padStart(2, '0');
        const id = `ZIAA-LOG-${year}.${mStr}.${day}`;

        // Skip if ID already in core
        if (coreLogs.some(l => l.id === id)) continue;

        const author = authors[(year + month + dayIdx) % authors.length];
        const category = categories[(month + dayIdx) % categories.length];
        const location = locations[(year + dayIdx) % locations.length];
        const protoId = `ZIAA-PROTO-${(logCount % 120 + 1).toString().padStart(3, '0')}`;
        const tags = tagGroups[logCount % tagGroups.length];

        extended.push({
          id,
          title: `Telemetry Audit ${id}: ${category} at ${location.split(',')[0]}`,
          date: `${year}-${mStr}-${day}`,
          author,
          category,
          location,
          summary: `Systematic observation of acoustic signal properties and hardware calibration stability for prototype reference ${protoId}.`,
          content: `On ${year}-${mStr}-${day} at ${10 + (dayIdx % 10)}:00 UTC, a baseline acoustic audit was conducted at ${location}. Equipment operated under Standard Telemetry Protocol ${logCount}. Primary signals remained within expected margin (+/- 1.4 dB). Sensor calibration verified prior to session start.`,
          decibelReadings: `Ambient: ${30 + (dayIdx % 10)} dBA | Peak Signal: ${65 + (dayIdx * 3 % 40)} dB SPL`,
          spectralData: `Harmonic peak analysis shows primary spectral density between ${20 * dayIdx} Hz and ${800 * dayIdx} Hz.`,
          tags,
          relatedPrototypes: [protoId]
        });
      }
    }
  }

  return [...coreLogs, ...extended];
}

export const logsData: LabLog[] = generateExtendedLogs();
