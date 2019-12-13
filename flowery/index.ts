import { replace } from './replace'
import { LETTER } from './text'

const transformText = async text => {
  const transformedText = await replace(text)
  console.log(transformedText)
}

console.log('TRANSFORMING TEXT...')
transformText(LETTER)
