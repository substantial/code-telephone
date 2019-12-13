import { flow } from 'lodash'
import WordPOS from 'wordpos'

const wordPOS = new WordPOS({})

// Speak lolcat: https://speaklolcat.com/

const canHas = text => text.replace(/CAN I HAVE/g, 'I CAN HAS')
const cheezeburger = text => text.replace(/(A )?CHEESEBURGER/g, 'CHEEZBURGER')
const dose = text => text.replace(/THOSE/g, 'DOSE')
const who = text => text.replace(/WHO/g, 'HOO')
const to = text => text.replace(/TO/g, '2')
const ur = text => text.replace(/YOUR/g, 'UR')
const r = text => text.replace(/\bARE/g, 'R')
const wif = text => text.replace(/WITH/g, 'WIF')
const wuznot = text => text.replace(/WASN'T/g, 'WUZ NOT')
const listenin = text => text.replace(/LISTENING/g, 'LISTENIN')
const reverseGreaterThanFive = text => {
  text.match(/[A-Za-z]{5}/g).forEach(word => text.replace())
}

export default (text: string) => {
  return flow([
    canHas,
    dose,
    cheezeburger,
    who,
    to,
    ur,
    r,
    wif,
    wuznot,
    listenin,
    reverseGreaterThanFive
  ])(text)
}
