export function showToast(message: string) {
  console.log("Toast:", message);

  window.dispatchEvent(
    new CustomEvent("toast", {
      detail: message,
    })
  );
}