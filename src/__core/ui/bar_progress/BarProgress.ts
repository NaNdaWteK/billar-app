import { TopBarProgressAdapter } from './TopBarProgressAdapter';
const options = {
  barColors: {
    '0': '#fff',
    '1.0': '#ff9c9c',
  },
  shadowBlur: 5,
};
export const BarProgress = new TopBarProgressAdapter().config(options);
