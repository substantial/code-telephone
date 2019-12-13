import converter from '.'

it('converts any words that are text emoticons into text emoticon', () => {
  expect(converter('surprised')).toEqual(':0')
  expect(converter('smug')).toEqual(':>')
  expect(converter('shrug')).toEqual('¯_(ツ)_/¯')
  expect(converter('laughing')).toEqual('XD')
  expect(converter('laugh')).toEqual('XD')
  expect(converter('laughing out loud')).toEqual('=D')
  expect(converter('lol')).toEqual('=D')
  expect(converter('I was surprised to see you laughing out loud!!')).toEqual(
    'I was :0 to see you =D!!'
  )
  expect(converter('')).toEqual('')
  expect(converter('huh?')).toEqual('huh?')
})

it('converts in a loop', () => {
  expect(converter('magic')).toEqual('(⊃｡•́‿•̀｡)⊃━✿✿✿✿✿✿')
  expect(converter('magic')).toEqual('(∩ᄑ_ᄑ)⊃━☆ﾟ*･｡*･:≡( ε:)')
  expect(converter('magic')).toEqual('(/￣ー￣)/~~☆’.･.･:★’.･.･:☆')
  expect(converter('magic')).toEqual('(⊃｡•́‿•̀｡)⊃━✿✿✿✿✿✿')
})
