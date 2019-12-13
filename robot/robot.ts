import { flow } from 'lodash'
import { SLITHERY_SNAKES, HISS, SECRETS } from './text'

// do the thing
export default (str) => {
  return str
    .replace('ES', '3Z')
    .replace(/S/gi, '5')
    .replace('E', '3')
    .replace('I', '1')
    .replace('SERI0USLY', 'CHEEZEBURGER')
    .replace()
}
