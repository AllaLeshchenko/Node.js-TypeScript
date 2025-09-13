function asyncToUpper(str: string): Promise<string> {
    return new Promise(resolve => {
        const delay = Math.floor(Math.random() * 1000);
        setTimeout(() => resolve(str.toUpperCase()), delay);
    });
}

async function processStringArray(strings: string[]): Promise<void> {
    try {
        const promises: Promise<string>[] = strings.map(s => asyncToUpper(s));
        const results: string[] = await Promise.all(promises);
        console.log("Processing results:", results);
    } catch (error) {
        console.error("Error processing strings:", error);
    }
}

processStringArray(["apple", "banana", "cherry"]);

