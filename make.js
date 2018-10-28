function make (...t){

    const a = [];

    function g(fun){
        if (typeof fun == 'function'){
            const res = a.reduce(fun, 0);
            return res;
        }
        a.push(...arguments);
        return g;
    }
    return g(...t);
}
