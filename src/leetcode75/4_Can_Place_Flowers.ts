function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let count = 0;
    let length = flowerbed.length;

    for (let i = 0; i < length; i++) {
        if (flowerbed[i] === 0 &&
            (i === 0 || flowerbed[i - 1] === 0) &&
            (i === length - 1 || flowerbed[i + 1] === 0)) {

            flowerbed[i] = 1;
            count++;
        }
    }

    return count >= n;
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([0, 0, 1, 0, 0], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));