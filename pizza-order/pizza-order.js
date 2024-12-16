/// <reference path="./global.d.ts" />
//
// @ts-check

const prices = {
  Formaggio: 10,
  Caprese: 9,
  Margherita: 7,
  ExtraSauce: 1,
  ExtraToppings: 2
};
/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  return [pizza, ...extras].map(e => prices[e]).reduce((a, b) => a + b);
  // Not doing this recursively cause thats just silly
  //let price = 0;
  //price += prices[pizza]
  //switch (pizza) {
  //  case "Formaggio":
  //    price += 10;
  //    break;
  //  case "Caprese":
  //    price += 9;
  //    break;
  //  case "Margherita":
  //    price += 7
  //}
  //for (const extra of extras) {
  //  price += prices[extra]
  //switch (extra) {
  //  case "ExtraSauce":
  //    price += 1;
  //    break;
  //  case "ExtraToppings":
  //    price += 2;
  //}
  //  }
  // return price;
}


/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */

export function orderPrice(pizzaOrders) {
  return pizzaOrders.map(({ pizza, extras }) => pizzaPrice(pizza, ...extras)).reduce((a, b) => a + b, 0);
  //let price = 0;
  //for (const { pizza, extras } of pizzaOrders) {
  //  price += pizzaPrice(pizza, ...extras);
  //}
  //return price;
}






