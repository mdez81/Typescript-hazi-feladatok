
export function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: any[]) {
      const result = originalMethod.apply(this, args); 
      console.log(`[${propertyKey}] Input:`, args); 
      console.log(`[${propertyKey}] Output:`, result); 
      return result; 
    };
  
    return descriptor;
  }