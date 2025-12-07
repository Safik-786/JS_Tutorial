class CustomPromise {
    static all(promises) {
        return new Promise((resolve, reject) => {
            if (promises.length === 0) {
                resolve([])
            }

            let results = []
            let completed = 0;

            promises.forEach((promise, index) => {
                promise.then((result) => {
                    results[index] = result
                    completed++;
                    if (completed === promises.length) {
                        resolve(results)
                    }
                })
                    .catch((error) => {
                        reject(error)
                        return
                    })
            })

        })
    }
}

CustomPromise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)])
    .then((result) => {
        console.log(result)
    })


