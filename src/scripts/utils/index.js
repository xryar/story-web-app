export function showFormattedDate(date, locale = 'en-US', options = {}) {
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  });
}

export function setupSkipToContent(element, mainContent) {
  element.addEventListener('click', () => mainContent.focus());
}

export function transitionHelper({ skipTransition = false, updateDOM }) {
  if (skipTransition || !document.startViewTransition) {
    const updateCallbackDone = Promise.resolve(updateDOM()).then(() => {});

    return {
      ready: Promise.reject(Error('View transition unsupported.')),
      updateCallbackDone,
      finished: updateCallbackDone
    };
  }

  return  document.startViewTransition(updateDOM);
}

export function sleep(time = 1000) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
