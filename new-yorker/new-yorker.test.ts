import newYorker from './new-yorker'

it('Replaces ER with AH', () => {
  const test = 'I like water!'
  expect(newYorker(test)).toBe('I like watah!')
})

it('Replaces ERE with EAH', () => {
  const test = "I'm here"
  expect(newYorker(test)).toBe("I'm heah")
})

it('Replaces OUGHT with AWWT', () => {
  const test = 'I thought I knew!'
  expect(newYorker(test)).toBe('I thawwt I knew!')
})

it('Replaces UR with UH', () => {
  const test = 'Hey nurse!'
  expect(newYorker(test)).toBe('Hey nuhse!')
})

it('Replaces ALK with AWK', () => {
  const test = 'I talk to dead people.'
  expect(newYorker(test)).toBe('I tawk to dead people.')
})
