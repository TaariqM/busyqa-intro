let shoppingCart = {
  items: [],
  addItem: function (item) {
    this.items.push(item);
  },
};

// Item Constructor
function Item(name, price) {
  this.name = name;
  this.price = price;
}

// creating new items
let item1 = new Item("Shirt", 20);
let item2 = new Item("Pants", 30);

// adding items to the shopping cart
shoppingCart.addItem(item1);
shoppingCart.addItem(item2);

// Adding a method to the shoppingCart object,
// that will remove items from the shopping cart
shoppingCart.removeItem = function (index) {
  this.items.splice(index, 1);
};

// Adding a method to the shoppingCart object,
// that will calculate the total price of all items within the shopping cart
shoppingCart.calculateTotal = function () {
  let total = 0;

  for (let i = 0; i < this.items.length; i++) {
    total += this.items[i].price;
  }

  return total;
};

// Adding a method to the shoppingCart object,
// that will apply a discount code to the total price of all items within the shopping cart
shoppingCart.applyDiscountCode = function (code) {
  switch (code) {
    case "SAVE10":
      return this.calculateTotal() * 0.9; // Apply 10% discount
    case "SAVE20":
      return this.calculateTotal() * 0.8; // Apply 20% discount
    default:
      return this.calculateTotal(); // Don't apply a discount
  }
};

// Adding a method to the shoppingCart object,
// that will get the names of all the items within the shopping cart
shoppingCart.getCurrentItems = function () {
  return this.items.map((item) => item.name);
};

console.log(shoppingCart.getCurrentItems());
shoppingCart.removeItem(0);
console.log(shoppingCart.getCurrentItems());
console.log(shoppingCart.calculateTotal());
console.log(shoppingCart.applyDiscountCode("SAVE10"));
