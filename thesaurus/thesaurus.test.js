import { replaceWithSynonyms } from './replace'
import { LETTER } from './text'

jest.mock('./thesaurus', () => ({
  getSynonym: async _word => 'synonym'
}))

test('replaceWithSynonym replaces markers with synonyms from the thesaurus API', async () => {
  expect(await replaceWithSynonyms(LETTER)).toBe(
    'You will no doubt be synonym to receive a synonym from one who is almost a total synonym to you'
  )
})
