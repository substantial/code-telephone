import { replace } from './replace'
import { LETTER } from './text'

describe('replace', () => {
  it('makes the letter more flowery', () => {
    expect(replace(LETTER)).toBe(
      'You, respectfully, will no doubt be surprised, for one such as yourself, to receive a letter from one, such as myself, who is almost a total stranger to you, respectfully.'
    )
  })
})
