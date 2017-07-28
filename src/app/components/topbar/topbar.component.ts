/**
 * Created by andrew.yang on 7/28/2017.
 */
import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
    selector: 'top-bar',
    template: `    
    <div class="main-header">
        <div class="header-menu">
            <div class="col-md-4">
                <img class="header-logo-image" src="../assets/imgs/logo.png" alt="Hero">
            </div>
            <div class="header-nav-wrapper">
                <ul class="header-nav">
                    <li class="header-nav-item">
                        <a routerLink="/">HOME</a>
                    </li>
                    <li class="header-nav-item">
                        <a routerLink="/">SHOP<span class="fa fa-caret-down"></span></a>
                    </li>
                    <li class="header-nav-item">
                        <a routerLink="/">JOURNAL</a>
                    </li>
                    <li class="header-nav-item">
                        <a routerLink="/">MORE<span class="fa fa-caret-down"></span></a>
                    </li>
                </ul>
            </div>
            <div class="header-cart-wrapper">
                <div class="header-cart">
                    <div class="header-cart-item">
                        <a href="" (click)="toggleCartPopup($event)">MY CART<span class="fa fa-caret-down"></span></a>
                    </div>
                </div>
            </div>
        </div>
        <cart-popup></cart-popup>
    </div>
`
})
export class TopbarComponent implements OnInit {
    constructor(
        private cartService: CartService
    ) { }

    ngOnInit() { }
    toggleCartPopup = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.cartService.toggleCart()
    }
}