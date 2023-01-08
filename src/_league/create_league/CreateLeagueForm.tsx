/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { FcAddDatabase } from 'react-icons/fc';
import { Steps, StepsProvider } from 'react-step-builder';

import { useStepForm } from '../../_shared/_useStepForm';
import { LeagueServiceInterface } from '../../domain/interfaces/league';
import { AddLeagueStep } from './AddLeagueStep';
import { FinishAddLeagueStep } from './FinishAddLeagueStep';

export function CreateLeagueForm({
  service,
}: {
  service: LeagueServiceInterface;
}) {
  const { showMultiStep, handleShowMultiStep, formState, setFormState } =
    useStepForm();
  const handleSubmit = async () => {
    if (formState.name && formState.type) {
      if (formState.type === 'default') {
        formState.type = 'Bola 8';
      }
      const result = await service.create(formState);
      console.error(result);
    }
  };

  return (
    <>
      <span className="add-form">
        <FcAddDatabase onClick={handleShowMultiStep} />
      </span>
      {showMultiStep ? (
        <section className="form create-league-form">
          <StepsProvider>
            <Steps>
              <AddLeagueStep
                formData={formState}
                updateFormData={setFormState}
              />
              <FinishAddLeagueStep
                formData={formState}
                handleSubmit={handleSubmit}
              />
            </Steps>
          </StepsProvider>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}
