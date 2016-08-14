import { cartComponent } from './cart.component'

namespace shop.cart {
    export let moduleName: string = 'app.cart';

    angular
        .module(moduleName, [])
        .component('fedCart', cartComponent);
}

export var cartModule: string = shop.cart.moduleName;