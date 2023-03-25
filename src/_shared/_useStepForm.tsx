/* eslint-disable @typescript-eslint/ban-types */
import { useState } from 'react';
import { hideElement, selectElement, showElement } from './helpers';

export function useStepForm(): {
  showMultiStep: boolean;
  handleShowMultiStep: () => void;
  formState: { [key: string]: string };
  setFormState: React.Dispatch<React.SetStateAction<{}>>;
  closeCreateLeagueFormAction: (element: HTMLElement) => void;
  } {
  const [showMultiStep, setShowMultiStep] = useState(false);

  function handleShowMultiStep() {
    const element = selectElement('.form-background');
    showElement(element);
    closeCreateLeagueForm(element);
    setShowMultiStep(true);
  }
  const [formState, setFormState] = useState({});

  return {
    showMultiStep,
    handleShowMultiStep,
    formState,
    setFormState,
    closeCreateLeagueFormAction,
  };

  function closeCreateLeagueForm(element: HTMLElement) {
    element.addEventListener('click', () => {
      closeCreateLeagueFormAction(element);
    });
  }

  function closeCreateLeagueFormAction(element: HTMLElement) {
    hideElement(element);
    setShowMultiStep(false);
  }
}
