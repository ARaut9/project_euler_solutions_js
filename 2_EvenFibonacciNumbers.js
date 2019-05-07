function generateFibonacciSequence(maximumNum) {
    let num1 = 1;
    let num2 = 2;
    let fibonacciSequence = [num1, num2];
    while(num1 < maximumNum && num2 < maximumNum) {
        temp = num2;
        num2 += num1;
        num1 = temp;
        fibonacciSequence.push(num2);
    }

    return fibonacciSequence;
}

let sum = 0;

const fibonacciSequenceArray = generateFibonacciSequence(4000000);

for (const number of fibonacciSequenceArray) {
    if (number % 2 === 0) {
        sum += number;
    }
}

console.log(sum);