function selectionSort(array) {
    if (!Array.isArray(array) || array.some(isNaN)) {
        console.error("Erreur : l'argument doit être une liste de nombres.")
    } else {
        for (let i = 0; i < array.length - 1; i++) {
            let min_index = i
            for (let j = i + 1; j < array.length; j++) {
                if (array[j] < array[min_index]) {
                    min_index = j
                }
            }
            if (min_index !== i) {
                let temp = array[i]
                array[i] = array[min_index]
                array[min_index] = temp
            }
        }
    }
    return array
}

console.log(selectionSort(process.argv.slice(2)))