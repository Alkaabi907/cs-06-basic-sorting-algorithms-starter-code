function bubbleSort(array) {
function bubbleSort(array) {
    for (i=0; i < array.length; i++) {
        for (j=1; j < array.length -i; j++) {
            if (array[j-1] > array[j]) {
                [array[j-1], array[j]] = [array[j], array[j-1]]
            }
        }
    }
    return array;
}
    return array;
}

module.exports = bubbleSort;