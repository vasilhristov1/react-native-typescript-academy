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

for (var e of myFibonacci(10)) {
    console.log(e);
}