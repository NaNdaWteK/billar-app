/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ChangeEvent } from "react";
import { useSteps } from "react-step-builder";

import { Navigation } from "../../_shared/Navigation";
import { StepProps } from "../../domain/interfaces/forms";
import { trans } from "../../domain/translations";

export function AddLeagueStep<T extends { [key: string]: string }>({
	formData,
	updateFormData,
}: StepProps<T>) {
	const { next, prev, hasNext, hasPrev } = useSteps();
	const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
		updateFormData &&
			updateFormData({
				...formData,
				[event.target.name]: event.target.value,
			});
	};

	return (
		<div>
			<h3>{trans("leagues.form.create")}</h3>
			<div className="input-between">
				<label htmlFor="leagueName">
					<input
						className="input-text"
						type="text"
						id="leagueName"
						placeholder="Nombre de la liga"
						name="name"
						value={formData.name || ""}
						onChange={handleChange}
					/>
				</label>
			</div>
			<div className="input-between">
				<label htmlFor="leagueType">
					<select
						className="select"
						id="leagueType"
						name="type"
						value={formData.type || "Selecciona el tipo de liga"}
						onChange={handleChange}
					>
						<option value="default">Selecciona el tipo de liga</option>
						<option value="Bola 8">Bola 8</option>
					</select>
				</label>
			</div>
			<Navigation prev={prev} next={next} hasPrev={hasPrev} hasNext={hasNext} />
		</div>
	);
}
