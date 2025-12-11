interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
}

const products: Product[] = [
    { id: '1', name: 'Laptop', price: 999.99, category: 'Electronics' },
    { id: '2', name: 'Desk Chair', price: 299.99, category: 'Furniture' },
    { id: '3', name: 'Monitor', price: 399.99, category: 'Electronics' },
    { id: '4', name: 'Keyboard', price: 89.99, category: 'Accessories' },
    { id: '5', name: 'Mouse', price: 49.99, category: 'Accessories' }
];

export function getById(id: string) {
    const product = products.find(product => product.id === id);
    if (!product) {
        return { error: 'Product not found' };
    }
    return product;
}

export function create(newProduct: Product) {
    products.push(newProduct);
    return newProduct;
}

export function update(id: string, updatedProduct: Partial<Product>) {
    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex === -1) {
        return { error: 'Product not found' };
    }
    products[productIndex] = { ...products[productIndex], ...updatedProduct };
    return products[productIndex];
}

export function deleteById(id: string) {
    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex === -1) {
        return { error: 'Product not found' };
    }
    const deletedProduct = products.splice(productIndex, 1)[0];
    return deletedProduct;
}


