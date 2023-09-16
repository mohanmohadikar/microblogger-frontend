export const icons = [
  {
    name: 'app-icon',
    viewWidth: 124,
    viewHeight: 124,
    paths: [
      'M17.89 0h88.9c8.85 0 16.1 7.24 16.1 16.1v90.68c0 8.85-7.24 16.1-16.1 16.1H16.1c-8.85 0-16.1-7.24-16.1-16.1v-88.9C0 8.05 8.05 0 17.89 0zm9.39 31.06h24.77l9.43 36.97 9.46-36.97H95.6v60.76H80.24V45.5L68.38 91.82H54.47L42.64 45.5v46.32H27.28V31.06z'
    ],
    pathColors: ['#000000']
  }
];

export const iconNames = icons.map((x) => x.name);
export const iconsByName = (name: string) => icons.find((x) => x.name === name);
