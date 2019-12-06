import { replace } from './replace'
import { LETTER } from './text'

describe('replace', () => {
  it('highlights nouns with **', async () => {
    expect(await replace(LETTER)).toBe(
      'You **will** **no** **doubt** be surprised to receive a **letter** from **one** who is almost a **total** **stranger** to you'
    )
  })
})
