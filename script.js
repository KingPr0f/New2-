function AverageNum(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
}
const sum = numbers.reduce((acc, num) => acc + num, 0);
const average = sum / numbers.length;
return average;
}

const numbers = [11, 22, 33, 44, 55];
result = AverageNum(numbers);
console.log("Average: ", result);
