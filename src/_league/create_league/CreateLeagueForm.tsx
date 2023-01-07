/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { FcAddDatabase } from "react-icons/fc";
import { Steps, StepsProvider } from "react-step-builder";

import { useStepForm } from "../../_shared/_useStepForm";
import { AddLeagueStep } from "./AddLeagueStep";
import { FinishAddLeagueStep } from "./FinishAddLeagueStep";

export function CreateLeagueForm() {
	const { showMultiStep, handleShowMultiStep, formState, setFormState } = useStepForm();
	const handleSubmit = () => {
		console.error(formState);
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
							<AddLeagueStep formData={formState} updateFormData={setFormState} />
							<FinishAddLeagueStep formData={formState} handleSubmit={handleSubmit} />
						</Steps>
					</StepsProvider>
				</section>
			) : (
				<></>
			)}
		</>
	);
}
