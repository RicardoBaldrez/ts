/**
 * Módulos de alto nível não devem depender de módulos de baix nível. Ambos devem depender de abstrações
 * Dependa de abstrações, não de implementações.
 * Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações
 *
 * Classes de baixo nível são classes que executam tarefas (detalhes)
 * Classes de alto nível são classes que gerenciam as classes de baixo nível
 */

import { Persistency } from './services/Persistency/persistency';
// import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { ShoppingCart } from './classes/shopping-cart';
import { Product } from './classes/Product/product';
import { FiftyPercentDiscount } from './classes/discount';
import { EnterpriseCustomer } from './classes/customer';
import { MessagingProtocol } from './classes/interfaces/messaging-protocol';

const percentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(percentDiscount);
// const messaging = new Messaging();
const persistency = new Persistency();
const enterpriseCustomer = new EnterpriseCustomer(
  'Dasa Exp',
  '61.486.650/0725-08',
);

class MessagingMock implements MessagingProtocol {
  sendMessage(): void {
    console.log('The message was send by MOCK');
  }
}
const messagingMock = new MessagingMock();

const order = new Order(
  shoppingCart,
  messagingMock,
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
