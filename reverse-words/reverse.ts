export const reverseThirdWords = (text: string) => {
  const transformed = text.split(' ').map((word, index) => {
    if (index % 3 === 0) {
      const letters = word.split('')
      let reversed = ''
      while (letters.length > 0) {
        reversed += letters.pop()
      }
      return reversed
    }
    return word
  })
  return transformed.join(' ')
}
