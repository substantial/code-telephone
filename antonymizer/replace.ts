const antonyms = {
  above: 'below',
  below: 'above',
  far: 'near',
  near: 'far',
  from: 'to',
  to: 'from',
  in: 'out',
  out: 'in',
  is: "isn't",
  "isn't": 'is',
  over: 'under',
  under: 'over',
  will: "won't",
  "won't": 'will'
}

export const replace = (text: string) => {
  return text
    .split(' ')
        .map(word => {

            Object.forEach((part) => {
                if
            })
        if (word.includes(antonyms[word]) {
        return antonyms[word]
      }
      return word
    })
    .join(' ')
}
