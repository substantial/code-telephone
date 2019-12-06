export const replace = (text: string) => {
  const transformed = text.split(' ').map((word, index) => {
    if (index % 3 === 0) {
      return word
        .split('')
        .reverse()
        .join('')
    }
    return word
  })
  return transformed.join(' ')
}
