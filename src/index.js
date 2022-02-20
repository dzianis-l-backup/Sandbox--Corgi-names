import uniqueRandomArray from 'unique-random-array'
import names from './names.json'

export default {
    all: names,
    random: uniqueRandomArray(names),
}
