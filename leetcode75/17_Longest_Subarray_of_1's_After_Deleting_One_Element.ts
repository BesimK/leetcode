function longestSubarray(nums: number[]): number {
    let left = 0;
    let zeroCount = 0;
    let maxLength = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) zeroCount++;  // Sıfır gördüğümüzde sayacı artır

        // Eğer pencere içinde birden fazla sıfır varsa, sol işaretçiyi sağa kaydır
        while (zeroCount > 1) {
            if (nums[left] === 0) zeroCount--;  // Sol uçtaki sıfırı çıkart
            left++;  // Pencereyi sola kaydır
        }

        // Her adımda pencerenin uzunluğunu hesapla
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength - 1;  // Bir sıfır silineceği için 1 çıkartıyoruz
}

