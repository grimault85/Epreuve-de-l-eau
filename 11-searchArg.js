function searchArg() {
    const args = process.argv.slice(2)
    if (args.length < 2) {
        console.error('Erreur : nombre d\'arguments insuffisant.')
        process.exit(1)
    } else {
        const element = args.pop()
        const index = args.indexOf(element)
        console.log(index >= 0 ? index : -1)
    }
}

searchArg()