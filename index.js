import type from 'type-detect'

function intersperse(arr, item) {
  if (!Array.isArray(arr)) {
    throw TypeError(`I can't work with ${type(arr)}`)
  }
  const result = arr.reduce(
    (accumulator, element, index, array) => [
      ...accumulator,
      element,

      ...(index + 1 === array.length ? [] : [item]),
    ],
    []
  )

  return result
}

export { intersperse }
