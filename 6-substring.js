const isSubstring = (str, subStr) => {
    return str.includes(subStr)
}

const verifString = () => {
    const str = process.argv[2]
    const subStr = process.argv[3]
    if (isSubstring(str, subStr)) {
        console.log(`La sous-chaîne "${subStr}" se trouve dans la chaîne "${str}"`);
    } else {
        console.log(`La sous-chaîne "${subStr}" ne se trouve pas dans la chaîne "${str}"`);
    }
}

verifString();
