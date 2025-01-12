"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanManager = void 0;
class LoanManager {
    constructor() {
        this.items = new Map();
    }
    addItem(item) {
        if (item.id) {
            this.items.set(item.id, item);
        }
    }
    getItem(id) {
        return this.items.get(id);
    }
    borrowItem(itemId, borrowerId, borrowFunc) {
        return borrowFunc(itemId, borrowerId);
    }
    returnItem(itemId, borrowerId, borrowFunc) {
        return borrowFunc(itemId, borrowerId);
    }
}
exports.LoanManager = LoanManager;
