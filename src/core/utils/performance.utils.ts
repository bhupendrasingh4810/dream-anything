// performance.utils.ts
export class PerformanceUtils {
    // Track execution time for code blocks
    static measureExecutionTime(callback: Function): number {
        const start = performance.now();
        callback();
        const end = performance.now();
        return end - start;
    }

    // Monitor memory usage
    static getMemoryUsage(): string {
        const memoryUsage = process.memoryUsage();
        return `Heap: ${memoryUsage.heapUsed} / ${memoryUsage.heapTotal} bytes`;
    }

    // Capture performance metrics
    static captureMetrics() {
        console.log(`Memory Usage: ${this.getMemoryUsage()}`);
    }
}
