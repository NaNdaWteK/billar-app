import { MouseEventHandler } from 'react';
import { trans } from '../domain/translations';

export function Navigation(props: {
  prev: MouseEventHandler<HTMLButtonElement> | undefined;
  next: MouseEventHandler<HTMLButtonElement> | undefined;
  hasPrev: boolean;
  hasNext: boolean;
  handleSubmit?: () => void;
}) {
  const prev = { display: !props.hasPrev ? 'none' : 'inline-block' };
  const next = { display: !props.hasNext ? 'none' : 'inline-block' };
  const finish = { display: !props.hasNext ? 'inline-block' : 'none' };

  return (
    <div className="navigation">
      <span style={prev}>
        <button onClick={props.prev} style={{ marginRight: 10 }}>
          {trans('leagues.create.previous')}
        </button>
      </span>
      <span style={next}>
        <button onClick={props.next}>{trans('leagues.create.next')}</button>
      </span>
      <span style={finish}>
        <button className="finish" onClick={props.handleSubmit}>
          {trans('leagues.create.button')}
        </button>
      </span>
    </div>
  );
}
