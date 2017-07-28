/**
 * Created by andrew.yang on 7/28/2017.
 */
import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class CartService {
    public toggleCartSubject = new BehaviorSubject(false);
    toggleCart = () => {
        this.toggleCartSubject.next(!this.toggleCartSubject.getValue());
    }
}