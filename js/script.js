document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');
});

const products = [
    {
        id: 1,
        name: 'Product 1',
        description: 'This is product 1',
        price: 100,
    }, 
    {
        id: 2,
        name: 'Product 2',
        description: 'This is product 2',
        price: 150,
    },
]

function renderProducts() {
    const productGrid = document.querySelector('.product-grid');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        const productImage = document.createElement('img');
        productImage.src = 'assets/images/product-placeholder.png';
        productImage.alt = product.name;

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;

        const productPrice = document.createElement('p');
        productPrice.textContent = '$' + product.price;

        const addToCartButton = document.createElement('button');
        addToCartButton.classList.add('add-to-cart-button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.dataset.productId = product.id;

        addToCartButton.addEventListener('click', function () {
            addToCart(product.id);
        });

        productItem.appendChild(productImage);
        productItem.appendChild(productName);
        productItem.appendChild(productDescription);
        productItem.appendChild(productPrice);
        productItem.appendChild(addToCartButton);

        productGrid.appendChild(productItem);
    })
}

const cart = [];

function addToCart(productId) {
    const product = products.find(product => product.id === productId);
    const existingCartItem = cart.find(item => item.product.id === productId);

    if (existingCartItem) {
        existingCartItem.quantity++;
    } else {
        cart.push({
            product: product,
            quantity: 1,
        })
    }

    renderCartItems();
}

function renderCartItems() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach(cartItem => {
        const cartItemElement = document.createElement('li');
        cartItemElement.classList.add('cart-item');

        const cartItemName = document.createElement('span');
        cartItemName.textContent = `${cartItem.product.name} x ${cartItem.quantity}`;

        const cartItemPrice = document.createElement('span');
        cartItemPrice.textContent = '$' + cartItem.product.price * cartItem.quantity;

        cartItemElement.appendChild(cartItemName);
        cartItemElement.appendChild(cartItemPrice);
        cartItemsContainer.appendChild(cartItemElement);
    });
}

document.querySelector('.checkout-button').addEventListener('click', function() {
    alert('Thank you for your purchase!');
    cart.length = 0; // Clear the cart
    renderCartItems();
})

renderProducts();