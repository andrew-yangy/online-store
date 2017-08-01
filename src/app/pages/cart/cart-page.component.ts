/**
 * Created by andrew.yang on 7/31/2017.
 */
import { Component } from '@angular/core';
import {CartBaseComponent} from "./cart-base.component";
import {CartService} from "../../services/cart.service";

@Component({
    selector: 'app-cart-page',
    styleUrls: ["cart-page.component.css"],
    templateUrl: 'cart-page.component.html'
})
export class CartPageComponent extends CartBaseComponent{
    constructor(protected cartService: CartService,) {
        super(cartService);
    }

    ngOnInit() {

    }
    changeQuantity = (cart,quantity) => {
        cart.quantity = quantity;
        this.cartService.reloadCart(this.cartList);
    }
}