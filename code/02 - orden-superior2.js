function plusCreator(x) {
    return function(y) {
        return x + y
    }
}
const plusTen2 = plusCreator(10);
const twice = f => x => f(f(x))
plusTwenty = twice(plusTen2)
    [2, 3, 6, 7].map(plusTwenty);
