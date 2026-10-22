const products = [
    { name: "Mouse", price: 100000, stock: 10 },
    { name: "USB Cable", price: 25000, stock: 3},
    { name: "Flashdisk", price: 60000, stock: 2}
];

let totalInventoryValue = 0;
const lowStockProducts = [];

products.forEach(item => {
    totalInventoryValue += item.price * item.stock;
    if (item.stock < 5) {
        lowStockProducts.push(item.name);
    }
});

console.log("Inventory Values Total: ", totalInventoryValue);
console.log("Product stock < 5: ", lowStockProducts);