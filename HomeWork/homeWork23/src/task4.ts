function delayWithValue(ms: number): Promise<number> {
    return new Promise(resolve => {
        setTimeout(() => resolve(ms), ms);
    });
}

async function runDelays(numbers: number[]): Promise<void> {
    try {
        const promises = numbers.map(n => delayWithValue(n));
        const results = await Promise.all(promises);
        console.log("All promises are complete. Results:", results);
    } catch (error) {
        console.error("Error while executing delays:", error);
    }
}

runDelays([1000, 500, 2000, 4500, 1500]);
