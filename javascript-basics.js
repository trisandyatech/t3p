/**
 * Shop Keeper Approach
 * Shop Keeper (SK)
 * Customer (CU)
 */

let itemName;
console.log("Type and value of itemName", typeof itemName, itemName);
const APPLE_PRICE = 20;
const ORANGE_PRICE = 10.5;
const isShopOpened = true;
/**
 * Variable naming standards
 * - should be camelCase
 * - should not contain spaces
 * - should not start with number
 * - should not contain special characters (-*&%#) except `_`
 * - should be meaningful
 */
console.log({ itemName });

/**
 * Customer came and asked for Apple
 */

itemName = "Apple";

console.log({ itemName });

/**
 * Primitive Types
 * - string
 * - number
 * - boolean
 * - undefined
 * - null
 */

console.log(typeof itemName); // string
console.log(typeof APPLE_PRICE); // number
console.log(typeof ORANGE_PRICE); // number
console.log(typeof isShopOpened); // boolean

/**
 * CU: Asked for Apple price
 */
console.log({ APPLE_PRICE });

/**
 * SK: How many Apples you want?
 * CU: Wanted 5 Apples
 */
let applesCount = 5;

console.log({ applesCount });

/**
 * CU: What is the total price ?
 */

/**
 * JavaScript arthmetic operations
 * Multiplication: *
 * Addition: +
 * Subtraction: -
 * Division: /
 * Reminder (Modulo): %
 */
let priceOfApples = APPLE_PRICE * applesCount; // Multiplication expression

console.log({ priceOfApples });

/**
 * SK: Do you want anything else?
 * CU: I want Oranges
 */

let orangeItemName = "Orange";

/**
 * CU: What is the price of Oranges
 */

console.log({ ORANGE_PRICE });

/**
 * SK: How many oranges you want?
 * CU: 5
 */
let orangesCount = 5;
console.log({ orangesCount });

/**
 * CU: What is the total price for both Apples and Oranges
 */

let priceOfOranges = ORANGE_PRICE * orangesCount;

console.log({ priceOfOranges });

let totalPrice = priceOfApples + priceOfOranges;

console.log({ totalPrice });

/**
 * CU: Is there any discount?
 * SK: I can give 10% discount and here is the updated price
 */

// 10% of totalPrice
let discountPrice = (10 / 100) * totalPrice;
console.log({ discountPrice });

/**
 * SK: Here is the final price
 */

let finalPrice = totalPrice - discountPrice;

console.log({ finalPrice });

/**
 * *************************************************
 */

/**
 * Shop Keeper became big, more fruits included
 */
const FRUITS = [
  "Apple",
  "Orange",
  "Banana",
  "Cherry",
  "Mango",
  "Papaya",
  "Grapes",
  "Pine Apple",
  "Guava",
];

/**
 * Reference Types
 * - Arrays
 * - Objects
 */

/**
 * Arrays
 */

console.log({ FRUITS });
console.log(typeof FRUITS);

console.log(FRUITS[0]);
console.log(FRUITS[4], typeof FRUITS[4]);
console.log(FRUITS[9]);

const FRUIT_PRICES = [20, 10.5, 50, 100, 20, 50, 60, 50, 5];

console.log({ FRUIT_PRICES });

/**
 * CU: Give 10 Apples
 */

let costOf10Apples = 10 * FRUIT_PRICES[0];
console.log({ costOf10Apples });

/**
 * CU: I want 5 of each Apple, Mango, Papaya, Cherry, Grapes
 */

const fruitsRequired = ["Apple", "Mango", "Papaya", "Cherry", "Grapes"];
const countOfEachFruit = 5;

/**
 * CU: What is the total price?
 */

const totalPriceOfAllFruits =
  5 *
  (FRUIT_PRICES[0] +
    FRUIT_PRICES[4] +
    FRUIT_PRICES[5] +
    FRUIT_PRICES[3] +
    FRUIT_PRICES[6]);

console.log({ totalPriceOfAllFruits });

/**
 * Objects
 *
 */

/**
 * JSON - JavaScript Object Notation
 */
const personJyothi = {
  name: "Jyothi",
  age: 29,
  firstName: "Jyothi Babu",
  lastName: "Araja",
  usedVehicles: ["Cycle", "Bike", "Car"],
  isMarried: true,
  marriedTo: {
    name: "WifeName",
    age: 20,
  },
  ageInMonths: function () {
    return this.age * 12;
  },
};

console.log(typeof personJyothi);
console.log({ personJyothi });

console.log(personJyothi.name); // name
console.log(personJyothi.age); // name
console.log(personJyothi.marriedTo); // wifeObject
console.log(personJyothi.ageInMonths());
