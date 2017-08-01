/**
 * Created by andrew.yang on 7/31/2017.
 */
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'quantity-control',
    styles: [`
    :host {
      height: 58px;
      display: inline-block;
    }
    .number, 
    .actions {
      height: 58px;
      width: 50px;
      float: left;
    }
    .input-style {
      text-align: center;
      width:50px;
      line-height: 58px;
      background: #eee;
      color:#7b7b7b;
      border: 0;
    }
    .actions {
      margin-left: 2px;
      width: 29px;
    }
    .actions div {
      height: 29px;
      width: 29px;
      line-height: 29px;
      background: #dadada;
      font-weight: bold;
      color: #7d7d7d;
      text-align: center;
    }
    .actions div:first-child {
      margin-bottom: 2px;
    }
    .actions div:hover {
      cursor: pointer;
      background: #333;
      color: white;
    }
    .noselect {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 
    }
  `],
    template: `
    <div class="number">
        <input class="input-style" type="number" [ngModel]="quantity" (ngModelChange)="onChange.emit($event)">
    </div>
    <div class="actions">
        <div (click)="plusOne()" class="noselect">+</div>
        <div (click)="minusOne()" class="noselect">-</div>
    </div>
`
})
export class QuantityControlComponent implements OnInit {
    @Input() quantity: number;
    @Output() onChange = new EventEmitter<number>();
    constructor() { }

    ngOnInit() { }
    plusOne = () =>{
        if (this.quantity < 1000){
            this.quantity++;
            this.onChange.emit(this.quantity);
        }
    };
    minusOne = () => {
        if (this.quantity > 1){
            this.quantity--;
            this.onChange.emit(this.quantity);
        }
    }
}