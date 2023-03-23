const isPrime = n => {
    if (n < 2) return false
    for (let i = 2; i <= Math.sqrt(n); i++)
        if (n % i === 0) return false
    return true
}

function nextNumber(n) {
    if (!Number.isInteger(n) || n < 2) {
        console.error('-1')
        process.exit(1)
    } else {
        let i = n + 1
        while (!isPrime(i)) i++
        console.log(`Le premier nombre premier supérieur à ${n} est ${i}.`)
    }
}

nextNumber(Number(process.argv[2]))