import { shuffle } from 'lodash'

export const replace = (text: string) => {
  const transformed = text.split(' ').map((word, index) => {
    if (index % 3 === 0) {
      return shuffle(word.split('')).join('')
    }
    return word
  })
  return transformed.join(' ')
}
