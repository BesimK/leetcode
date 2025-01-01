function predictPartyVictory(senate: string): string {
    const n = senate.length;
    const radiantQueue: number[] = [];
    const direQueue: number[] = [];

    // Initialize the queues with the positions of each senator
    for (let i = 0; i < n; i++) {
        if (senate[i] === 'R') {
            radiantQueue.push(i);
        } else {
            direQueue.push(i);
        }
    }

    console.log("Initial Radiant Queue:", radiantQueue);
    console.log("Initial Dire Queue:", direQueue);

    // Process until one queue is empty
    let baseIndex = 0;
    while (((radiantQueue.length - baseIndex) > 0) && ((direQueue.length - baseIndex) > 0)) {
        const rIndex = radiantQueue[baseIndex];
        const dIndex = direQueue[baseIndex];
        console.log(`Comparing Radiant Index: ${rIndex} and Dire Index: ${dIndex}`);

        baseIndex += 1;

        // Whichever senator has the smaller index bans the other and lives to fight again
        if (rIndex < dIndex) {
            // Radiant senator bans a Dire senator; Radiant senator comes back after all current senators
            radiantQueue.push(rIndex + n);
            console.log(`Radiant Senator ${rIndex} bans Dire Senator ${dIndex}. Radiant Queue:`, radiantQueue);
        } else {
            // Dire senator bans a Radiant senator; Dire senator comes back
            direQueue.push(dIndex + n);
            console.log(`Dire Senator ${dIndex} bans Radiant Senator ${rIndex}. Dire Queue:`, direQueue);
        }
    }

    // If radiantQueue is empty, Dire wins; otherwise Radiant wins
    const winner = radiantQueue.length - baseIndex > 0 ? 'Radiant' : 'Dire';
    console.log("Final Winner:", winner);
    return winner;
}

// Example test case
const result = predictPartyVictory("RDDRR");
console.log("Final Result:", result);
