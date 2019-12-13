const translations = {
  cooperate: 'coöperate',
  reelect: 'reëlect',
  naive: 'naïve'
}

export default (text: string) => {
  return text
    .split(' ')
    .map(word => {
      if (translations[word]) {
        return translations[word]
      }
      return word
    })
    .join(' ')
}
