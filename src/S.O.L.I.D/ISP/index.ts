/**
 * Interface segregation principle (Princípio da segregação de Interface)
 * Os clientes não devem ser forçados a depender de types, interfaces ou membros
 * abstratos que não utilizam
 */

import { Persistency } from './services/persistency';
import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { ShoppingCart } from './classes/shopping-cart';
import { Product } from './classes/product';
import { FiftyPercentDiscount } from './classes/discount';
import { EnterpriseCustomer } from './classes/customer';

const percentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(percentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
// const individualcustomer = new IndividualCustomer(
//   'Ricardo',
//   'Baldrez',
//   '386.495238-70',
// );
const enterpriseCustomer = new EnterpriseCustomer(
  'Dasa Exp',
  '61.486.650/0725-08',
);
const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpriseCustomer,
);

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
