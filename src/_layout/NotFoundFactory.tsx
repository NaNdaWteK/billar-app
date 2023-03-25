import { trans } from '../domain/translations';

export class NotFoundFactory {
  static create(): React.ReactElement {
    return (
      <>
        <h1>{trans('page.not.found')}</h1>
      </>
    );
  }
}
