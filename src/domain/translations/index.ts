/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { config } from "../../config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const translations: any = {
	// eslint-disable-next-line prettier/prettier
  'es': {
		"layout.title": "Gestion de Torneos Billar",
		"leagues.title": "Ligas",
		"leagues.form.create": "Crear una Liga",
		"leagues.form.creating": "Crear Liga",
		"leagues.league.noleagues": "No hay ligas creadas",
		"leagues.league.player": "Jugador",
		"leagues.league.victories": "V",
		"leagues.league.losses": "D",
		"leagues.league.percent": "%",
	},
};
export const trans = (item: string, language = config.language || "es"): string => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return translations[language][item];
};
