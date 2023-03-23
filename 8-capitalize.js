function captitalize(arg) {
    if (typeof arg !== "string") {
        console.error("Erreur : l'argument doit être une chaîne de caractères.")
        process.exit(1);
    } else {
        const words = arg.split(/[\s\t\n]+/)
        const result = words
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ")
        console.log(result)
    }
}

captitalize(process.argv[2])