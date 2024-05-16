// Open/Closed principle
// Entidades devem estar abertas para extensão, mas fechadas para modificação

import { Persistency } from './services/persistency';
import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { ShoppingCart } from './classes/shopping-cart';
import { Product } from './classes/product';
import { FiftyPercentDiscount } from './classes/discount';

const percentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(percentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addProduct(new Product('Kratos Funko', 50.9));
shoppingCart.addProduct(new Product('Kratos Shirt', 70.9));
shoppingCart.addProduct(new Product('Kratos pants', 120.9));
// shoppingCart.clear();

console.log(shoppingCart.products);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
