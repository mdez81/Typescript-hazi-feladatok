"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = Log;
function Log(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const result = originalMethod.apply(this, args);
        console.log(`[${propertyKey}] Input:`, args);
        console.log(`[${propertyKey}] Output:`, result);
        return result;
    };
    return descriptor;
}
