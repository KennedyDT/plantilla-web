import { PaletteMode } from '@mui/material';

export const lightPalette = {
  mode: 'light' as PaletteMode,
  // divider: '#E7EBF0',
  text: {
    primary: '#1A2027',
    secondary: '#3E5060',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
  grey: {
    '50': '#F3F6F9',
    '100': '#E7EBF0',
    '200': '#E0E3E7',
    '300': '#CDD2D7',
    '400': '#B2BAC2',
    '500': '#A0AAB4',
    '600': '#6F7E8C',
    '700': '#3E5060',
    '800': '#2D3843',
    '900': '#1A2027',
    main: '#E7EBF0',
    contrastText: '#6F7E8C',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  },
  error: {
    '50': '#FFF0F1',
    '100': '#FFDBDE',
    '200': '#FFBDC2',
    '300': '#FF99A2',
    '400': '#FF7A86',
    '500': '#FF505F',
    '600': '#EB0014',
    '700': '#C70011',
    '800': '#94000D',
    '900': '#570007',
    main: '#EB0014',
    light: '#FF99A2',
    dark: '#C70011',
    contrastText: '#fff',
  },
  success: {
    '50': '#E9FBF0',
    '100': '#C6F6D9',
    '200': '#9AEFBC',
    '300': '#6AE79C',
    '400': '#3EE07F',
    '500': '#21CC66',
    '600': '#1DB45A',
    '700': '#1AA251',
    '800': '#178D46',
    '900': '#0F5C2E',
    main: '#1AA251',
    light: '#6AE79C',
    dark: '#1AA251',
    contrastText: '#fff',
  },
  warning: {
    '50': '#FFF9EB',
    '100': '#FFF3C1',
    '200': '#FFECA1',
    '300': '#FFDC48',
    '400': '#F4C000',
    '500': '#DEA500',
    '600': '#D18E00',
    '700': '#AB6800',
    '800': '#8C5800',
    '900': '#5A3600',
    main: '#DEA500',
    light: '#FFDC48',
    dark: '#AB6800',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  info: {
    main: '#0288d1',
    light: '#03a9f4',
    dark: '#01579b',
    contrastText: '#fff',
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
  background: {
    paper: '#F5F5F5',
    default: '#F5F5F5',
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
};
