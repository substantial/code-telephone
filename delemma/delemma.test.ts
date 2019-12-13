import delemma from './delemma'

// See:
// https://www.newyorker.com/culture/culture-desk/the-curse-of-the-diaeresis

describe('delemma', () => {
  it('changes cooperate to coöperate', () => {
    expect(delemma("Let's cooperate")).toBe("Let's coöperate")
  })

  it('changes laocoon to laocoön', () => {
    expect(delemma('laocoon, the son of Acoetes')).toBe(
      'Laocoön, the son of Acoetes'
    )
  })

  it('changes upcase versions of the word', () => {
    expect(delemma('Laocoon, the son of Acoetes')).toBe(
      'Laocoön, the son of Acoetes'
    )
  })

  it('changes reelect to reëlect', () => {
    expect(delemma("Let's reelect our congresswoman")).toBe(
      "Let's reëlect our congresswoman"
    )
  })

  it('changes naive to naïve', () => {
    expect(delemma("Don't be naive")).toBe("Don't be naïve")
  })

  it('handles punctuation', () => {
    expect(delemma("Don't be naive!")).toBe("Don't be naïve!")
    expect(delemma("Don't be naive, just do it!")).toBe(
      "Don't be naïve, just do it!"
    )
  })
})
