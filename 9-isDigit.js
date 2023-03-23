function isDigit(arg) {

    if (typeof arg !== "string") {
        console.error("Erreur : l'argument doit être une chaîne de caractères.");
        process.exit(1);
    } else {
        const onlyDigits = /^[0-9]+$/;

        if (onlyDigits.test(arg)) {
            console.log("La chaîne ne contient que des chiffres.");
        } else {
            console.log("La chaîne contient d'autres caractères que des chiffres.");
        }
    }
}

isDigit(process.argv[2])