// Cart Logic (Persistent)
document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('chaddaji_cart')) || [];
    updateCartCount();

    // Add to cart functionality
    const addToCartBtns = document.querySelectorAll('.action-btn i.fa-shopping-cart, .btn-primary');
    
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const productCard = btn.closest('.product-card') || btn.closest('.product-details');
            if (productCard) {
                const id = productCard.getAttribute('data-id') || Math.random().toString(36).substr(2, 9);
                const title = (productCard.querySelector('h3') || productCard.querySelector('h1')).innerText;
                const priceText = (productCard.querySelector('.product-price') || productCard.querySelector('.detail-price')).innerText;
                const price = parseInt(priceText.replace(/[^0-9]/g, ''));
                const img = productCard.querySelector('img').src;

                const item = { id, title, price, img, quantity: 1 };
                addToCart(item);
            }
        });
    });

    function addToCart(item) {
        const existingItem = cart.find(i => i.title === item.title);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push(item);
        }
        
        localStorage.setItem('chaddaji_cart', JSON.stringify(cart));
        updateCartCount();
        showToast(`Added ${item.title} to cart!`);
    }

    function updateCartCount() {
        const countElements = document.querySelectorAll('.fa-shopping-cart');
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        
        countElements.forEach(el => {
            let badge = el.parentElement.querySelector('.cart-badge');
            if (totalItems > 0) {
                if (!badge) {
                    badge = document.createElement('span');
                    badge.className = 'cart-badge';
                    badge.style.position = 'absolute';
                    badge.style.top = '-8px';
                    badge.style.right = '-8px';
                    badge.style.backgroundColor = '#C8A96B';
                    badge.style.color = 'white';
                    badge.style.fontSize = '10px';
                    badge.style.padding = '2px 5px';
                    badge.style.borderRadius = '50%';
                    el.parentElement.style.position = 'relative';
                    el.parentElement.appendChild(badge);
                }
                badge.innerText = totalItems;
            } else if (badge) {
                badge.remove();
            }
        });
    }

    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'cart-toast';
        toast.style.position = 'fixed';
        toast.style.bottom = '2rem';
        toast.style.right = '2rem';
        toast.style.backgroundColor = '#111';
        toast.style.color = 'white';
        toast.style.padding = '1rem 2rem';
        toast.style.borderRadius = '0';
        toast.style.borderLeft = '4px solid #C8A96B';
        toast.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
        toast.style.zIndex = '10001';
        toast.style.fontFamily = 'Poppins, sans-serif';
        toast.style.fontSize = '0.9rem';
        toast.style.display = 'flex';
        toast.style.alignItems = 'center';
        toast.style.gap = '10px';
        toast.innerHTML = `<i class="fas fa-check-circle" style="color: #C8A96B"></i> ${message}`;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
            toast.style.transition = 'all 0.5s ease';
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    }

    // Export functions for other scripts if needed
    window.cartLogic = { updateCartCount, showToast };
});
