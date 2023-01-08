export type StepProps<T> = {
  formData: T;
  updateFormData?: (newFormData: T) => void;
  handleSubmit?: () => void;
};
