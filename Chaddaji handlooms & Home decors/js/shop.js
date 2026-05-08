// Shop Filtering and Sorting Logic
document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');
    const products = Array.from(document.querySelectorAll('.product-card'));
    const categoryFilters = document.querySelectorAll('#categoryFilter li');
    const priceFilters = document.querySelectorAll('#priceFilter li');
    const sortSelect = document.querySelector('.sort-select');

    // Filtering State
    let currentCategory = 'all';
    let currentPriceRange = { min: 0, max: 999999 };

    // Category Filter
    categoryFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            categoryFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            currentCategory = filter.getAttribute('data-filter');
            applyFilters();
        });
    });

    // Price Filter
    priceFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            priceFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            currentPriceRange.min = parseInt(filter.getAttribute('data-min'));
            currentPriceRange.max = parseInt(filter.getAttribute('data-max'));
            applyFilters();
        });
    });

    // Sort Select
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            const sortValue = sortSelect.value;
            sortProducts(sortValue);
        });
    }

    function applyFilters() {
        products.forEach(product => {
            const category = product.getAttribute('data-category');
            const price = parseInt(product.getAttribute('data-price'));

            const categoryMatch = currentCategory === 'all' || category === currentCategory;
            const priceMatch = price >= currentPriceRange.min && price <= currentPriceRange.max;

            if (categoryMatch && priceMatch) {
                product.style.display = 'block';
                // Trigger AOS animation if visible
                product.classList.add('aos-animate');
            } else {
                product.style.display = 'none';
                product.classList.remove('aos-animate');
            }
        });
    }

    function sortProducts(value) {
        const sortedProducts = [...products];

        if (value.includes('Low to High')) {
            sortedProducts.sort((a, b) => parseInt(a.getAttribute('data-price')) - parseInt(b.getAttribute('data-price')));
        } else if (value.includes('High to Low')) {
            sortedProducts.sort((a, b) => parseInt(b.getAttribute('data-price')) - parseInt(a.getAttribute('data-price')));
        } else if (value.includes('Popularity') || value.includes('Latest')) {
            // Default or random for demo
            sortedProducts.sort(() => Math.random() - 0.5);
        }

        // Re-append sorted products
        productGrid.innerHTML = '';
        sortedProducts.forEach(p => productGrid.appendChild(p));
    }
});
