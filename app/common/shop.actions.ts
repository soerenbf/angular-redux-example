import { IProduct } from '../product/index'

export interface IShopAction extends Redux.Action {
    product: IProduct;
}

/**
 * ShopActions
 */
export class ShopActions {
    
    static types = {
        ADD_TO_CART: 'ADD_TO_CART',
        REMOVE_FROM_CART: 'REMOVE_FROM_CART'
    };

    static addToCart(product: IProduct): IShopAction {
        return {
            type: this.types.ADD_TO_CART,
            product: product
        }
    }

    static removeFromCart(product: IProduct): IShopAction {
        return {
            type: this.types.ADD_TO_CART,
            product: product
        }
    }
}