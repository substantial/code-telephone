import { reverseThirdWords } from './reverse'
import { LETTER } from './text'

const transformText = text => {
  const transformedText = reverseThirdWords(text)
  console.log(transformedText)
}

console.log('TRANSFORMING TEXT...')
transformText(LETTER)
