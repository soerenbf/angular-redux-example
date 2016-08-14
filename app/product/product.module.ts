import { productsComponent } from './products.component'
import { productComponent } from './product.component'

namespace shop.product {
    export let moduleName: string = 'app.product';

    angular
        .module(moduleName, [])
        .component('fedProducts', productsComponent)
        .component('fedProduct', productComponent);
}

export var productModule: string = shop.product.moduleName;