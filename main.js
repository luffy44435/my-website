document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.querySelector('.card-items');
    const cartTotal = document.querySelector('.cart-total');
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.querySelector('.sidebar-close');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const checkoutButton = document.querySelector('.checkout-btn');
    const loader = document.querySelector('.loader');
    let totalAmount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.parentElement;
            const itemName = card.querySelector('h5').innerText;
            const itemPrice = parseFloat(card.querySelector('.price').innerText.replace('N', '').replace(',', ''));

            // Add item to the cart
            const itemElement = document.createElement('div');
            itemElement.innerText = `${itemName} - ${card.querySelector('.price').innerText}`;
            cartItems.appendChild(itemElement);

            // Update total amount
            totalAmount += itemPrice;
            cartTotal.innerText = 'N' + totalAmount.toFixed(2);

            // Show sidebar
            sidebar.style.display = 'block';
        });
    });
    
    // Open/close the sidebar when the cart icon is clicked
    document.querySelector('.cart-icons').addEventListener('click', function() {
        sidebar.classList.toggle('open'); // Toggle the sidebar
    });
    
    // Close the sidebar when the close icon is clicked
    sidebarClose.addEventListener('click', function() {
        sidebar.classList.remove('open'); // Close sidebar
    });
    

    // Checkout button functionality with loader
    checkoutButton.addEventListener('click', () => {
        // Show the loader
        loader.style.display = 'flex';

        // Simulate a delay for the checkout process
        setTimeout(() => {
            alert('Payment gateway getting ready...');
            // Hide the loader
            loader.style.display = 'none';
            // Additional logic for the checkout process can be added here
        }, 2000); // Simulate a 2-second delay
    });
});
