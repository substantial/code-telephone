var WordPOS = require('wordpos')

export const replace = async (text: string) => {
  const wordpos = new WordPOS()

  return new Promise<string>((resolve, reject) => {
    let result: string = text
    wordpos.getNouns(text, nouns => {
      for (const noun of nouns) {
        result = result.replace(noun, `**${noun}**`)
      }
      resolve(result)
    })
  })
}
