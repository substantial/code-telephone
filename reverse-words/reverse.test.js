import { reverseThirdWords } from './reverse'
import { LETTER } from './text'

test('reverseThirdWords reverses every third word in the input text', () => {
  expect(reverseThirdWords(LETTER)).toBe(
    'uoY will no tbuod be surprised ot receive a rettel from one ohw is almost a total stranger ot you'
  )
})
