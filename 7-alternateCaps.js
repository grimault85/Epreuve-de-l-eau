const alternateCaps = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if ((i + 1) % 2 === 0 && str[i].match(/[a-zA-Z]/)) {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}


function transformStr() {
    const str = process.argv[2]
    const result = alternateCaps(str)

    console.log(result)
}

transformStr()