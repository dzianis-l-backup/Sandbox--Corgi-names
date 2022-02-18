import uniqueRandomArray from 'unique-random-array'
// import { readFileSync } from 'fs'
// import path from 'path'
// const starWarsNames = JSON.parse(readFileSync(new URL('./names.json', import.meta.url)))

import starWarsNames from './names.json'

// import { fileURLToPath } from 'url'
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
// const starWarsNames = JSON.parse(readFileSync(path.resolve(__dirname, './names.json'), { encoding: 'utf-8' }))

export default {
    all: starWarsNames,
    random: uniqueRandomArray(starWarsNames),
}
