const antonyms = [
  ['above', 'below'],
  ['below', 'above'],
  ['far', 'near'],
  ['near', 'far'],
  ['from', 'to'],
  ['to', 'from'],
  ['in', 'out'],
  ['out', 'in'],
  ['is', "isn't"],
  ["isn't", 'is'],
  ['over', 'under'],
  ['under', 'over'],
  ['will', "won't"],
  ["won't", 'will']
]

export const replace = (text: string) => {
  let copy = text
  for (const [from, to] of antonyms) {
    copy = copy.replace(from, to)
  }
  return copy
}
