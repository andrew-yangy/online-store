/**
 * Created by andrew.yang on 7/28/2017.
 */

import {Component, HostBinding} from "@angular/core";
import {CartService} from "../../../services/cart.service";

@Component({
    selector: 'cart-popup',
    styleUrls: ["cart-popup.component.css"],
    templateUrl: 'cart-popup.component.html',
    host: {
        '(document:click)': 'onDocumentClick($event)',
    }
})
export class CartPopupComponent{

    @HostBinding("class.visible") isVisible:boolean = false;

    constructor(
        private cartService: CartService
    ) {
    }
    ngOnInit() {
        this.cartService.toggleCartSubject.subscribe(res => {
            this.isVisible = res;
            console.log(res);
        })
    }

    onDocumentClick(event){
        // if (this.isVisible && !this._eref.nativeElement.contains(event.target)){
        //     this.close();
        // }
    }


}