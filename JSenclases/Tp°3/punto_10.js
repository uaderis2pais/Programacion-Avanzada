function withTimeout(promise, ms) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error('Timeout')), ms);
        promise.then(
            value => {
                clearTimeout(timer);
                resolve(value);
            },
            err => {
                clearTimeout(timer);
                reject(err);
            }
        );
    });
}

function allSettledLite(promises) {
    return Promise.all(promises.map(p =>
        Promise.resolve(p)
            .then(
                value => ({ status: 'fulfilled', value }),
                reason => ({ status: 'rejected', reason })
            )
    ));
}

// Ejemplo de uso1:
console.log('withTimeout:');
withTimeout(new Promise(res => setTimeout(() => res('done'), 100)), 200)
    .then(console.log) // 'done' después de 100ms
    .catch(console.error);


//ejemplo de uso2:
function ok() { return Promise.resolve('ok'); }
function falla() { return Promise.reject('fail'); }
allSettledLite([ok(), falla()]).then(console.log);