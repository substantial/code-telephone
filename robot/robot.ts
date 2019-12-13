import { flow } from 'lodash'
import { SLITHERY_SNAKES, HISS, SECRETS } from './text'

// do the thing
export default (str: string) => {
  return (
    str
      .replace(/SS/g, '55')
      .replace(/S(\b)/g, 'Z$1')
      .replace(/S/g, '5')
      // .replace(/ES/g, '3Z')
      // .replace(/S/gi, '5')
      .replace(/E/g, '3')
      .replace(/I/g, '1')
      .replace(/A/g, '4')
      .replace(/O/g, '0')
      .replace(/SERI0USLY/g, 'CHEEZEBURGER')
  )
  // .replace()
}
