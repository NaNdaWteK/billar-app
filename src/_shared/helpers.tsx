function hideElement(element: HTMLElement) {
  element.style.setProperty('visibility', 'hidden');
}

function showElement(element: HTMLElement) {
  element.style.setProperty('visibility', 'visible');
}

function selectElement(element: string) {
  return document.querySelector(element) as HTMLElement;
}

export { hideElement, showElement, selectElement };
