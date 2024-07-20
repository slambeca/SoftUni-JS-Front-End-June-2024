function storeProvision(stock, orderedProducts) {
    let allProducts = {};

    for(let i=0; i<stock.length; i+=2) {
        allProducts[stock[i]] = parseInt(stock[i+1]);
        
    }

    for(let j=0; j<orderedProducts.length; j+=2) {
        const name = orderedProducts[j];
        const quantity = parseInt(orderedProducts[j+1]);

        if(allProducts[name]) {
            allProducts[name] += quantity;
        } else {
            allProducts[name] = quantity;
        }
    }

    for (const product in allProducts) {
        console.log(`${product} -> ${allProducts[product]}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );
