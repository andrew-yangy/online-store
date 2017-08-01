import { browser, by, element } from 'protractor';

export class OnlineStorePage {
  navigateTo() {
    return browser.get('/');
  }
  navigateToProduct() {
    return browser.get('/product/1');
  }
  navigateToCart() {
    return browser.get('/cart');
  }
  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
