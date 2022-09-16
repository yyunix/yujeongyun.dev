export function debounce(callback: Function, wait = 250) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(null, args), wait);
  };
}
