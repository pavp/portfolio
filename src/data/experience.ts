export interface Role {
  company: string;
  period: string;
  location: string;
  current?: boolean;
}

export const topRoles: Role[] = [
  {
    company: 'Nextlane',
    period: '2024–Present',
    location: 'Madrid, Spain',
    current: true,
  },
  {
    company: 'Capitole Consulting',
    period: '2022–2023',
    location: 'Madrid, Spain',
  },
  {
    company: 'Making Sense',
    period: '2021–2023',
    location: 'Remote',
  },
  {
    company: 'Novacomp',
    period: '2021',
    location: 'Caracas, Venezuela',
  },
  {
    company: 'URIJI JAMI',
    period: '2017–2020',
    location: 'Caracas, Venezuela',
  },
];

export const earlierRoles: Role[] = [
  {
    company: 'Fancision',
    period: '2020–2021',
    location: 'Remote',
  },
  {
    company: '300 Dev',
    period: '2020–2021',
    location: 'Caracas',
  },
  {
    company: 'Teravision Technologies',
    period: '2020',
    location: 'Caracas',
  },
];
