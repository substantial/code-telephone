import { replace } from './replace'
import { LETTER } from './text'

jest.mock('lodash', () => ({
  shuffle: thing => thing.reverse()
}))

test('replace shuffles every other word in the input text', () => {
  expect(replace(LETTER)).toBe(
    'uoY will on doubt eb surprised ot receive a letter morf one ohw is tsomla a latot stranger ot you'
  )
})
