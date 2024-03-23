// create an array to store grocery inventory, needs name, quantity, price, and category attributes
const groceryItems = [
    {name: "Celery", quantity: 12, price: 2, category: "Produce"},
    {name: "Milk", quantity: 4, price: 4, category: "Dairy"},
    {name: "Ground Beef", quantity: 2, price: 8, category: "Meat"},
    {name: "Cupcake", quantity: 12, price: 15, category: "Bakery"}
];

// create a function that will alert you an item needs to be restocked when item quantity <= 3
function checkQuantity(itemArray){
    return itemArray.filter(groceryItem => groceryItem.quantity <= 3);
}

// create an Item class with name, quantity, price, and category attributes
class Item {
    constructor(name, quantity, price, category){
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.category = category;
    }
    displayInfo(){
        return `Item Name: ${this.name} | Item Quantity: ${this.quantity} | Item Price: $${this.price} | Item Category: ${this.category}`;
    }
}

// use an event listener to make the add to inventory button functional. 
// it should gather data from the form, create a new Item using form data, append it to the inventory array, and display the new item

// STRETCH GOAL: implement a dynamic table to show inventory