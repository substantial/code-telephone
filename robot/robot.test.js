import robot from './robot'
import { SLITHERY_SNAKES, HISS, SECRETS } from './text'

test('Replace "SN4KES" with "5N4K3Z"', () => {
  expect(robot('SN4KES')).toBe('5N4K3Z')
})

test('Replace "SERI0USLY" with "CHEEZEBURGER', () => {
  expect(robot('SERI0USLY')).toBe('53R10U5LY')
})

test('Set SLITHERY_SNAKES t0 r0b0t v0ice', () => {
  expect(
    robot(SLITHERY_SNAKES).toBe(
      'W3 4R3 50M3 53R10U5LY 5L1TH3RY 5N4K3Z. 50 5N34KY.'
    )
  )
})

test('Set HISS t0 r0b0t v0ice', () => {
  expect(robot(HISS)).toBe('H155...')
})

test('Set SECRETS to robot voice', () => {
  expect(robot(SECRETS)).toBe(
    "0F TH3 M4NY F34RS0M3 B345TZ 4ND M0N5T3RZ TH4T R04M 0UR L4ND, TH3R3 1Z N0N3 M0R3 CUR10UZ 0R M0R3 D34DLY TH4T TH3 B451L15K, KN0WN 4LS0 4Z TH3 K1NG 0F 53RP3NTZ. TH1Z 5N4K3, WH1CH M4Y R34CH G1G4NT1C 51Z3, 4ND L1V3 M4NY HUNDR3DZ 0F Y34RZ, 15 B0RN FR0M 4 CH1CK3N'Z 3GG, H4TCH3D B3N34TH 4 T04D. 1TZ M3TH0DZ 0F K1LL1NG 4R3 M0R3 W0ND3R0UZ, F0R 451D3 FR0M 1TZ D34DLY 4ND V3N0M0UZ F4NGZ, TH3 B451L15K H4Z 4 MURD3R0UZ 5T4R3, 4ND 4LL WH0 4R3 F1X3D W1TH TH3 B34M 0F 1TZ 3Y3 5H4LL 5UFF3R 1N5T4NT D34TH. 5P1D3R5 FL33 B3F0R3 TH3 B4S1L1SK, F0R 1T 1Z TH31R M0RT4L 3N3MY, 4ND TH3 B451L15K FL33Z 0NLY FR0M TH3 CR0W1NG 0F TH3 R005T3R, WH1CH 1Z F4T4L T0 1T."
  )
})
