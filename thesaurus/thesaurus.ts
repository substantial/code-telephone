import axios from 'axios'
import dotenv from 'dotenv'
import { random } from 'lodash'

dotenv.config({
  path: `.env`
})

export type WordType = 'noun' | 'verb' | 'adjective' | 'adverb'

export const getSynonym = async (word: string, type: WordType = 'noun') => {
  return axios
    .get(
      `https://words.bighugelabs.com/api/2/${process.env.API_KEY}/${word}/json`
    )
    .then(res => {
      const results = res.data[type]
      if (!results) {
        throw new Error(`no ${type} matches for "${word}"`)
      }

      const synonyms = results.syn
      const similarWords = results.sim
      if (!(synonyms || similarWords)) {
        throw new Error(`no ${type} synonyms for "${word}"`)
      }

      return (synonyms && synonyms[random(0, synonyms.length - 1)]) ||
        (similarWords && similarWords[random(0, similarWords.length - 1)])
    })
    .catch(err => console.log(`error! ${err.message}`))
}
