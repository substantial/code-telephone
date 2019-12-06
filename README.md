# Code Telephone

Let's invent and apply transformations to some text. Transform the text any which way you want; for example, write a script that replaces words with synonyms, or adds exclamations a la Mr. T to the text. The twist is that we're going to trade code with other teams several times during the exercise, so you'll be passing your work on like in a game of telephone.

1. Create a branch for your team.
1. Specify a transformation: Decide on a transformation and write a few (failing) tests to describe how the transformation should work.
1. Try to implement the transformation.
1. Commit your code and pass your code to another team when instructed to do so.

See the `replaceWithSynonyms` test in `theasaurus.test.js` for an example.

## Setup

`yarn install`

## Running

- `yarn test` to run tests
- `yarn go <filename>` to execute a TS file

## Thesaurus

Replaces words in the text with their synonyms.

Get an API key by following the instructions at https://words.bighugelabs.com/account/getkey.
Set your key as `API_KEY` in a `.env` file

`yarn go thesaurus/index.ts`

## Noun-finder

Highlights nouns in the text.

`yarn go noun-highlighter/index.ts`
