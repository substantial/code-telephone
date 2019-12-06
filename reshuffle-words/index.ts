import { replace } from './replace'
import { LETTER } from './text'

const transformText = text => {
  const transformedText = replace(text)
  console.log(transformedText)
}

console.log('TRANSFORMING TEXT...')
transformText(LETTER)
