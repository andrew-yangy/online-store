import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/products.service";
import {Product} from "../../model/product";

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
    public products:Array<Product>;
    constructor(
         private productService:ProductService
    ) { }

    ngOnInit() {
        this.load();
    }
    load = () => {
       this.productService.getProducts('./assets/mock-data/products.json')
            .subscribe(res => {
                this.products = res;
            })
    }
}
