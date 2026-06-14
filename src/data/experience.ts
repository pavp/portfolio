export interface Role {
  company: string;
  period: string;
  location: string;
  current?: boolean;
}

export const topRoles: Role[] = [
  {
    company: 'Nextlane',
    period: 'Jan 2024–Present',
    location: 'Madrid, Spain',
    current: true,
  },
  {
    company: 'Capitole Consulting',
    period: 'Oct 2022–Sep 2023',
    location: 'Madrid, Spain',
  },
  {
    company: 'Making Sense',
    period: 'Dec 2021–May 2023',
    location: 'Remote',
  },
  {
    company: 'Novacomp',
    period: 'Jun 2021–Dec 2021',
    location: 'Caracas, Venezuela',
  },
  {
    company: 'URIJI JAMI',
    period: 'Jun 2017–Jul 2020',
    location: 'Caracas, Venezuela',
  },
];

export const earlierRoles: Role[] = [
  {
    company: 'Fancision',
    period: 'Oct 2020–May 2021',
    location: 'Remote',
  },
  {
    company: '300 Dev',
    period: 'Sep 2020–May 2021',
    location: 'Caracas',
  },
  {
    company: 'Teravision Technologies',
    period: 'Apr 2020–Sep 2020',
    location: 'Caracas',
  },
];
