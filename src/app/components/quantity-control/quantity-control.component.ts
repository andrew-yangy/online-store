/**
 * Created by andrew.yang on 7/31/2017.
 */
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'quantity-control',
    styles: [`
    :host {
      height: 56px;
      display: inline-block;
    }
    .number, 
    .actions {
      height: 56px;
      width: 50px;
      float: left;
      text-align: center;
    }
    .number {
      line-height: 56px;
      background: #eee;
      color:#7b7b7b;
    }
    .actions {
      margin-left: 2px;
      width: 27px;
    }
    .actions div {
      height: 27px;
      width: 27px;
      line-height: 27px;
      background: #dadada;
      font-weight: bold;
      color: #7d7d7d;
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
  `],
    template: `
    <div class="number noselect">
        {{quantity}}
    </div>
    <div class="actions">
        <div (click)="plusOne()" class="noselect">+</div>
        <div (click)="minusOne()" class="noselect">-</div>
    </div>
`
})
export class QuantityControlComponent implements OnInit {
    @Input() quantity:number = 1;
    @Output() change = new EventEmitter<number>();
    constructor() { }

    ngOnInit() { }
    plusOne = () =>{
        if (this.quantity < 1000){
            this.quantity++;
            this.change.emit(this.quantity);
        }
    };
    minusOne = () => {
        if (this.quantity > 1){
            this.quantity--;
            this.change.emit(this.quantity);
        }
    }
}