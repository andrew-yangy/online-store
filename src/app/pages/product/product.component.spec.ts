import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import {SharedModule} from "../../shared/shared.module";
import {ProductService} from "../../services/products.service";
import {CartService} from "../../services/cart.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {appRoutes} from "../../app.routes";
import {RouterTestingModule} from "@angular/router/testing";

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

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
        ProductComponent
      ],
      providers: [CartService,ProductService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
