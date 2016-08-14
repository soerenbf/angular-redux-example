import { ShopActions } from './shop.actions'

import { IProduct } from '../product/index'

export interface IShopService {
    addToCart: (product: IProduct) => void;
}

/**
 * ShopService
 */
export class ShopService implements IShopService {

    static $inject = ['store'];

    constructor(private store: Redux.Store<IProduct[]>) {}

    addToCart(product: IProduct) {
        this.store.dispatch(ShopActions.addToCart(product));
    }
}