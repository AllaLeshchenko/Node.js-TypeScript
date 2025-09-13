function promise1(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve("Promise 1 fulfilled"), 1000);
    });
}

function promise2(): Promise<string> {
    return new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Error in promise 2")), 1500);
    });
}

function promise3(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve("Promise 3 fulfilled"), 500);
    });
}

async function handlePromises(): Promise<void> {
    try {
        const results = await Promise.all([
            promise1(),
            promise2(), 
            promise3()
        ]);
        console.log("Results:", results);
    } catch (error) {
        console.error("An error was detected while executing promises:", error);
    }
}

handlePromises();
