import { IProduct } from './product'

/**
 * ProductController
 */
class ProductController implements ng.IComponentController {
    
    product: IProduct;
    onAdd: (productObject: Object) => void;

    addToCart() {
        if(this.onAdd) {
            this.onAdd({product: this.product});
        }
    }
}

export let productComponent: ng.IComponentOptions = {
    controller: ProductController,
    bindings: {
        product: '<',
        onAdd: '&'
    },
    template: `
        <div><b>{{::$ctrl.product.name}}</b></div>
        <div>{{::$ctrl.product.price}} kr</div>
        <button ng-click="$ctrl.addToCart()">Add to cart</button>
    `
}