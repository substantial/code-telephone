# Code Telephone

Let's invent and apply transformations to some text. Transform the text any which way you want; for example, write a script that replaces words with synonyms, or adds exclamations a la Mr. T to the text. The twist is that we're going to trade code with other teams several times during the exercise, so you'll be passing your work on like in a game of telephone.

1. Create a branch for your team.
1. Specify a transformation: Decide on a transformation and write a few (failing) tests to describe how the transformation should work. Ideally, the transformation should take more than 10 minutes to implement and you should be able to write several tests for it.
1. Try to implement the transformation.
1. Commit your code and pass your code to another team when instructed to do so.

## Setup

`yarn install`

The repo includes `lodash` for convenience and the handy part-of-speech analyzer (WordPOS)[https://www.npmjs.com/package/wordpos]. There is also a snippet from a real Victorian love letter in `example-text.ts`. Make of that what you will.

## Running

- `yarn test` to run tests
- `yarn go <filename>` to execute a TS file

## Examples

### Noun-finder

Highlights nouns in the text.

`yarn go noun-highlighter/index.ts`

### LOLCAT

Makes the text sound like LOLCAT

`yarn go lolcat/index.ts`
