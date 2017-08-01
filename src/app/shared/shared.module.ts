/**
 * Created by andrew.yang on 7/27/2017.
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {QuantityControlComponent} from "../components/quantity-control/quantity-control.component";
@NgModule({
    imports:[
        CommonModule,
        FormsModule,
    ],
    declarations:[
        QuantityControlComponent
    ],
    exports:[
        CommonModule,
        FormsModule,
        QuantityControlComponent
    ]
})

export class SharedModule {

}