/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { FcAddDatabase } from 'react-icons/fc';
import { Steps, StepsProvider } from 'react-step-builder';

import { useStepForm } from '../../_shared/_useStepForm';
import { LeagueServiceInterface } from '../../domain/interfaces/league';
import { AddLeagueStep } from './AddLeagueStep';
import { FinishAddLeagueStep } from './FinishAddLeagueStep';
import { Toast } from '../../__core/ui/toast/Toast';
import { selectElement } from '../../_shared/helpers';
import { trans } from '../../domain/translations';

export function CreateLeagueForm({
  service,
}: {
  service: LeagueServiceInterface;
}) {
  const {
    showMultiStep,
    handleShowMultiStep,
    closeCreateLeagueFormAction,
    formState,
    setFormState,
  } = useStepForm();
  const handleSubmit = async () => {
    if (formState.name && formState.type) {
      Toast.promise(service.create(formState), {
        pending: trans('leagues.form.creating'),
        success: trans('leagues.form.created'),
      });
      const element = selectElement('.form-background');
      closeCreateLeagueFormAction(element);
    } else {
      Toast.error(trans('leagues.create.error'));
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
