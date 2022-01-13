module.exports = function reverse(n) {
    if (n < 0) {
        n = n * -1;
    }
    n = String(n);
    let result = '';
    for (let i = 0; i < n.length; i++) {
        result = n[i] + result;
    }
    result = Number(result);
    return result;
}
