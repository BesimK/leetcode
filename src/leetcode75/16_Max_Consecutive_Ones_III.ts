function longestOnes(nums: number[], k: number): number {
    let left = 0;  // Pencerenin sol tarafını takip ediyoruz
    let maxLength = 0;  // En uzun ardışık 1'lerin sayısını saklıyor
    let zeroCount = 0;  // Pencere içinde bulunan sıfırların sayısı

    for (let right = 0; right < nums.length; right++) {
        // Sağ tarafa pencereyi kaydır
        if (nums[right] === 0) {
            zeroCount++;  // Eğer sıfır gördüysek, sıfır sayısını artır
        }

        // Pencere içindeki sıfır sayısı k'dan büyükse, sol tarafa kaydır
        while (zeroCount > k) {
            if (nums[left] === 0) {
                zeroCount--;  // Sol uçtaki sıfırı çıkar
            }
            left++;  // Pencereyi sola kaydır
        }

        // En uzun pencereyi takip et
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // 6
console.log(longestOnes([1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // 6
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 3)); // 10
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 0)); // 3