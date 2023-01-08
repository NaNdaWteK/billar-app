export function dispatchPageLoaded() {
  const event = new CustomEvent('pageLoaded');
  document.dispatchEvent(event);
}
