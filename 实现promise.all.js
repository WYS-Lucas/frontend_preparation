function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject(new TypeError("Argument is not array."));
        }

        const results = [];
        let completed = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(value => {
                results[index] = value;
                completed++;

                if (completed === promises.length) {
                    resolve(results);
                }
            }).catch(error => {
                reject(error);
            });
        });
        
        if (promises.length === 0) {
            resolve(promises);
        }
    });


}