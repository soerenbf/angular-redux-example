/**
 * ShopController
 */
class ShopController implements ng.IComponentController {
    constructor() {}
}

export let shopComponent: ng.IComponentOptions = {
    controller: ShopController,
    template: `
        <fed-cart class="cart"></fed-cart>
        <h1>Welcome to this awesome shop!</h1>
        <fed-products></fed-products>
    `
}