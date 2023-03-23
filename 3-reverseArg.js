function reverseArg(arg) {
    console.log(arg.reverse().join(' '))
}

reverseArg(process.argv.slice(2))