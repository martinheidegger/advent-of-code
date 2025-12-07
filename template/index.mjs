#!/usr/bin/env node
import { readFileSync } from 'node:fs'
import { deepEqual } from 'node:assert'

const inputFolder = (() => {
    const paths = (new URL('.', import.meta.url)).pathname.split('/')
    paths.pop()
    const date = paths.slice(paths.length - 2).join('/')
    return new URL(`../../input/${date}/`, import.meta.url)
})()

const input = readFileSync(new URL('input', inputFolder), 'utf8')
const test = readFileSync(new URL('test', inputFolder), 'utf8')

function partOne() {
}

console.log(partOne())

function partTwo() {
}

console.log(partTwo())
