import { OnlineStorePage } from './app.po';
import {browser, by, element, protractor} from 'protractor';
let origFn = browser.driver.controlFlow().execute;

browser.driver.controlFlow().execute = function() {
  let args = arguments;
  origFn.call(browser.driver.controlFlow(), function() {
    return protractor.promise.delayed(100);
  });
  return origFn.apply(browser.driver.controlFlow(), args);
};
describe('online-store App', () => {
  let page: OnlineStorePage;

  beforeEach(() => {
    page = new OnlineStorePage();
  });

  it('should display 6 products.', () => {
    page.navigateTo();
    let products = element.all(by.css(".image-container"));
    expect(products.count()).toEqual(6);
  });
  it('should display cart popup.', () => {
    page.navigateTo();
    let cartMenu = element(by.css('.header-cart'));
    let cartPopup = element(by.tagName("cart-popup"));
    cartMenu.click();
    expect(cartPopup.isDisplayed());
  });
  it('should be able to add product to cart from image hover button.', () => {
    page.navigateTo();
    let cartButton = element.all(by.cssContainingText('.button','Add To Cart')).first();
    let cartMenu = element(by.css('.header-cart'));
    cartButton.click();
    cartMenu.click();
    let cartPopup = element.all(by.css(".pop-cart-item"));
    expect(cartPopup.count()).toEqual(1);
  });
  it('should be able to navigate to product page from image hover button.', () => {
    page.navigateTo();
    let productButton = element.all(by.cssContainingText('.button','View Details')).first();
    productButton.click();
    expect(browser.getCurrentUrl()).toBe('http://localhost:49152/product/1');
  });
  it('should be able to remove product from cart popup.', () => {
    page.navigateTo();
    let cartButton = element.all(by.cssContainingText('.button','Add To Cart')).first();
    let cartMenu = element(by.css('.header-cart'));
    cartButton.click();
    cartMenu.click();
    let removeButton = element.all(by.css('.cart-remove'));
    removeButton.click();
    let cartPopup = element.all(by.css(".pop-cart-item"));
    expect(cartPopup.count()).toEqual(0);
  });
  it('should be able to navigate to cart page from cart popup.', () => {
    page.navigateTo();
    let cartButton = element.all(by.cssContainingText('.button','Add To Cart')).first();
    let cartMenu = element(by.css('.header-cart'));
    cartButton.click();
    cartMenu.click();
    let goCartButton = element.all(by.cssContainingText('.button','View Cart')).first();
    goCartButton.click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/cart');
  });
  it('should be able to add product to cart from product page.', () => {
    page.navigateToProduct();
    let cartButton = element(by.cssContainingText('.product-cart-button','Add to cart'));
    cartButton.click();
    let cartMenu = element(by.css('.header-cart'));
    cartMenu.click();
    let cartPopup = element.all(by.css(".pop-cart-item"));
    expect(cartPopup.count()).toEqual(1);
  });
  it('should be able to remove product from cart page.', () => {
    page.navigateToProduct();
    element(by.cssContainingText('.product-cart-button','Add to cart')).click();
    page.navigateToCart();
    let removeButton = element.all(by.css('.item-remove'));
    removeButton.click();
    let cartText = element(by.css(".cart-page-content h4"));
    expect(cartText.getText()).toEqual('Your cart is empty.');
  });
});
