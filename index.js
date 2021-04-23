function intersperse(arr, item) {
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
