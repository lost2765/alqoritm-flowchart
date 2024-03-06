function sumFunc(num) {
    return parseInt(num % 10) + parseInt((num % 100) / 10) + parseInt(num / 100)
}

console.log(sumFunc(999));