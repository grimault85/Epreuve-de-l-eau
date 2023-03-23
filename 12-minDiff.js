function differenceMinimumAbsolue(arg) {
    console.log(arg)
    if (!Array.isArray(arg) || arg.length < 2 || arg.some(e => typeof e !== 'number' || isNaN(e))) {
        console.error('Veuillez entrer au moins deux nombres.');
        process.exit(1)
    }
    console.log(Math.min(...arg.map(e => Math.abs(e - Math.max(...arg.filter(x => x !== e))))))
}

differenceMinimumAbsolue(process.argv.slice(2))