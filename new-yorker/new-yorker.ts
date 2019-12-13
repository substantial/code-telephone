const translations = {
  er: 'ah',
  ere: 'eah',
  ought: 'awwt',
  ur: 'uh',
  alk: 'awk',
  people: 'peopel',
  to: 'tah'
}

export default (text: string) =>
  text
    .split(' ')
    .map(word => {
      let value = word
      Object.keys(translations).forEach(part => {
        const pattern = new RegExp(part, 'gi')
        if (word.match(pattern)) {
          value = word.replace(pattern, translations[part])
        }
      })
      return value
    })
    .join(' ')
