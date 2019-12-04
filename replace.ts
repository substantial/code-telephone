import { getSynonym, WordType } from './thesaurus'

// finds markers in the form [word-WordType] and replaces them with a synonym for word.
// example: [surprised-adjective] might be replaced with "shocked"
export const replaceWithSynonyms = async (text: string) => {
  const words = text.split(' ')
  const replaced = await words.map(async word => {
    const matches = word.match(/\[(\w+)-(\w+)\]/i)
    if (Array.isArray(matches) && matches.length) {
      const wordToReplace = matches[1]
      const type = matches[2] as WordType
      const syn = await getSynonym(wordToReplace, type)
      return syn
    }
    return word
  })

  const parsed = await Promise.all(replaced)
  return parsed.join(' ')
}
