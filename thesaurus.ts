import axios from 'axios'
import dotenv from 'dotenv'
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

      // TODO: try returning a random synonym or similar word instead of the first
      return (results.syn && results.syn[0]) || (results.sim && results.sim[0])
    })
    .catch(err => console.log(`error! ${err.message}`))
}