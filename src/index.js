import uniqueRandomArray from 'unique-random-array'
import starWarsNames from './names.json'

export default {
    all: starWarsNames,
    random: uniqueRandomArray(starWarsNames),
}
