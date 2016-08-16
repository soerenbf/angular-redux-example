import { IProduct } from '../product/index'

/**
 * CartController
 */
class CartController implements ng.IComponentController {

    static $inject = ['store'];

    products: IProduct[] = [];
    totalPrice: number = 0;

    constructor(
        private store: Redux.Store<IProduct[]>
    ) {}

    $onInit() {
        this.store.subscribe(this.handleStateChange);
    }

    private handleStateChange = () => {
        this.products = this.store.getState();  
        this.totalPrice = this.products.reduce((prev: number, current: IProduct) => prev + current.price, 0);
    }
}

export let cartComponent: ng.IComponentOptions = {
    controller: CartController,
    template: `
        <h4>Your shopping cart:</h4>
        <div>Items: <span class="cart__items">{{$ctrl.products.length}}</span></div>
        <div>Total price: <span class="cart__price">{{$ctrl.totalPrice}} kr</span></div>
    `
}