import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/products.service";
import {Product} from "../../model/product";
import {CartService} from "../../services/cart.service";

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
    public products:Array<Product>;
    constructor(
         private productService:ProductService,
         private cartService:CartService
    ) { }

    ngOnInit() {
        this.load();
    }
    load = () => {
       this.productService.getProducts('./assets/mock-data/products.json')
            .subscribe(res => {
                this.products = res;
            })
    };
    addToCart = (product) => {
        this.cartService.addToCart({product,quantity:1})
    }
}
