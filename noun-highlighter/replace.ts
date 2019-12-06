var WordPOS = require('wordpos')

export const replace = async (text: string) => {
  const wordpos = new WordPOS()

  return new Promise<string>((resolve, reject) => {
    let result: string = text
    wordpos.getPOS(text, results => {
      for (const noun of results.nouns) {
        if (
          !(
            results.verbs.includes(noun) ||
            results.adjectives.includes(noun) ||
            results.adverbs.includes(noun)
          )
        )
          result = result.replace(noun, `**${noun}**`)
      }
      resolve(result)
    })
  })
}
