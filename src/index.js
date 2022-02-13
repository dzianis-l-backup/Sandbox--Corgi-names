import uniqueRandomArray from 'unique-random-array'
import { readFileSync } from 'fs'

const starWarsNames = JSON.parse(readFileSync(new URL('./starwars-names.json', import.meta.url)))

export default {
    all: starWarsNames,
    random: uniqueRandomArray(starWarsNames),
}
