function result (input) {
    input = input.sort((a, b) => a - b);
    if (input.length % 2 !==0) {
        return input[Math.floor(input.length / 2)];
    } else {
        let mid1 = input[input.length / 2];
        let mid2 = input[input.length / 2 - 1];
        return (mid1 + mid2) /2;
    }
}

const input = [8, 7, 7, 9, 5, 4, 2, 9];
console.log(result(input));