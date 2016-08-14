import ngRedux from 'ng-redux';
import { createStore } from 'redux'

import { shopComponent } from './app.component';

import { commonModule, shopReducer } from './common/index';
import { productModule } from './product/index';
import { cartModule } from './cart/index';

namespace shop {
    export var app = 'app';

    angular
        .module(app, [
            commonModule,
            productModule,
            cartModule
        ])
        .component('fedShop', shopComponent)
        .constant('store', createStore(shopReducer));
}

export var app = shop.app;
