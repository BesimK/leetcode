function asteroidCollision(asteroids: number[]): number[] {
    let l = 0;

    while (l < asteroids.length - 1) {
        if (asteroids[l] > 0 && asteroids[l + 1] < 0) {
            if (Math.abs(asteroids[l]) === Math.abs(asteroids[l + 1])) {
                asteroids.splice(l, 2);
                l = 0;
            } else if (Math.abs(asteroids[l]) > Math.abs(asteroids[l + 1])) {
                asteroids.splice(l + 1, 1);
                l = 0;
            } else {
                asteroids.splice(l, 1);
                l = 0;
            }
        }

    }

    return asteroids;
};