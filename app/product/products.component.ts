import { IProduct } from './product'

import { IShopService } from '../common/index'

/**
 * ProductsController
 */
class ProductsController implements ng.IComponentController {

    static $inject = ['ShopService', 'store'];

    products: IProduct[] = [];
    productsInCart: number = 0;

    constructor(
        private shopService: IShopService,
        private store: Redux.Store<IProduct[]>
    ) {}

    $onInit() {
        this.products = this.products.concat([
            {id: 1, name: 'Flødeskum', price: 15},
            {id: 2, name: '60 bajere', price: 300},
            {id: 3, name: 'Ubrugelig WebStorm licens', price: 1000}
        ]);
    }

    addToCart(product: IProduct) {
        this.shopService.addToCart(product);
    }
}

export let productsComponent: ng.IComponentOptions = {
    controller: ProductsController,
    template: `
        <fed-product
            class="product"
            ng-repeat="product in $ctrl.products"
            product="product"
            on-add="$ctrl.addToCart(product)"
        ></fed-product>
    `
}