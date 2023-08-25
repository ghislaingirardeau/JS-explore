//? CUSTOM YOUR OWN EVENT

import { EventEmitter } from "events";

const emitter = new EventEmitter();

//* you can add multiple on

emitter.on("order-pizza", (size, price) => {
  console.log(`Your pizza is ordered ! size: ${size}, price:${price}`);
});

emitter.on("order-pizza", (size) => {
  size === "XL" ? console.log(`You get free drink`) : console.log(`No extras`);
});

// add params after first agruments
emitter.emit("order-pizza", "XL", "24€");

emitter.emit("order-pizza", "S", "12€");

//* CUSTOM EVENT INSIDE A CLASS

/* class PizzaShop extends EventEmitter {
  constructor() {
    super(); // use with extends
    this.orderNumber = 0;
  }
  order() {
    this.orderNumber++;
    this.emit("order", "XL");
  }
  displayOrder() {
    console.log(this.orderNumber);
  }
}

const pizzaShop = new PizzaShop();

pizzaShop.on("order", (size) => {
  console.log(`Your ${size} pizza is ordered !`);
});

pizzaShop.order();

pizzaShop.displayOrder(); */
