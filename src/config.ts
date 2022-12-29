export interface AppConfig {
	environment: string;
	billarApiUrl: string;
}
export const config: AppConfig = {
	environment: process.env.REACT_APP_ENVIRONMENT as string,
	billarApiUrl: process.env.REACT_APP_BILLAR_API_URL as string,
};
