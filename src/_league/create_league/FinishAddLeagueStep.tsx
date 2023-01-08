/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useSteps } from 'react-step-builder';

import { Navigation } from '../../_shared/Navigation';
import { StepProps } from '../../domain/interfaces/forms';
import { trans } from '../../domain/translations';

export function FinishAddLeagueStep<T extends { [key: string]: string }>({
  formData,
  handleSubmit,
}: StepProps<T>) {
  const { next, prev, hasPrev, hasNext } = useSteps();
  console.log(formData);
  return (
    <div>
      <h3>{trans('leagues.form.creating')}</h3>
      <article className="finish-results">
        <p>{trans('leagues.create.resume.p1')}</p>
        <p>{formData.name}</p>
        <p>
          {trans('leagues.create.resume.p2')}
          {!formData.type || formData.type === 'default'
            ? 'Bola 8'
            : formData.type}
        </p>
      </article>
      <Navigation
        prev={prev}
        next={next}
        hasPrev={hasPrev}
        hasNext={hasNext}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
