import metal from './metal'

test('Replace "U" with "Ü"', () => {
  expect(metal('hungry')).toMatch('hüngry')
})

test('Replace "o" with "ø"', () => {
  expect(metal('down')).toMatch('døwn')
})

test('adds emoji', () => {
  expect(metal('hevisaurus')).toMatch('⚡️')
  expect(metal('some other string')).toMatch('🤘')
})

test('interjects "DC"', () => {
  expect(metal('this is no hackathon')).toMatch('hAC/DCk')
})

test('Pluralizes singular nouns to 11', () => {
  expect(metal('can i have a cheeseburger?')).toMatch('11 cheesebürgers')
})
