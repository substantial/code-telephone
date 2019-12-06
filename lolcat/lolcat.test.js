import lolcat from './lolcat'
import { CHEESE_BURGER, DARE, SECRETS } from './text'

test('Replace "I CAN HAVE" with "I CAN HAS"', () => {
  expect(lolcat(CHEESE_BURGER)).toBe("I CAN HAS CHEEZBURGER?")
})

test('Replace "THOSE" with "DOSE", "WHO" with "HOO" and "TO" with "2"', () => {
  expect(lolcat(DARE)).toBe("DOSE HOO DARE 2 FAIL MISERABLY CAN ACHIEVE GREATLY.")
})

test('Replace "YOUR" with "UR", "ARE" with "R", "WITH" with "WIF", "WASNT" with "WUZ NOT", and "ING" with "IN"', () => {
  expect(lolcat(SECRETS)).toBe("UR SECRETS R SAFE WIF ME... I WUZ NOT EVEN LISTENIN.")
})