import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {Product} from "../../model/product";
import {SharedModule} from "../../shared/shared.module";
import {CartService} from "../../services/cart.service";
import {ProductService} from "../../services/products.service";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpModule} from "@angular/http";
import {CartPageComponent} from "./cart-page.component";

describe('Cart Page', () => {
  let component: CartPageComponent;
  let fixture: ComponentFixture<CartPageComponent>;
  let products: Product[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        SharedModule,
        RouterTestingModule
      ],
      declarations: [
        CartPageComponent
      ],
      providers: [CartService,ProductService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    products = [
      {
        "title": "1",
        "price": 40
      },
      {
        "title": "2",
        "price": 28
      }
    ];
  });

  it('change quantity.', () => {
    component.cartList = [{product:products[0],quantity:1},{product:products[1],quantity:2}];
    component.changeQuantity(component.cartList[0],2);
    expect(component.cartList).toEqual([{product:products[0],quantity:2},{product:products[1],quantity:2}]);
    expect(component.totalPrice).toEqual(136);
  });
  it('change quantity.', () => {
    component.cartList = [{product:products[0],quantity:5},{product:products[1],quantity:2}];
    component.changeQuantity(component.cartList[1],1);
    expect(component.cartList).toEqual([{product:products[0],quantity:5},{product:products[1],quantity:1}]);
    expect(component.totalPrice).toEqual(228);
  });
  it('remove item.', () => {
    component.cartList = [{product:products[0],quantity:2},{product:products[1],quantity:2}];
    component.changeQuantity(component.cartList[1],3);
    component.removeFromCart(1);
    expect(component.cartList).toEqual([{product:products[0],quantity:2}]);
    expect(component.totalPrice).toEqual(80);
  });
});
