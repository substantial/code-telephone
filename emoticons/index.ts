const replacements = {
  'laughing out loud': '=D',
  surprised: ':0',
  smug: ':>',
  shrug: '¯_(ツ)_/¯',
  laughing: 'XD',
  laugh: 'XD',
  lol: '=D'
}

const converter = (text: string): string => {
  Object.entries(replacements).forEach(([key, value]) => {
    text = text.replace(key, value)
  })
  return text
}

export default converter
