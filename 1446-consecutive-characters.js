const maxPower = (str) => {
    let max = 1;
    let power = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            power++;
        } else {
            max = Math.max(power, max);
            power = 1;
        }
    }

    return max;
};