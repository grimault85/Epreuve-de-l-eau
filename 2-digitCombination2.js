function combination2digits() {
    for (let i = 0; i <= 99; i++) {
        for (let j = i + 1; j <= 99; j++) {
            console.log(`${i < 10 ? '0' + i : i} ${j < 10 ? '0' + j : j}`);
        }
    }
}

combination2digits()