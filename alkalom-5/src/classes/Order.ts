import { OrderState } from '../enums/OrderState';
import { Product } from "./Product";

export class Order {

    protected _orderId: string;
    protected _productsList: Product[] = [];
    protected _orderState : OrderState;



    constructor(orderId: string, productList: Product[]){
        this._orderId = orderId;
        this._productsList = productList;
        this._orderState = OrderState.new;
    }

   get orderId(): string {
    return this.orderId;
   }

   set orderId(newOrderId: string){
    this.orderId = newOrderId;
   }

   get productsList(): Product[] {
    return this.productsList;
   }

   set prodoctsList(newProductList: Product[]){
    this.prodoctsList = newProductList;
   }

   get orderSate(): string {
    return this.orderSate;
   }

   set orderSate(newOrderStae: string){
    this.orderSate = newOrderStae;
   }

  
   sumOrders(): number{
    return  this.prodoctsList.reduce((sum, product) => sum + product.price, 0);
   }


}