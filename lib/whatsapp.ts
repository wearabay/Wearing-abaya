export function whatsappLink(message: string) {
  return `https://wa.me/6281903681777?text=${encodeURIComponent(message)}`;
}