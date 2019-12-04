import { replaceWithSynonyms } from './replace'

function passThrough(text) {
  return text
}

test('passThrough returns the input text unaltered', () => {
  const text = 'My sample text'
  expect(passThrough(text)).toBe(text)
})

jest.mock('./thesaurus', () => ({
  getSynonym: async _word => 'synonym'
}))

test('replaceWithSynonym replaces markers with synonyms from the thesaurus API', async () => {
  const text =
    'You will no doubt be [surprised-adjective] to receive a [letter-noun] from one who is almost a total [stranger-noun] to you'

  expect(await replaceWithSynonyms(text)).toBe(
    'You will no doubt be synonym to receive a synonym from one who is almost a total synonym to you'
  )
})
