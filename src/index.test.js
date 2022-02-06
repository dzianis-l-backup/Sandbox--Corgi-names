import assert from 'assert'
import starWarsNames from './index.js'

describe('starwars-names', function () {
    it('should have a list of all available names', function () {
        assert.equal(isArrayOfStrings(starWarsNames.all), true)
    })

    it('should allow to get a random name from the list', () => {
        assert.equal(
            isIncludedIn(starWarsNames.all)(starWarsNames.random()),
            true
        )
    })
})

const isArrayOfStrings = (arr) => arr.every((item) => typeof item === 'string')
const isIncludedIn = (arr) => (item) => arr.includes(item)
