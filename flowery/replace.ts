export const replace = (text: string) => {
  return text
    .replace(/one/i, 'one, such as myself,')
    .replace(/you/gi, match => `${match}, respectfully,`)
    .replace(/surprised/, 'surprised, for one such as yourself,')
}
