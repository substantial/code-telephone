import { replace } from './replace'
import { LETTER } from './text'

describe('replace', () => {
  it('replaces above with below and vice versa', () => {
    expect(replace('as above, so below')).toBe('as below, so above')
  })

  it('replaces far with near and vice versa', () => {
    expect(replace('so far, so close, so near, so far')).toBe(
      'so near, so close, so far, so near'
    )
  })

  it('replaces from with to and vice versa', () => {
    expect(replace('From: Mike\nTo: John')).toBe('To: John\nFrom: Mike')
  })

  it('replaces in with out and vice versa', () => {
    expect(replace('the best fast food chain is in and out.')).toBe(
      'the best fast food chain is out and in.'
    )
  })

  it("replaces is with isn't and vice versa", () => {
    expect(replace("it is but it isn't isn't it?")).toBe(
      "it isn't but it is is it?"
    )
  })

  it('replaces over with under and vice versa', () => {
    expect(replace("What's the over under on that?")).toBe(
      "What's the under over on that?"
    )
  })

  it("replaces will with won't and vice versa", () => {
    expect(replace("You will do it won't you?")).toBe(
      "You won't do it will you?"
    )
  })
})
