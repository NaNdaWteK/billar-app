/* eslint-disable @typescript-eslint/ban-types */
import { useState } from 'react';

export function useStepForm(): {
	showMultiStep: boolean;
	handleShowMultiStep: () => void;
	formState: { [key: string]: string };
	setFormState: React.Dispatch<React.SetStateAction<{}>>;
	} {
  const [showMultiStep, setShowMultiStep] = useState(false);
  function handleShowMultiStep() {
    const element = document.querySelectorAll('.form-background')[0] as HTMLDivElement;
    element.style.setProperty('visibility', 'visible');
    element.addEventListener('click', () => {
      element.style.setProperty('visibility', 'hidden');
      setShowMultiStep(false);
    });
    setShowMultiStep(true);
  }
  const [formState, setFormState] = useState({});

  return { showMultiStep, handleShowMultiStep, formState, setFormState };
}
