var WordPOS = require('wordpos')
var pluralize = require('pluralize')
const wordpos = new WordPOS()

export default (text: string) => {
  let updated = text
    .replace('u', 'ü')
    .replace('o', 'ø')
    .replace('hack', 'hAC/DCk')
  updated += '⚡️🤘'

  wordpos.getNouns(updated, nouns => {
    nouns.forEach(noun => {
      const plural = pluralize(noun, 11, true)
      updated = updated.replace(noun, plural)
    })
  })

  return updated
}
