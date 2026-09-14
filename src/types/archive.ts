export type Division =
  | 'Signal Archaeology'
  | 'Perceptual Interfaces'
  | 'Material Acoustics'
  | 'Generative Systems'
  | 'Spatial Infrastructures';

export type PrototypeStatus =
  | 'Active'
  | 'Archived'
  | 'Failed'
  | 'Decommissioned'
  | 'Public Beta';

export type PatentStatus =
  | 'Public Speculation'
  | 'Defensive Filing'
  | 'Closed Prototype'
  | 'Expired Inquiry';

export interface Prototype {
  id: string; // e.g. ZIAA-PROTO-084
  title: string;
  subtitle: string;
  division: Division;
  status: PrototypeStatus;
  year: number;
  leadResearchers: string[];
  materials: string[];
  researchQuestion: string;
  abstract: string;
  timeline: { year: string; event: string }[];
  schematicType: 'circuit' | 'waveguide' | 'acoustic' | 'transducer' | 'generative' | 'spatial';
  audioPreset?: 'infrasonic' | 'tape_decay' | 'ferrofluid' | 'granular' | 'psychoacoustic' | 'piezo';
  limitationsAndFailures: string[];
  ethicsNotes: string;
  provenance: string;
  relatedPatents: string[]; // e.g. ZIAA-PAT-031
  relatedLogs: string[]; // e.g. ZIAA-LOG-2024.11
  relatedPapers: string[]; // e.g. ZIAA-PAPER-004
  annotations: { author: string; date: string; text: string }[];
}

export interface SpeculativePatent {
  id: string; // e.g. ZIAA-PAT-031
  title: string;
  filedDate: string;
  status: PatentStatus;
  leadInventor: string;
  abstract: string;
  claims: string[];
  priorArt: string[];
  knownFailureModes: string[];
  materialsConstraints: string[];
  diagramType: 'patent_flow' | 'coil_assembly' | 'acoustic_chamber' | 'phase_matrix';
  relatedPrototypeId?: string;
}

export interface LabLog {
  id: string; // e.g. ZIAA-LOG-2024.11.04
  title: string;
  date: string;
  author: string;
  category: 'Laboratory Log' | 'Field Measurement' | 'Transducer Stress' | 'Signal Scan' | 'Protocol Failure' | 'Listening Post';
  location: string;
  summary: string;
  content: string;
  decibelReadings?: string;
  spectralData?: string;
  tags: string[];
  relatedPrototypes?: string[];
}

export interface TechnicalPaper {
  id: string; // e.g. ZIAA-PAPER-004
  title: string;
  subtitle: string;
  authors: string[];
  publishedDate: string;
  abstract: string;
  sections: { title: string; body: string }[];
  bibtex: string;
  doi: string;
  keywords: string[];
  downloadsCount: number;
}

export interface Person {
  id: string;
  name: string;
  role: string;
  division?: Division;
  yearsActive: string;
  bio: string;
  researchFocus: string[];
  selectedPrototypes: string[];
  selectedPapers: string[];
  email: string;
}

export interface Exhibition {
  id: string;
  title: string;
  venue: string;
  location: string;
  dates: string;
  description: string;
  installations: string[];
  visitorsEstimate: number;
  documentationUrls: string[];
}

export interface Milestone {
  year: number;
  date: string;
  title: string;
  description: string;
  category: 'Breakthrough' | 'Institutional' | 'Decommission' | 'Symposium' | 'Disaster';
  catalogRef?: string;
}
