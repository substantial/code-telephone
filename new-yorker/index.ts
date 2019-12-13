import newYorker from './new-yorker'
import { exampleText } from '../example-text'

const transformText = async text => {
  const transformedText = await newYorker(text)
  console.log(transformedText)
}

console.log('TRANSFORMING TEXT...')
transformText(exampleText)