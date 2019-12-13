const translations = {
  er: 'ah',
  ere: 'eah',
  ought: 'awwt',
  ur: 'uh',
  alk: 'awk'
}

export default (text: string) =>
  text
    .split(' ')
    .map(word => {
      let value = word
      Object.keys(translations).forEach(part => {
        if (word.includes(part)) {
          value = word.replace(part, translations[part])
        }
      })
      return value
    })
    .join(' ')
