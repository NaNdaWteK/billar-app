// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function dispatchPageLoaded() {
	const event = new CustomEvent("pageLoaded");
	document.dispatchEvent(event);
}
