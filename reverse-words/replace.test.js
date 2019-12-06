import { replace } from './replace'
import { LETTER } from './text'

test('replace reverses every third word in the input text', () => {
  expect(replace(LETTER)).toBe(
    'uoY will no tbuod be surprised ot receive a rettel from one ohw is almost a total stranger ot you'
  )
})
