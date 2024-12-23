"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderState = void 0;
var OrderState;
(function (OrderState) {
    OrderState[OrderState["new"] = 0] = "new";
    OrderState[OrderState["under_processing"] = 1] = "under_processing";
    OrderState[OrderState["delevered"] = 2] = "delevered";
})(OrderState || (exports.OrderState = OrderState = {}));
