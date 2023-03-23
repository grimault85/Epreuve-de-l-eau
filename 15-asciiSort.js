function asciiSort(args) {
    if (!args) {
        console.error("Error")
        process.exit(1)
    } else {
        console.log(args.sort().join(" "))
    }
}
asciiSort(process.argv.slice(2))