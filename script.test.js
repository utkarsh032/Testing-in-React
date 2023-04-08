const googleSearch = require('./script')

dbMock = ['dog.com', 'pig.com', 'disney.com', 'kidney.com', 'roar.com']

describe('googleSearch', () => {
  it('this is a test', () => {
    expect('hello').toBe('hello')
  })

  it('is searching google', () => {
    expect(googleSearch('testtest', dbMock)).toEqual([])
    expect(googleSearch('kidney', dbMock)).toEqual(['kidney.com'])
  })

  it('work with undefined and null input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([])
    expect(googleSearch(null, dbMock)).toEqual([])
  })

  it('does not return more than 3 matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3)
  })
})
