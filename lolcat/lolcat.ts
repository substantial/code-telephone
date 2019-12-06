import { flow } from 'lodash'

// Speak lolcat: https://speaklolcat.com/

const canHas = text => text.replace(/CAN I HAVE/g, 'I CAN HAS')
const dose = text => text.replace(/THOSE/g, 'DOSE')

export default (text: string) => {
  return flow([canHas, dose])(text)
  // return text
}
