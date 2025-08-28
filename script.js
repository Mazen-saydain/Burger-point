// Burger data
const burgersData = [
    {
        id: 'Hot_Chicken',
        name: 'Hot Chicken Burger',
        category: 'chicken',
        ingredients: 'Spicy fried chicken, lettuce, tomato, special sauce, and sesame bun.',
        image: 'images/Spicy_Hot_Chicken.png',
        price_single: 75,
        price_double: 120
    },
    {
        id: 'Chicken_Cheese',
        name: 'Chicken Cheese Burger',
        category: 'chicken',
        ingredients: 'Grilled chicken breast, melted cheese, fresh lettuce, and our classic burger sauce.',
        image: 'images/Chicken Cheese.png',
        price_single: 60,
        price_double: 95
    },
    {
        id: 'Grilled_Chicken',
        name: 'Grilled Chicken',
        category: 'chicken',
        ingredients: 'Charcoal-grilled chicken, fresh vegetables, and a light garlic aioli.',
        image: 'images/burger_4.png',
        price_single: 80,
        price_double: 125
    },
    {
        id: 'Crispy_Fried_Chicken',
        name: 'Crispy Fried Chicken',
        category: 'chicken',
        ingredients: 'Crispy fried chicken fillet, coleslaw, pickles, and our smoky BBQ sauce.',
        image: 'images/burger_11.png',
        price_single: 78,
        price_double: 115
    },
    {
        id: 'Veg_Chicken',
        name: 'Veg & Chicken Burger',
        category: 'chicken',
        ingredients: 'A mix of a vegetable patty and grilled chicken breast with special sauce.',
        image: 'images/veg burger.png',
        price_single: 65,
        price_double: 100
    },
    {
        id: 'Beef_Burger',
        name: 'Beef Burger',
        category: 'beef',
        ingredients: 'Classic beef patty with lettuce, onion, tomato, and ketchup.',
        image: 'images/beef_burger.png',
        price_single: 90,
        price_double: 140
    },
    {
        id: 'Mushroom',
        name: 'Mushroom Burger',
        category: 'beef',
        ingredients: 'Beef patty topped with sautéed mushrooms, melted cheese, and a rich mushroom sauce.',
        image: 'images/Mushroom.png',
        price_single: 70,
        price_double: 110
    },
    {
        id: 'Double_Cheesy',
        name: 'Double Cheese Burger',
        category: 'beef',
        ingredients: 'Two beef patties, double melted cheese, pickles, and our signature sauce.',
        image: 'images/Double_Cheesy.png',
        price_single: 110,
        price_double: 170
    },
    {
        id: 'Black_Bean',
        name: 'Black Bean Burger',
        category: 'beef',
        ingredients: 'A black bean patty with fresh vegetables and a spicy avocado cream.',
        image: 'images/Black_Bean.png',
        price_single: 72,
        price_double: 110
    },
    {
        id: 'BBQ_Bacon',
        name: 'BBQ Bacon Burger',
        category: 'beef',
        ingredients: 'Beef patty with crispy bacon, onion rings, and smoky BBQ sauce.',
        image: 'images/bbq.png',
        price_single: 120,
        price_double: 180
    },
    {
        id: 'Smoky',
        name: 'Smoky Burger',
        category: 'beef',
        ingredients: 'Grilled beef patty with smoked cheese, caramelized onions, and smoky chipotle aioli.',
        image: 'images/Smoked.png',
        price_single: 85,
        price_double: 130
    },
    {
        id: 'Double_Bacon',
        name: 'Double Bacon',
        category: 'beef',
        ingredients: 'Two beef patties, crispy bacon, and a special cheese blend.',
        image: 'images/Double Bacon.png',
        price_single: 130,
        price_double: 200
    },
    {
        id: 'Avocado',
        name: 'Avocado Burger',
        category: 'beef',
        ingredients: 'Beef patty with fresh avocado slices, Swiss cheese, and creamy ranch sauce.',
        image: 'images/Avocado Burger.png',
        price_single: 95,
        price_double: 150
    },
    {
        id: 'Fish',
        name: 'Fish Burger',
        category: 'beef',
        ingredients: 'Crispy fish fillet, tartar sauce, lettuce, and a soft bun.',
        image: 'images/Fish Burger.png',
        price_single: 70,
        price_double: 110
    },
    {
        id: 'Vegan_Deluxe',
        name: 'Vegan Deluxe',
        category: 'beef',
        ingredients: 'Plant-based patty with fresh veggies, pickles, and our special vegan sauce.',
        image: 'images/Vegan Deluxe.png',
        price_single: 88,
        price_double: 135
    },
    {
        id: 'Texas_Style',
        name: 'Texas Style',
        category: 'beef',
        ingredients: 'Beef patty with BBQ sauce, melted cheddar, and crispy onion straws.',
        image: 'images/Texas Style.png',
        price_single: 105,
        price_double: 160
    },
    {
        id: 'Classic_Cheeseburger',
        name: 'Classic Cheeseburger',
        category: 'beef',
        ingredients: 'Beef patty with American cheese, pickles, onion, and ketchup.',
        image: 'images/Classic Cheeseburger.png',
        price_single: 80,
        price_double: 125
    },
    {
        id: 'Ranch',
        name: 'Ranch Burger',
        category: 'beef',
        ingredients: 'Beef patty with a creamy ranch dressing, fresh lettuce, and tomatoes.',
        image: 'images/Ranch Burger.png',
        price_single: 92,
        price_double: 145
    },
    {
        id: 'Sriracha',
        name: 'Sriracha Burger',
        category: 'beef',
        ingredients: 'Beef patty with a spicy Sriracha sauce, Swiss cheese, and crispy fried onions.',
        image: 'images/Sriracha Burger.png',
        price_single: 95,
        price_double: 150
    },
    // Add other items without prices_single/double
    {
        id: 'Classic_Fries',
        name: 'Classic Fries',
        ingredients: 'Crispy golden fries, seasoned to perfection.',
        image: 'images/fries_1.png',
        price: 30,
        category: 'sides'
    },
    {
        id: 'Cheese_Fries',
        name: 'Cheese Fries',
        ingredients: 'Classic fries topped with rich, melted cheddar cheese.',
        image: 'images/fries_2.png',
        price: 40,
        category: 'sides'
    },
    {
        id: 'Onion_Rings',
        name: 'Onion Rings',
        ingredients: 'Crispy battered onion rings with a savory flavor.',
        image: 'images/onion_rings.png',
        price: 35,
        category: 'sides'
    },
    {
        id: 'Coca_Cola',
        name: 'Coca Cola',
        ingredients: 'Refreshing Coca Cola.',
        image: 'images/coke.png',
        price: 20,
        category: 'drinks'
    },
    {
        id: 'Pepsi',
        name: 'Pepsi',
        ingredients: 'Refreshing Pepsi.',
        image: 'images/pepsi.png',
        price: 20,
        category: 'drinks'
    },
    {
        id: 'Juice',
        name: 'Orange Juice',
        ingredients: 'Freshly squeezed orange juice.',
        image: 'images/juice.png',
        price: 25,
        category: 'drinks'
    }
];

let cart = JSON.parse(sessionStorage.getItem('burgerPointCart')) || [];
const detailModal = document.getElementById('detail-modal');
const cartModal = document.getElementById('cart-modal');
const checkoutModal = document.getElementById('checkout-modal'); // New: Checkout modal
const closeButtons = document.querySelectorAll('.close-btn');
const menuCards = document.querySelectorAll('.menu-card');
const addToCartBtn = document.querySelector('.add-to-cart-btn');
const orderNowBtn = document.querySelector('.order-now-btn'); // New: Order now button
const checkoutBtn = document.querySelector('.checkout-btn'); // New: Checkout button
const checkoutForm = document.getElementById('checkout-form'); // New: Checkout form
const successMessage = document.querySelector('.success-message'); // New: Success message div
const backToMenuBtn = document.querySelector('.btn-back-to-menu'); // New: Back to menu button
const sizeOptions = document.getElementById('size-options');
let currentBurger = null;

document.addEventListener('DOMContentLoaded', () => {
    renderCartCounter();
    renderCartItems();
});

const saveCart = () => {
    sessionStorage.setItem('burgerPointCart', JSON.stringify(cart));
};

const renderCartCounter = () => {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const counters = document.querySelectorAll('.cart-counter');
    counters.forEach(counter => {
        counter.textContent = totalItems;
        counter.style.display = totalItems > 0 ? 'block' : 'none';
    });
};

const renderCartItems = () => {
    const cartContainer = document.getElementById('cart-items-container');
    const cartTotalSpan = document.querySelector('#cart-total span');
    if (!cartContainer || !cartTotalSpan) {
        return;
    }
    cartContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="empty-cart-message">Your cart is empty!</p>';
        cartTotalSpan.textContent = '0 EGP';
        if (checkoutBtn) {
            checkoutBtn.style.display = 'none';
        }
        return;
    }

    if (checkoutBtn) {
        checkoutBtn.style.display = 'inline-block';
    }

    cart.forEach(item => {
        const burger = burgersData.find(b => b.id === item.id);
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItemHTML = `
            <div class="cart-item" data-id="${item.id}" data-size="${item.size || ''}">
                <div class="item-info">
                    <img src="${burger.image}" alt="${burger.name}">
                    <div class="item-details">
                        <h4>${burger.name} ${item.size ? `(${item.size})` : ''}</h4>
                        <p>${item.price} EGP</p>
                    </div>
                </div>
                <div class="item-actions">
                    <div class="quantity-controls">
                        <button class="decrease">-</button>
                        <span>${item.quantity}</span>
                        <button class="increase">+</button>
                    </div>
                    <span class="delete-icon">&times;</span>
                </div>
            </div>
        `;
        cartContainer.innerHTML += cartItemHTML;
    });

    cartTotalSpan.textContent = `${total} EGP`;
};

const openModal = (modal) => {
    modal.classList.add('modal-active');
};

const closeModal = (modal) => {
    modal.classList.remove('modal-active');
};

menuCards.forEach(card => {
    card.addEventListener('click', () => {
        const burgerId = card.dataset.id;
        const burger = burgersData.find(b => b.id === burgerId);

        if (!burger) return;

        currentBurger = burger;

        const modalImage = document.getElementById('modal-image');
        const modalTitle = document.getElementById('modal-title');
        const modalIngredients = document.getElementById('modal-ingredients');
        const singlePrice = document.getElementById('single-price');
        const doublePrice = document.getElementById('double-price');
        const sizeOptions = document.getElementById('size-options');
        const addToCartBtn = document.querySelector('.add-to-cart-btn');
        const orderNowBtn = document.querySelector('.order-now-btn');

        modalImage.src = burger.image;
        modalTitle.textContent = burger.name;
        modalIngredients.textContent = burger.ingredients;

        if (burger.price_single && burger.price_double) {
            sizeOptions.style.display = 'flex';
            singlePrice.textContent = `${burger.price_single} EGP`;
            doublePrice.textContent = `${burger.price_double} EGP`;
            sizeOptions.querySelector('.size-option.selected')?.classList.remove('selected');
            sizeOptions.querySelector('.size-option[data-size="single"]').classList.add('selected');
        } else {
            sizeOptions.style.display = 'none';
        }

        openModal(detailModal);
    });
});

if (sizeOptions) {
    sizeOptions.addEventListener('click', (e) => {
        const selectedOption = e.target.closest('.size-option');
        if (!selectedOption) return;

        sizeOptions.querySelectorAll('.size-option').forEach(option => {
            option.classList.remove('selected');
        });
        selectedOption.classList.add('selected');
    });
}

if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
        if (!currentBurger) return;

        let selectedSize = '';
        let selectedPrice = 0;

        if (currentBurger.price_single && currentBurger.price_double) {
            const selectedOption = sizeOptions.querySelector('.size-option.selected');
            selectedSize = selectedOption.dataset.size;
            selectedPrice = selectedSize === 'single' ? currentBurger.price_single : currentBurger.price_double;
        } else {
            selectedPrice = currentBurger.price;
        }

        const existingItemIndex = cart.findIndex(item => item.id === currentBurger.id && item.size === selectedSize);

        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity++;
        } else {
            cart.push({
                id: currentBurger.id,
                name: currentBurger.name,
                image: currentBurger.image,
                price: selectedPrice,
                size: selectedSize,
                quantity: 1
            });
        }
        saveCart();
        renderCartCounter();
        closeModal(detailModal);
    });
}

// New: Event listener for Order Now button inside detail modal
if (orderNowBtn) {
    orderNowBtn.addEventListener('click', () => {
        if (!currentBurger) return;

        let selectedSize = '';
        let selectedPrice = 0;

        if (currentBurger.price_single && currentBurger.price_double) {
            const selectedOption = sizeOptions.querySelector('.size-option.selected');
            selectedSize = selectedOption.dataset.size;
            selectedPrice = selectedSize === 'single' ? currentBurger.price_single : currentBurger.price_double;
        } else {
            selectedPrice = currentBurger.price;
        }

        // Check if item is already in cart, if not, add it
        const existingItemIndex = cart.findIndex(item => item.id === currentBurger.id && item.size === selectedSize);
        if (existingItemIndex === -1) {
             cart.push({
                id: currentBurger.id,
                name: currentBurger.name,
                image: currentBurger.image,
                price: selectedPrice,
                size: selectedSize,
                quantity: 1
            });
            saveCart();
            renderCartCounter();
        }

        closeModal(detailModal);
        openModal(checkoutModal);
    });
}

const cartIcons = document.querySelectorAll('.cart-icon');
cartIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(cartModal);
        renderCartItems();
    });
});

if (cartModal) {
    cartModal.addEventListener('click', (e) => {
        const itemElement = e.target.closest('.cart-item');
        if (!itemElement) return;

        const itemId = itemElement.dataset.id;
        const itemSize = itemElement.dataset.size;
        const itemIndex = cart.findIndex(item => item.id === itemId && item.size === itemSize);
        
        if (itemIndex > -1) {
            if (e.target.classList.contains('increase')) {
                cart[itemIndex].quantity++;
            } else if (e.target.classList.contains('decrease')) {
                cart[itemIndex].quantity--;
                if (cart[itemIndex].quantity <= 0) {
                    cart.splice(itemIndex, 1);
                }
            } else if (e.target.classList.contains('delete-icon')) {
                cart.splice(itemIndex, 1);
            }
            saveCart();
            renderCartItems();
            renderCartCounter();
        }
    });
}

closeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal-overlay');
        if (modal) {
            closeModal(modal);
        }
    });
});

// New: Event listener for Checkout button
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(cartModal);
        openModal(checkoutModal);
    });
}

// New: Handle checkout form submission
if (checkoutForm) {
    const checkoutSubmitBtn = document.getElementById('checkout-submit');
    checkoutSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const name = document.getElementById('checkout-name').value;
        const address = document.getElementById('checkout-address').value;
        const phone = document.getElementById('checkout-phone').value;

        if (name && address && phone) {
            // Simulate successful submission
            checkoutForm.style.display = 'none';
            successMessage.style.display = 'flex';
            cart = []; // Clear the cart
            saveCart(); // Save the empty cart
            renderCartCounter(); // Update the cart counter
        } else {
            alert('من فضلك املأ جميع الحقول.');
        }
    });
}

// New: Back to menu button in success message
if (backToMenuBtn) {
    backToMenuBtn.addEventListener('click', () => {
        closeModal(checkoutModal);
        // Reset the checkout modal state for next use
        checkoutForm.style.display = 'flex';
        successMessage.style.display = 'none';
        document.getElementById('checkout-name').value = '';
        document.getElementById('checkout-address').value = '';
        document.getElementById('checkout-phone').value = '';
    });
}