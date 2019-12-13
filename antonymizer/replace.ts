const antonyms = {
  below: 'above',
  'above,': 'below,',
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
      return antonyms[word] ? antonyms[word] : word
    })
    .join(' ')
}
