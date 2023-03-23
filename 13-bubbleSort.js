function bubbleSort(array) {
    if (!Array.isArray(array) || array.some(isNaN)) {
        console.error("Erreur : l'argument doit être une liste de nombres.")
    } else {
        let n = array.length
        let swap = true
        while (swap) {
            swap = false;
            for (let i = 0; i < n - 1; i++) {
                if (array[i] > array[i + 1]) {
                    let temp = array[i]
                    array[i] = array[i + 1]
                    array[i + 1] = temp
                    swap = true
                }
            }
            n--
        }
    }
    return array
}

console.log(bubbleSort(process.argv.slice(2)).join(" "))