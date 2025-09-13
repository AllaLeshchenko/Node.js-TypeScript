function task1(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task 1 completed"), 1000);
    });
}

function task2(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task 2 completed"), 1500);
    });
}

function task3(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task 3 completed"), 500);
    });
}

async function runSequentially(): Promise<void> {
    try {
        const result1 = await task1();
        console.log("Result 1: ", result1);

        const result2 = await task2();
        console.log("Result 2: ", result2);

        const result3 = await task3();
        console.log("Result 3: ", result3);

        console.log("All tasks completed sequentially");
    } catch (error) {
        console.error("Error while performing tasks:", error);
    }
}

runSequentially();
