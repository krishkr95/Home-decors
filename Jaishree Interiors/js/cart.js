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

    // --- Cart Page Specific Logic ---
    const cartTableBody = document.querySelector('.cart-table tbody');
    if (cartTableBody) {
        renderCartItems();
    }

    function renderCartItems() {
        cartTableBody.innerHTML = '';
        
        if (cart.length === 0) {
            cartTableBody.innerHTML = '<tr><td colspan="5" style="text-align:center; padding:3rem;">Your cart is empty. <a href="shop.html" style="color:var(--color-accent); text-decoration:underline;">Shop Now</a></td></tr>';
            updateCartTotals();
            return;
        }

        cart.forEach((item, index) => {
            const tr = document.createElement('tr');
            const subtotal = item.price * item.quantity;
            tr.innerHTML = `
                <td data-label="Product">
                    <div class="cart-item">
                        <img src="${item.img}" alt="${item.title}">
                        <div>
                            <h3>${item.title}</h3>
                        </div>
                    </div>
                </td>
                <td data-label="Price">₹${item.price.toLocaleString()}</td>
                <td data-label="Quantity">
                    <div class="quantity-control">
                        <button class="qty-btn minus" data-index="${index}">-</button>
                        <input type="text" value="${item.quantity}" readonly>
                        <button class="qty-btn plus" data-index="${index}">+</button>
                    </div>
                </td>
                <td data-label="Subtotal">₹${subtotal.toLocaleString()}</td>
                <td><i class="fas fa-trash remove-btn" data-index="${index}"></i></td>
            `;
            cartTableBody.appendChild(tr);
        });

        attachCartListeners();
        updateCartTotals();
    }

    function attachCartListeners() {
        const plusBtns = document.querySelectorAll('.qty-btn.plus');
        const minusBtns = document.querySelectorAll('.qty-btn.minus');
        const removeBtns = document.querySelectorAll('.remove-btn');

        plusBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = e.target.getAttribute('data-index');
                cart[idx].quantity += 1;
                saveAndReRender();
            });
        });

        minusBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = e.target.getAttribute('data-index');
                if (cart[idx].quantity > 1) {
                    cart[idx].quantity -= 1;
                }
                saveAndReRender();
            });
        });

        removeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = e.target.getAttribute('data-index');
                cart.splice(idx, 1);
                saveAndReRender();
            });
        });
    }

    function saveAndReRender() {
        localStorage.setItem('chaddaji_cart', JSON.stringify(cart));
        updateCartCount();
        renderCartItems();
    }

    function updateCartTotals() {
        const subtotalElement = document.querySelector('.summary-row:nth-child(2) span:last-child');
        const totalElement = document.querySelector('.summary-row.total span:last-child');
        
        if (subtotalElement && totalElement) {
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            subtotalElement.innerText = `₹${subtotal.toLocaleString()}`;
            if (subtotal > 0) {
                totalElement.innerText = `₹${subtotal.toLocaleString()}`;
            } else {
                totalElement.innerText = '₹0';
            }
        }
    }

    // --- Checkout Page Logic ---
    const checkoutOrderItems = document.getElementById('checkout-order-items');
    const placeOrderBtn = document.getElementById('place-order-btn');
    
    if (checkoutOrderItems) {
        renderCheckoutItems();
    }

    function renderCheckoutItems() {
        checkoutOrderItems.innerHTML = '';
        let subtotal = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            
            const div = document.createElement('div');
            div.className = 'order-item';
            div.innerHTML = `
                <span>${item.title} x ${item.quantity}</span>
                <span>₹${itemTotal.toLocaleString()}</span>
            `;
            checkoutOrderItems.appendChild(div);
        });

        const checkoutSub = document.getElementById('checkout-subtotal');
        const checkoutTot = document.getElementById('checkout-total');
        
        if (checkoutSub && checkoutTot) {
            checkoutSub.innerText = `₹${subtotal.toLocaleString()}`;
            checkoutTot.innerText = `₹${subtotal.toLocaleString()}`;
        }
    }

    if (placeOrderBtn) {
        placeOrderBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (cart.length === 0) {
                alert("Your cart is empty!");
                return;
            }
            
            const form = document.getElementById('billing-form');
            if (form && !form.checkValidity()) {
                form.reportValidity();
                return;
            }
            
            // Build WhatsApp Message
            const name = document.getElementById('billing-fname')?.value || 'Customer';
            const lastName = document.getElementById('billing-lname')?.value || '';
            const phone = document.getElementById('billing-phone')?.value || '';
            const address = document.getElementById('billing-address1')?.value || '';
            const city = document.getElementById('billing-city')?.value || '';
            const pin = document.getElementById('billing-pin')?.value || '';
            
            let msg = `*New Order from ${name} ${lastName}*%0A`;
            msg += `Phone: ${phone}%0A%0A`;
            msg += `*Order Details:*%0A`;
            
            let total = 0;
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                msg += `- ${item.title} (x${item.quantity}) = ₹${itemTotal.toLocaleString()}%0A`;
            });
            
            msg += `%0A*Total:* ₹${total.toLocaleString()}%0A%0A`;
            msg += `*Shipping Address:*%0A${address}, ${city} - ${pin}%0A`;
            
            const waNumber = '919876543210'; // Using the store's phone number
            const waUrl = `https://wa.me/${waNumber}?text=${msg}`;
            
            // Clear cart and redirect
            localStorage.removeItem('chaddaji_cart');
            window.location.href = waUrl;
        });
    }

    // --- Direct Cart to WhatsApp Logic ---
    const proceedWhatsappBtn = document.getElementById('proceed-whatsapp-btn');
    
    if (proceedWhatsappBtn) {
        proceedWhatsappBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (cart.length === 0) {
                alert("Your cart is empty!");
                return;
            }
            
            let msg = `*New Inquiry / Order Request*%0A%0A`;
            msg += `*Items in Cart:*%0A`;
            
            let total = 0;
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                msg += `- ${item.title} (x${item.quantity}) = ₹${itemTotal.toLocaleString()}%0A`;
            });
            
            msg += `%0A*Total Estimated Value:* ₹${total.toLocaleString()}%0A%0A`;
            msg += `_Please confirm my order and let me know the next steps for payment and shipping._`;
            
            const waNumber = '919876543210';
            const waUrl = `https://wa.me/${waNumber}?text=${msg}`;
            
            window.location.href = waUrl;
        });
    }
});
