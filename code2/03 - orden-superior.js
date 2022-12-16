const plusTen = x => x + 10;
[2, 3, 6, 7].map(plusTen);
const isBig = x => x > 1000;
[2, 30000, 6, 7666].filter(isBig);
const map2 = (collection, func) => {
    const result = [];
    for (let each of collection) {

        result.push(func(each))
    }
    return result;
}
map2([2, 3, 6, 7], plusTen)
map2([2, 3, 6, 7], x => x * x + 10)


