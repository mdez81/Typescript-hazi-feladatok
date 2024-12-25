import { OrderState } from '../enums/OrderState';
import { Product } from "../classes/Product";

export class Order {

    private _orderId: string;
    private _productsList: Product[] = [];
    private _orderState : OrderState;

    
    constructor(orderId: string, productsList: Product[]){
        this._orderId = orderId;
        this._productsList = productsList;
        this._orderState = OrderState.new;
    }

   get orderId(): string {
    return this._orderId;
   }

   set orderId(newOrderId: string){
    if(newOrderId && newOrderId.length > 0){
        this.orderId = newOrderId;
    }
    else {
        throw new Error("Invalid data");
        }
   }

   get productsList(): Product[] {
        return this._productsList;
   }

   set prodoctsList(newProductList: Product[]){
    if(newProductList && newProductList.length > 0){
        this._productsList = newProductList;
    }
    else {
        throw new Error("Invalid data");
        }
   }

   get orderSate(): OrderState {
        return this._orderState;
   }

   set orderSate(newOrderState: OrderState){
         if(newOrderState && newOrderState.length > 0){
        this._orderState = newOrderState;
    }
    else {
        throw new Error("Invalid data");
        }
   }

   sumOrders(): number{
        return  this._productsList.reduce((sum, product) => sum + product.price, 0);
   }
}