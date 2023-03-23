function minMax() {
    const min = parseInt(process.argv[2], 10);
    const max = parseInt(process.argv[3], 10);

    if (isNaN(min) || isNaN(max)) {
        console.error("Erreur : les arguments doivent être des nombres.");
        process.exit(1);
    } else {
        for (let i = min; i < max; i++) {
            console.log(i);
        }
    }
}

minMax()