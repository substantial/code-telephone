const replacements = {
  'laughing out loud': '=D',
  surprised: ':0',
  smug: ':>',
  shrug: '¯_(ツ)_/¯',
  laughing: 'XD',
  laugh: 'XD',
  lol: '=D'
}
const magicValues = [
  '(⊃｡•́‿•̀｡)⊃━✿✿✿✿✿✿',
  '(∩ᄑ_ᄑ)⊃━☆ﾟ*･｡*･:≡( ε:)',
  "(/￣ー￣)/~~☆'.･.･:★'.･.･:☆",
  '(⊃｡•́‿•̀｡)⊃━✿✿✿✿✿✿'
]
const converter = (text: string): string => {
  if (text === 'magic') {
    magicValues.forEach(val => {
      console.log({ val })
      return val
    })
  }
  Object.entries(replacements).forEach(([key, value]) => {
    text = text.replace(key, value)
  })
  return text
}
export default converter
