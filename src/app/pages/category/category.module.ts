/**
 * Created by andrew.yang on 7/27/2017.
 */
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {categoryRoutes} from "./category.routes";
import {SharedModule} from "../../shared/shared.module";
import {CategoryComponent} from "./category.component";
import {ProductService} from "../../services/products.service";
import {CurrencyPipe} from "@angular/common";
@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(categoryRoutes)
    ],
    declarations: [
        CategoryComponent
    ],
    providers: [
        ProductService
    ]
})
export class CategoryModule { }