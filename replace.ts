import { getSynonym, WordType } from './thesaurus'

const letter =
  'You will no doubt be [surprised-adjective] to receive a [letter-noun] from one who is almost a total [stranger-noun] to you, but I hope you will pardon me for my [boldness-noun] when I tell you how truly, how deeply I [love-verb] you.'

// finds markers in the form [word-WordType] and replaces them with a synonym for word.
// example: [surprised-adjective] might be replaced with "shocked"
const parseText = async (text: string) => {
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

async function run() {
  const text = await parseText(letter)
  console.log(text)

  return text
}

run()