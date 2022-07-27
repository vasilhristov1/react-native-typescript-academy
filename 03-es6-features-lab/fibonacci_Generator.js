// n is the count of numbers in the result sequence
const myFibonacci = (n) => ({
    *[Symbol.iterator]() {
        let i = 0, j = 0;
        for (let counter = 0; counter < n; counter++) {
            yield j;
            [i, j] = [j, (i + j) || 1];
        }
    }
})

// for infinitive count of numbers you can write Infinity instead of 10
for (var e of myFibonacci(10)) {
    console.log(e);
}