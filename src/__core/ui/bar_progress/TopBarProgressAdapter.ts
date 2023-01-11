import TopBarProgress from 'react-topbar-progress-indicator';

interface BarProgressInterface {
  config(options: object): unknown;
}

export class TopBarProgressAdapter implements BarProgressInterface {
  config(options: object) {
    TopBarProgress.config(options);
    return TopBarProgress;
  }
}
