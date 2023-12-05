function resolvePromise(promise, promiseState){
    console.log("hej")
    promiseState.promise = promise;
    promiseState.data = null;
    promiseState.error = null;

    if(promise !== null){
        promise.then(dataPromise).catch(errorPromise);
    }

    function dataPromise(data){
        if(promiseState.promise === promise){
            return promiseState.data = data;
        }
    }

    function errorPromise(error){
        if(promiseState.promise === promise){
            return promiseState.error = error;
        }
    }
}

export default resolvePromise