import { flow } from 'lodash'
import { SLITHERY_SNAKES, HISS, SECRETS } from './text'

// do the thing
export default (str) => {
  return str
    .replace('ES', '3Z')
    .replace(/S\s/gi, 'Z ')
    .replace(/S/gi, '5')
    .replace(/R5/gi, 'RS')
    .replace(/L5/gi, 'LS')
    .replace(/E/gi, '3')
    .replace(/I/gi, '1')
    .replace(/O/gi, '0')
    .replace(/A/gi, '4')
    .replace('SERI0USLY', 'CHEEZEBURGER')
    .replace()
}
