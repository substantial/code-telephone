# Code Telephone

Let's invent and apply transformations to some text. Transform the text any which way you want; for example, write a script that replaces words with synonyms, or adds exclamations a la Mr. T to the text. The twist is that we're going to trade code with other teams several times during the exercise, so you'll be passing your work on like in a game of telephone.

- Step 1: specify a transformation. Decide on a transformation and write a few (failing) tests to describe how the transformation should work. Commit your work and trade with another team
- Step 2: try to implement the transform you received from the other team in step 1.

See the `replaceWithSynonym` test in `tests.test.js` for an example.

## setup

`yarn install`

## thesaurus

Get an API key by following the instructions at https://words.bighugelabs.com/account/getkey.
Set your key as `API_KEY` in a `.env` file

## running

`yarn go <filename>` to execute a TS file
`yarn test` to run tests
