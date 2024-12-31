function largestAltitude(gain: number[]): number {
    let max = 0;
    let altitude = 0;
    for (const g of gain) {
        altitude += g;
        max = Math.max(max, altitude);
    }
    return max;
};