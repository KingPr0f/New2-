function averageNum(numarray) {
    if (!Array.isArray || numarray.length === 0) {
        return 0;
    }
    const sum = numarray.reduce((acc,num) => acc + num, 0);
    const average = sum / numarray.length;
    return average;
}

const numberArray = [22,33,44,55,77];
const result = averageNum(numberArray);
console.log('Average is ', result);