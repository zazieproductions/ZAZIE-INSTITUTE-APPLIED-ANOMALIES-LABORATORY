import { TechnicalPaper } from '../types/archive';

export const papersData: TechnicalPaper[] = [
  {
    id: 'ZIAA-PAPER-001',
    title: 'Hysteresis & Material Erosion in Analog Magnetic Recording Media',
    subtitle: 'A Quantitative Study of Signal Loss and Noise Floor Emergence Across 1,000 Continuous Abrasion Cycles',
    authors: ['Dr. Elene Vane', 'T. M. Chen'],
    publishedDate: '2022-06-15',
    abstract: 'This paper presents quantitative measurements of magnetic tape oxide erosion under controlled mechanical friction. Using high-resolution surface profilometry and spectral FFT analysis, we map the progressive degradation of gamma-ferric oxide particles across 1,000 passes, detailing the non-linear emergence of stochastic background noise and phantom resonant frequencies.',
    sections: [
      {
        title: '1. Introduction & Historical Context',
        body: 'Magnetic recording tape relies on the uniform dispersion of ferromagnetic particles suspended in a polymeric binder. While previous acoustic research has focused on preserving tape media longevity, this study investigates the acoustic properties of deliberate, controlled media erosion as a generative sound source.'
      },
      {
        title: '2. Experimental Methodology & Mechanical Setup',
        body: 'A modified open-reel transport mechanism (ZIAA Prototype 012) was equipped with polished sapphire contact pins maintained at temperatures ranging from 20°C to 120°C. Standard BASF 911 tape stock was subjected to 1,000 continuous loops while recording simultaneous 1 kHz sine tone and broad-spectrum pink noise.'
      },
      {
        title: '3. Spectral Analysis of Oxide Shedding',
        body: 'Initial signal degradation manifests as a sharp attenuation of frequencies above 8 kHz within the first 50 passes (-0.4 dB per pass). Beyond 300 passes, physical particle shedding generates localized pressure variations at the tape head gap, resulting in narrow-band noise spikes at 3.4 kHz and 6.8 kHz.'
      },
      {
        title: '4. Conclusion & Speculative Applications',
        body: 'Controlled tape degradation provides a deterministic model for physical memory decay in audio archives. The observed phantom frequencies offer new material frameworks for signal archaeology and generative sound synthesis.'
      }
    ],
    bibtex: `@article{vane2022hysteresis,
  title={Hysteresis & Material Erosion in Analog Magnetic Recording Media},
  author={Vane, Elene and Chen, T. M.},
  journal={Zazie Institute Technical Monograph Series},
  volume={1},
  number={4},
  pages={12--28},
  year={2022},
  publisher={Zazie Productions LLC}
}`,
    doi: '10.5281/zenodo.ziaa.2022.001',
    keywords: ['magnetic tape', 'hysteresis', 'signal archaeology', 'oxide shedding', 'spectral analysis'],
    downloadsCount: 1420
  },
  {
    id: 'ZIAA-PAPER-003',
    title: 'Magnetorheological Fluid Damping in Low-Frequency Cavity Resonators',
    subtitle: 'Non-Linear Harmonic Coupling Below 20 Hz Under Variable Magnetic Bias',
    authors: ['Dr. H. Zazie', 'Aris Thorne'],
    publishedDate: '2024-04-10',
    abstract: 'We examine the sub-acoustic behavior of iron-oxide nanoparticle suspensions (ferrofluids) subjected to static and dynamic magnetic fields. We demonstrate that variable magnetic flux biasing allows dynamic tuning of fluid shear yield stress, enabling non-linear harmonic transduction of sub-audible mechanical vibrations into audible microtonal acoustics.',
    sections: [
      {
        title: '1. Physical Properties of Suspended Fe3O4 Nanoparticles',
        body: 'Ferrofluids exhibit superparamagnetic behavior when nanoparticle diameters remain below 10 nanometers. In the absence of an applied magnetic field, magnetic moments are randomly oriented. Application of a DC magnetic bias aligns dipole moments, dramatically increasing effective fluid viscosity.'
      },
      {
        title: '2. Cavity Geometry & Transducer Coupling',
        body: 'A 2.4-liter borosilicate glass cylinder was fitted with a bottom-mounted PZT-8 ceramic transducer and surrounded by a 1,200-turn copper coil. Laser displacement interferometry was used to track surface standing wave modes under 5 Hz to 30 Hz excitation.'
      },
      {
        title: '3. Observation of Non-Linear Harmonic Splitting',
        body: 'At magnetic flux densities exceeding 0.75 Tesla, the fundamental resonant frequency split into distinct sidebands (+/- 3.2 Hz). This phenomenon is attributed to localized magnetic chaining of nanoparticles altering spatial wave velocity.'
      }
    ],
    bibtex: `@article{zazie2024ferrofluid,
  title={Magnetorheological Fluid Damping in Low-Frequency Cavity Resonators},
  author={Zazie, H. and Thorne, Aris},
  journal={Zazie Institute Technical Monograph Series},
  volume={3},
  number={1},
  pages={45--62},
  year={2024},
  publisher={Zazie Productions LLC}
}`,
    doi: '10.5281/zenodo.ziaa.2024.003',
    keywords: ['ferrofluid', 'magnetorheology', 'infrasound', 'cavity resonator', 'non-linear dynamics'],
    downloadsCount: 2180
  },
  {
    id: 'ZIAA-PAPER-005',
    title: 'Subterranean Impedance Matching for Geophonic Signal Capture',
    subtitle: 'Passive Waveguide Design for Long-Wavelength Tectonic & Barometric Monitoring',
    authors: ['Aris Thorne', 'Yael Lindholm'],
    publishedDate: '2023-11-20',
    abstract: 'Geophonic soundscapes contain rich low-frequency acoustic energy below human hearing thresholds. This paper presents the design, installation, and field evaluation of a 4-meter vulcanized rubber subterranean horn deployed in Hudson Valley bedrock, analyzing passive acoustic impedance conversion from rock substrate to optical displacement diaphragm.',
    sections: [
      {
        title: '1. Acoustic Impedance Mismatch at Ground-Air Boundaries',
        body: 'The acoustic impedance of solid granitic bedrock (~1.5 x 10^7 Pa s/m) is roughly five orders of magnitude higher than ambient air (~415 Pa s/m). Direct air microphones fail to capture earth-borne acoustic waves due to near-total reflection at the soil interface.'
      },
      {
        title: '2. Subterranean Horn Geometry & Diaphragm Optics',
        body: 'By burying a heavy vulcanized rubber horn filled with dense gas mixtures and mechanically coupling its base to bedrock fractures, wave velocity transitions smoothly. Diaphragm deflection is measured using an optical laser interferometer capable of sub-nanometer resolution.'
      },
      {
        title: '3. Field Results & Seismic Event Correlation',
        body: 'Over a 6-month observation period, the subterranean array recorded regional freight rail propagation, quarry explosions, and micro-barometric atmospheric pressure waves with zero electronic active preamp distortion.'
      }
    ],
    bibtex: `@article{thorne2023subterranean,
  title={Subterranean Impedance Matching for Geophonic Signal Capture},
  author={Thorne, Aris and Lindholm, Yael},
  journal={Zazie Institute Technical Monograph Series},
  volume={2},
  number={8},
  pages={88--104},
  year={2023},
  publisher={Zazie Productions LLC}
}`,
    doi: '10.5281/zenodo.ziaa.2023.005',
    keywords: ['geophonics', 'waveguide', 'infrasound', 'interferometry', 'impedance matching'],
    downloadsCount: 1890
  },
  {
    id: 'ZIAA-PAPER-008',
    title: 'Cochlear Intermodulation via Intersecting Ultrasonic Beams',
    subtitle: 'Psychoacoustic Spatial Localization and Safety Parameters of Modulated Parametric Ultrasound',
    authors: ['Dr. K. M. Osei', 'Dr. H. Zazie'],
    publishedDate: '2025-03-02',
    abstract: 'Parametric acoustic emitters utilize air non-linearity to project directional sound. This paper evaluates dual-beam ultrasonic intersection at 40 kHz, demonstrating that difference tones can be generated strictly inside the human auditory canal without creating audible sound in the surrounding room, and establishes exposure guidelines for safe public installation.',
    sections: [
      {
        title: '1. Fundamentals of Non-Linear Parametric Demodulation',
        body: 'When two intense ultrasonic acoustic waves (SPL > 100 dB at 40 kHz) overlap, the non-linear equation of state for air generates sum and difference frequencies equal to f1 + f2 and |f1 - f2|.'
      },
      {
        title: '2. Cranial Localization & Soft Palate Resonance',
        body: 'Subjective evaluation trials reveal that listeners perceive difference-tone sound sources as originating within the center of the skull rather than from external space, creating a uniquely intimate psychoacoustic spatial effect.'
      },
      {
        title: '3. Dosimetry & Ultrasonic Safety Thresholds',
        body: 'To prevent potential auditory fatigue or thermal effects in skin tissue, peak ultrasonic pressure at the ear plane must not exceed 110 dB SPL (which corresponds to an audible difference tone level of ~68 dBA).'
      }
    ],
    bibtex: `@article{osei2025cochlear,
  title={Cochlear Intermodulation via Intersecting Ultrasonic Beams},
  author={Osei, K. M. and Zazie, H.},
  journal={Zazie Institute Technical Monograph Series},
  volume={4},
  number={2},
  pages={01--19},
  year={2025},
  publisher={Zazie Productions LLC}
}`,
    doi: '10.5281/zenodo.ziaa.2025.008',
    keywords: ['ultrasound', 'parametric audio', 'psychoacoustics', 'difference tones', 'sensory localization'],
    downloadsCount: 3100
  }
];
