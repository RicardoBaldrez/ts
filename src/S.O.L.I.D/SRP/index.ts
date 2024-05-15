import { Persistency } from './services/persistency';
import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { ShoppingCart } from './entities/shopping-cart';
import { Product } from './entities/product';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addProduct(new Product('Kratos Funko', 50.9));
shoppingCart.addProduct(new Product('Kratos Shirt', 70.9));
shoppingCart.addProduct(new Product('Kratos pants', 120.9));
// shoppingCart.clear();

console.log(shoppingCart.products);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
