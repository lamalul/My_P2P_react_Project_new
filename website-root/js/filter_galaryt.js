// Sample product data
const products = [
    { name: 'Product 1', category: 'Food', price: 15, image: 'images/Products/Food1.avif' },
    { name: 'Product 2', category: 'Food', price: 20, image: 'images/Products/Food2.avif' },
    { name: 'Product 3', category: 'Food', price: 5, image: 'images/Products/Food3.avif' },
    { name: 'Product 1', category: 'Drink', price: 5, image: 'images/Products/Drink1.avif' },
    { name: 'Product 2', category: 'Drink', price: 3, image: 'images/Products/Drink2.avif' },
    { name: 'Product 3', category: 'Drink', price: 4, image: 'images/Products/Drink3.avif' },
];

// Function to render the product gallery
function renderGallery(products) {
    const gallery = document.querySelector('.product-gallery');
    gallery.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.image}" alt="${product.name}" style="max-width: 200px; max-height: 200px;">
            <p>Category: ${product.category}, Price: $${product.price}</p>
        `;
        gallery.appendChild(productItem);
    });
}

// Initial render
renderGallery(products);

// Filtering function
function filterProducts(category) {
    const filteredProducts = products.filter(product => category === 'All' || product.category === category);
    renderGallery(filteredProducts);
}

// Sorting function
function sortProducts(sortType) {
    const sortedProducts = [...products]; // Create a copy of the original array
    if (sortType === 'price-asc') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === 'price-desc') {
        sortedProducts.sort((a, b) => b.price - a.price);
    }
    renderGallery(sortedProducts);
}

// Event listeners for filter and sort buttons
document.getElementById('filter-all').addEventListener('click', () => filterProducts('All'));
document.getElementById('filter-category-a').addEventListener('click', () => filterProducts('Food'));
document.getElementById('filter-category-b').addEventListener('click', () => filterProducts('Drink'));
document.getElementById('sort-price-asc').addEventListener('click', () => sortProducts('price-asc'));
document.getElementById('sort-price-desc').addEventListener('click', () => sortProducts('price-desc'));
