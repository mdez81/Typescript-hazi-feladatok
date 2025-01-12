export class LoanManager<T>{

    private items: Map<string, T> = new Map();

    addItem(item: T):void {
        if((item as any).id){
            this.items.set((item as any).id, item);
        }
    }

    getItem(id: string): T  | undefined {
        return this.items.get(id);
    }

    borrowItem(itemId: string, borrowerId: string, borrowFunc:(itemId: string, borrowerId: string) => boolean): boolean{
        return borrowFunc(itemId, borrowerId);
    }

    returnItem(itemId: string, borrowerId: string, borrowFunc:(itemId: string, borrowerId: string) => boolean): boolean{
        return borrowFunc(itemId, borrowerId);
    }


}