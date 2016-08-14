import * as _ from 'lodash';

import { IProduct } from '../product/index'
import { ShopActions, IShopAction }  from './shop.actions'

export function shopReducer(state: IProduct[] = [], action: IShopAction) {
    switch(action.type) {
        case ShopActions.types.ADD_TO_CART:
            return state.concat([action.product]);
        case ShopActions.types.REMOVE_FROM_CART:
            break;
        default:
            return state;
    }
}