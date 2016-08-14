import { ShopService } from './shop.service'

namespace shop.common {
    export let moduleName: string = 'app.common';

    angular
        .module(moduleName, [])
        .service('ShopService', ShopService);
}

export var commonModule: string = shop.common.moduleName;