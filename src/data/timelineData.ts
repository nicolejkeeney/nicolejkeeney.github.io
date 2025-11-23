import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBriefcase, faGraduationCap, faFlask } from '@fortawesome/free-solid-svg-icons';

export enum ExperienceCategory {
  Industry = 'Industry',
  Academia = 'Academia/Research',
}

export interface TimelineLink {
  type: 'project' | 'publication' | 'github' | 'documentation' | 'other';
  title: string;
  url: string;
}

export interface Position {
  title: string;
  date: string;
  description: string | string[]; // Can be a single string or array of bullet points
  links?: TimelineLink[];
}

export interface TimelineItemData {
  organization: string;
  location: string;
  dateRange: string;
  category: ExperienceCategory;
  icon: IconDefinition;
  positions: Position[];
  sharedDescription?: string | string[]; // Optional shared description (string or bullet points)
  sharedLinks?: TimelineLink[]; // Optional shared links for all positions
}

export const timelineData: TimelineItemData[] = [
  {
    organization: 'Eagle Rock Analytics',
    location: 'Sacramento, CA (remote)',
    dateRange: 'June 2022 - Present',
    category: ExperienceCategory.Industry,
    icon: faBriefcase,
    sharedDescription: 'Contributing to open source code development and data engineering to support the Cal-Adapt: Analytics Engine, a cloud-based climate data analytics platform for California\'s energy sector.\n\nLead the execution and optimization of cloud workflows on an AWS ParallelCluster for quality control and data standardization of weather data from 1400+ stations.',
    sharedLinks: [
      {
        type: 'github',
        title: 'climakitae',
        url: 'https://github.com/cal-adapt/climakitae'
      },
      {
        type: 'github',
        title: 'historical-obs-platform',
        url: 'https://github.com/Eagle-Rock-Analytics/historical-obs-platform'
      },
    ],
    positions: [
      // {
      //   title: 'Research Software Engineer',
      //   date: 'Jan 2026 - Present',
      //   description: '',
      // },
      {
        title: 'Scientific Developer (part-time)',
        date: 'May 2024 - present',
        description: '',
      },
      {
        title: 'Junior Atmospheric Scientist',
        date: 'June 2022 - Aug 2023',
        description: '',
      }
    ]
  },
  {
    organization: 'Colorado State University',
    location: 'Fort Collins, CO',
    dateRange: 'Aug 2023 - Dec 2025',
    category: ExperienceCategory.Academia,
    icon: faGraduationCap,
    positions: [
      {
        title: 'M.S. in Hydrologic Science & Engineering',
        date: 'Aug 2023 - Dec 2025',
        description: 'Thesis: A Spatially and Temporally Disaggregated 21st Century Global Flood Record for Flood Impact Analysis',
        links: [
          {
            type: 'github',
            title: 'emdat-modis-flood-dataset',
            url: 'https://github.com/nicolejkeeney/emdat-modis-flood-dataset'
          }
        ]
      }
    ]
    
  },
  {
    organization: 'University of Maryland / NASA Goddard Space Flight Center',
    location: 'Greenbelt, MD (remote)',
    dateRange: 'June 2020 - Jan 2022',
    category: ExperienceCategory.Academia,
    icon: faFlask,
    sharedDescription: 'Contributed to the development of a cloud-optimized Python toolkit to streamline polar climate model validation using satellite data. Project emphasized interactive plotting techniques and data management with Google Cloud.\n\nBuilt an interactive Jupyter Book (a collection of Python notebooks) to evaluate drivers of winter Arctic sea ice growth using data from NASA\'s ICESat-2 satellite. The project is still actively maintained by my awesome research advisor, Alek.',
    sharedLinks: [
      {
        type: 'project',
        title: 'Arctic Sea Ice Jupyter Book',
        url: 'https://www.icesat-2-sea-ice-state.info/content/0_home.html'
      },
      {
        type: 'publication',
        title: 'Petty et al. (2023) - The Cryosphere',
        url: 'https://doi.org/10.5194/tc-17-127-2023'
      },
      {
        type: 'publication',
        title: 'Conference Abstract',
        url: 'https://ui.adsabs.harvard.edu/abs/2021AGUFM.C51A..04K/abstract'
      }
    ],
    positions: [
      {
        title: 'Faculty Research Assistant (half-time)',
        date: 'Jan 2021 - Jan 2022',
        description: '',
      },
      {
        title: 'NASA Summer Intern',
        date: 'June 2020 - Aug 2020',
        description: '',
      }
    ]
  },
  {
    organization: 'UC Berkeley School of Public Health',
    location: 'Berkeley, CA',
    dateRange: 'Oct 2020 - Feb 2022',
    category: ExperienceCategory.Academia,
    icon: faFlask,
    sharedDescription: 'Developed and implemented Python and R workflows for environmental data analysis and processing to support public health research projects.\n\nCalibrated a wind erosion model in California using satellite-derived vegetation data.',
    sharedLinks: [
      {
        type: 'publication',
        title: 'Weaver et al. (2025) - EHP',
        url: 'https://doi.org/10.1289/EHP13875'
      },
      {
        type: 'github',
        title: 'wind_erosion_model_calibration',
        url: 'https://github.com/nicolejkeeney/wind_erosion_model_calibration'
      },
    ],
    positions: [
      {
        title: 'Junior Specialist (half-time)',
        date: 'Jan 2021 - Feb 2022',
        description: '',
      },
      {
        title: 'Undergraduate Student Researcher',
        date: 'Oct 2020 - Dec 2020',
        description: '',
      }
    ]
  },
  {
    organization: 'University of California, Berkeley',
    location: 'Berkeley, CA',
    dateRange: 'Aug 2017 - Dec 2020',
    category: ExperienceCategory.Academia,
    icon: faGraduationCap,
    positions: [
      {
        title: 'B.A. in Atmospheric Science',
        date: 'Aug 2017 - Dec 2020',
        description: 'Senior thesis: Evaluation of a simple parameterization of the Evaporative Stress Index using FLUXNET data and a planetary boundary layer model (advised by Dr. Dennis Baldocchi)',
        links: [
          {
            type: 'publication',
            title: 'Baldocchi et al. (2021) - Advances in Water Resources',
            url: 'https://doi.org/10.1016/j.advwatres.2021.104100'
          }
        ]
      }
    ]
  },
  {
    organization: 'Berkeley Air Monitoring Group',
    location: 'Berkeley, CA',
    dateRange: 'Mar 2019 - Sep 2019',
    category: ExperienceCategory.Industry,
    icon: faBriefcase,
    positions: [
      {
        title: 'Air Quality Intern',
        date: 'Mar 2019 - Sep 2019',
        description: 'My very first job in Atmospheric Sciences! I did all sorts of random intern things: calibrating air quality monitors, performing literature reviews, and analyzing qualitative survey data for public health projects focused on indoor air pollution from rudimentary cookstoves.',
      }
    ]
  },
];
