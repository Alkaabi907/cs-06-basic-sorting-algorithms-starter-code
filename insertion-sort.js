function insertionSort (items) {
  function insertionSort (items) {
  for (let i=1; i < items.length; i++) {
    let value = items[i]
    let j = i-1
    while(j >= 0 && items[j] > value) {
      items[j+1] = items[j]
      j--
    }
    items[j+1] = value
  }
  return items;
}
  return items;
}

module.exports = insertionSort;
