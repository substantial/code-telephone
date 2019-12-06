import { replace } from './replace'
import { LETTER } from './text'
import { reverse } from 'lodash'

jest.mock('lodash', () => ({
  shuffle: thing => thing.reverse()
}))

test('replace shuffles every third word in the input text', () => {
  expect(replace(LETTER)).toBe(
    'uoY will no tbuod be surprised ot receive a rettel from one ohw is almost a total stranger ot you'
  )
})
