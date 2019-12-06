var WordPOS = require('wordpos')

export const replace = async (text: string) => {
  const wordpos = new WordPOS()

  return new Promise<string>((resolve, reject) => {
    let result: string = text
    wordpos.getPOS(text, results => {
      console.log(results)
      for (const noun of results.nouns) {
        result = result.replace(noun, `**${noun}**`)
      }
      resolve(result)
    })
  })
}
