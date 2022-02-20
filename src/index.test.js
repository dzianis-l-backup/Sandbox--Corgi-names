import assert from 'assert'
import corgiNames from './index.js'

describe('corgi-names', function () {
    it('should have a list of all available names', function () {
        assert.equal(isArrayOfStrings(corgiNames.all), true)
    })

    it('should allow to get a random name from the list', () => {
        assert.equal(isIncludedIn(corgiNames.all)(corgiNames.random()), true)
    })
})

const isArrayOfStrings = (arr) => arr.every((item) => typeof item === 'string')
const isIncludedIn = (arr) => (item) => arr.includes(item)
