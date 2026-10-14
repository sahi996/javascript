console.log("🚀 --- Initializing Inventory System ---");

// 1. Data Initialization: Existing Products
const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

// 2. User Input
let productName = prompt("Enter product name:");
let productPrice = Number(prompt("Enter product price:"));

// 3. Input Validation using if...else
if (
    productName !== null &&
    productName.trim() !== "" &&
    Number.isFinite(productPrice) &&
    productPrice > 0
) {
    productName = productName.trim();

    // 4. Category Assignment using switch
    let category;

    switch (true) {
        case productPrice < 100:
            category = "Budget";
            break;

        case productPrice <= 200:
            category = "Standard";
            break;

        default:
            category = "Premium";
    }

    // Add new product to inventory
    inventory.push({
        name: productName,
        price: productPrice,
        category: category
    });

    console.log(
        `[Prompt executed: User adds "${productName}" at "$${productPrice}"]`
    );

} else {
    console.log("Invalid input! Please enter a valid name and price.");
}

// 5. Assign categories to existing products
inventory.forEach(function (product) {
    if (!product.category) {
        if (product.price < 100) {
            product.category = "Budget";
        } else if (product.price <= 200) {
            product.category = "Standard";
        } else {
            product.category = "Premium";
        }
    }
});

// 6. Process Inventory using forEach()
console.log("\n--- Processing Inventory Roster (forEach) ---");

inventory.forEach((product) => {
    console.log(
        `* Item: ${product.name} ($${product.price}) -> Category: ${product.category}`
    );
});

// 7. Regular Function: Calculate Total Inventory Value
function calculateTotal(items) {
    let total = 0;

    for (let i = 0; i < items.length; i++) {
        // continue skips invalid products
        if (
            !Number.isFinite(items[i].price) ||
            items[i].price <= 0
        ) {
            continue;
        }

        total += items[i].price;
    }

    return total;
}

// 8. Arrow Function: Apply Tax or Discount
const calculateFinalPrice = (price, tax = 0, discount = 0) => {
    const discountedPrice = price - (price * discount / 100);
    const finalPrice = discountedPrice + (discountedPrice * tax / 100);
    return Number(finalPrice.toFixed(2));
};

// 9. Filter Affordable Products
const affordableItems = inventory.filter((product) => {
    return product.price < 200;
});

// 10. Transform Inventory using map()
const formattedReport = inventory.map((product) => {
    return `${product.name.toUpperCase()}: $${product.price}`;
});

// 11. Financial Analytics
console.log("\n--- Financial Analytics ---");

console.log(
    "Total Inventory Value: $" + calculateTotal(inventory)
);

console.log(
    "Filtered Affordable Items (Under $200):",
    JSON.stringify(affordableItems.map(item => item.name))
);

console.log(
    "Formatted Report List:",
    JSON.stringify(formattedReport)
);

// 12. Example: Tax and Discount Calculation
const laptopFinalPrice = calculateFinalPrice(800, 18, 10);

console.log("\n--- Tax & Discount Example ---");
console.log("Laptop price after 10% discount and 18% tax: $" +
    laptopFinalPrice);