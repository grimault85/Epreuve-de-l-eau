function fibonacci(n) {
    let a = 0
    let b = 1

    for (let i = 0; i < n; i++) {
        let c = a + b
        a = b
        b = c
    }

    return a
}

const n = process.argv[2]

if (isNaN(n) || n < 0) {
    console.error('Erreur : veuillez fournir un nombre entier positif.')
    process.exit(1)
}

const fib = fibonacci(n)

console.log(`Le ${n}-ème élément de la suite de Fibonacci est ${fib}.`)
