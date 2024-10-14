const categories = document.getElementById('categories');
const items = document.getElementById('items');
const itemList = document.getElementById('item-list');
const placeOrderBtn = document.getElementById('place-order');
const orderConfirmation = document.getElementById('order-confirmation');
const deliveryTime = document.getElementById('delivery-time');
const trackOrderBtn = document.getElementById('track-order');

const itemsByCategory = {
    groceries: ['Bread', 'Milk', 'Eggs', 'Fruits'],
    essentials: ['Soap', 'Toothpaste', 'Toilet Paper', 'Detergent'],
    pharmacy: ['Painkillers', 'Bandages', 'Vitamins', 'Antiseptic'],
    stationery: ['Notebooks', 'Pens', 'Pencils', 'Highlighters']
};

document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        showItems(category);
    });
});

function showItems(category) {
    categories.style.display = 'none';
    items.style.display = 'block';
    itemList.innerHTML = '';

    itemsByCategory[category].forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerHTML = `
            <span>${item}</span>
            <input type="number" min="0" value="0">
        `;
        itemList.appendChild(itemElement);
    });
}

placeOrderBtn.addEventListener('click', () => {
    items.style.display = 'none';
    orderConfirmation.style.display = 'block';
    const estimatedTime = Math.floor(Math.random() * 30) + 30; // Random time between 30-60 minutes
    deliveryTime.textContent = `${estimatedTime} minutes`;
});

trackOrderBtn.addEventListener('click', () => {
    alert('Order tracking feature coming soon!');
});