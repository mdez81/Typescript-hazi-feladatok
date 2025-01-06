
export function Log(target:any, propertyKey: string, descriptor: PropertyDescriptor){

    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]){
        console.log(`Method: ${propertyKey} called with arguments ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    }
}