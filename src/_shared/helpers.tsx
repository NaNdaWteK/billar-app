function hideElement(element: HTMLDivElement) {
  element.style.setProperty('visibility', 'hidden');
}

function showElement(element: HTMLDivElement) {
  element.style.setProperty('visibility', 'visible');
}

function selectElement(element: string) {
  return document.querySelector(element) as HTMLDivElement;
}

export { hideElement, showElement, selectElement };
