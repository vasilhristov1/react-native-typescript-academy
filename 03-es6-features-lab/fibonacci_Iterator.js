// n is the count of numbers in the result sequence
const myFibonacci = (n) => ({
    [Symbol.iterator]() {
        let counter = 1;
        let i = 0, j = 0;
        return {
            next() {
                if (counter++ <= n) {
                    [i, j] = [j, (i + j) || 1];
                    return {
                        value: j, 
                        done: false
                    }
                } else {
                    return { 
                        done: true 
                    }
                }
            }
        }
    }
});

// for infinitive count of numbers you can write Infinity instead of 10
for (var e of myFibonacci(Infinity)) {
    console.log(e);
}