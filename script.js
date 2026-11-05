
// ==========================================
// ÉLORA FASHION - COMPLETE SHOPPING SYSTEM
// ==========================================

// ==========================================
// 1. EMAILJS CONFIGURATION
// ==========================================

// IMPORTANT:
// Keep your actual working Public Key, Service ID
// and Template ID from your previous JavaScript.

emailjs.init({
  publicKey: "PASTE_YOUR_WORKING_PUBLIC_KEY"
});

const EMAIL_SERVICE_ID = "PASTE_YOUR_WORKING_SERVICE_ID";
const EMAIL_TEMPLATE_ID = "template_lzrm72n";


// ==========================================
// 2. PRODUCT COLLECTION
// ==========================================

const products = [
  { id: 1, name: "Classic Elegance", price: 35000, image: "photo-1539109136881-3be0616acf4b", category: "Dress", sizes: ["S", "M", "L", "XL"], colors: ["Black", "Cream", "Brown"], description: "A timeless outfit for elegant everyday styling." },

  { id: 2, name: "Modern Chic", price: 42000, image: "photo-1483985988355-763728e1935b", category: "Outfit", sizes: ["S", "M", "L", "XL"], colors: ["Black", "White", "Beige"], description: "A modern fashion piece for effortless styling." },

  { id: 3, name: "Luxury Style", price: 50000, image: "photo-1490481651871-ab68de25d43d", category: "Outfit", sizes: ["S", "M", "L"], colors: ["Brown", "Cream", "Black"], description: "A sophisticated addition to your wardrobe." },

  { id: 4, name: "Evening Glamour", price: 65000, image: "photo-1595777457583-95e059d581b8", category: "Dress", sizes: ["S", "M", "L", "XL"], colors: ["Black", "Red", "Wine"], description: "An elegant outfit for special occasions." },

  { id: 5, name: "Luxury Handbag", price: 45000, image: "photo-1548036328-c9fa89d128fa", category: "Bag", sizes: ["One Size"], colors: ["Black", "Brown", "Cream"], description: "A stylish handbag to complete your look." },

  { id: 6, name: "Classic Heels", price: 38000, image: "photo-1543163521-1bf539c55dd2", category: "Shoes", sizes: ["36", "37", "38", "39", "40", "41"], colors: ["Black", "Nude", "Brown"], description: "Classic heels designed for stylish occasions." },

  { id: 7, name: "Summer Dress", price: 30000, image: "photo-1551232864-3f0890e580d9", category: "Dress", sizes: ["S", "M", "L", "XL"], colors: ["White", "Yellow", "Pink"], description: "A lovely dress for relaxed daytime styling." },

  { id: 8, name: "Casual Outfit", price: 28000, image: "photo-1551488831-00ddcb6c6bd3", category: "Outfit", sizes: ["S", "M", "L", "XL"], colors: ["Black", "Grey", "Cream"], description: "Comfortable everyday fashion." },

  { id: 9, name: "Classic Jacket", price: 55000, image: "photo-1591047139829-d91aecb6caea", category: "Jacket", sizes: ["S", "M", "L", "XL"], colors: ["Black", "Brown", "Tan"], description: "A versatile jacket for a polished look." },

  { id: 10, name: "Designer Bag", price: 48000, image: "photo-1584917865442-de89df76afd3", category: "Bag", sizes: ["One Size"], colors: ["Black", "Cream", "Brown"], description: "A fashionable bag for everyday use." },

  { id: 11, name: "Evening Outfit", price: 70000, image: "photo-1566206091558-7f218b696731", category: "Dress", sizes: ["S", "M", "L", "XL"], colors: ["Black", "Wine", "Gold"], description: "A statement outfit for evening occasions." },

  { id: 12, name: "Leather Jacket", price: 60000, image: "photo-1551028719-00167b16eac5", category: "Jacket", sizes: ["S", "M", "L", "XL"], colors: ["Black", "Brown"], description: "A classic jacket with a bold finish." },

  { id: 13, name: "Street Style", price: 40000, image: "photo-1515886657613-9f3515b0c78f", category: "Outfit", sizes: ["S", "M", "L"], colors: ["Black", "White", "Grey"], description: "Contemporary streetwear-inspired fashion." },

  { id: 14, name: "Fashion Statement", price: 52000, image: "photo-1529139574466-a303027c1d8b", category: "Outfit", sizes: ["S", "M", "L", "XL"], colors: ["Cream", "Black", "Brown"], description: "A stylish piece for a confident look." },

  { id: 15, name: "Mini Handbag", price: 32000, image: "photo-1566150905458-1bf1fc113f0d", category: "Bag", sizes: ["One Size"], colors: ["Pink", "Black", "Cream"], description: "A compact handbag for your essentials." },

  { id: 16, name: "Floral Dress", price: 36000, image: "photo-1515372039744-b8f02a3ae446", category: "Dress", sizes: ["S", "M", "L", "XL"], colors: ["Pink", "Blue", "White"], description: "A floral-inspired dress for a fresh look." },

  { id: 17, name: "Fashion Sneakers", price: 25000, image: "photo-1600185365483-26d7a4cc7519", category: "Shoes", sizes: ["36", "37", "38", "39", "40", "41"], colors: ["White", "Black", "Grey"], description: "Casual sneakers for everyday comfort." },

  { id: 18, name: "Elegant Accessories", price: 18000, image: "photo-1591561954557-26941169b49e", category: "Accessories", sizes: ["One Size"], colors: ["Gold", "Silver"], description: "A finishing touch for your favourite outfits." },

  { id: 19, name: "Travel Bag", price: 44000, image: "photo-1553062407-98eeb64c6a62", category: "Bag", sizes: ["One Size"], colors: ["Black", "Brown", "Grey"], description: "A practical bag for your travel essentials." },

  { id: 20, name: "Sporty Sneakers", price: 33000, image: "photo-1542291026-7eec264c27ff", category: "Shoes", sizes: ["36", "37", "38", "39", "40", "41"], colors: ["Red", "Black", "White"], description: "Sporty footwear for casual styling." }
];


// ==========================================
// 3. SHOPPING DATA
// ==========================================

let cart = [];
let wishlist = JSON.parse(localStorage.getItem("eloraWishlist") || "[]");
let reviews = JSON.parse(localStorage.getItem("eloraReviews") || "[]");

let selectedProduct = null;


// ==========================================
// 4. HELPER FUNCTIONS
// ==========================================

const formatPrice = (price) =>
  "₦" + Number(price).toLocaleString("en-NG");

function saveWishlist() {
  localStorage.setItem("eloraWishlist", JSON.stringify(wishlist));
}

function saveReviews() {
  localStorage.setItem("eloraReviews", JSON.stringify(reviews));
}

function createOrderReference() {
  return "ELORA-" + Date.now().toString(36).toUpperCase();
}


// ==========================================
// 5. HTML ELEMENTS
// ==========================================

const productsContainer = document.getElementById("products");
const cartItems = document.getElementById("cart-items");
const count = document.getElementById("count");
const total = document.getElementById("total");


// ==========================================
// 6. DISPLAY PRODUCTS
// ==========================================

function displayProducts() {
  if (!productsContainer) return;

  productsContainer.innerHTML = products.map(product => `
    <article class="product">

      <img
        src="https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=600&q=80"
        alt="${product.name}"
      >

      <div class="product-info">

        <p class="product-category">${product.category}</p>

        <h3>${product.name}</h3>

        <p class="product-price">
          ${formatPrice(product.price)}
        </p>

        <div class="product-actions">

          <button class="details-btn" data-id="${product.id}">
            View Details
          </button>

          <button class="wishlist-btn" data-id="${product.id}">
            ${wishlist.includes(product.id) ? "♥ Saved" : "♡ Wishlist"}
          </button>

        </div>

        <button class="add-btn" data-id="${product.id}">
          Add to Bag
        </button>

      </div>
    </article>
  `).join("");

  updateWishlistCount();
}


// ==========================================
// 7. PRODUCT DETAILS
// ==========================================

function openProductDetails(productId) {
  const product = products.find(item => item.id === productId);

  if (!product) return;

  selectedProduct = product;

  const modal = document.getElementById("product-modal");
  const content = document.getElementById("product-modal-content");

  if (!modal || !content) return;

  content.innerHTML = `
    <div class="product-detail">

      <img
        src="https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=700&q=80"
        alt="${product.name}"
      >

      <div class="product-detail-info">

        <p class="product-category">${product.category}</p>

        <h2>${product.name}</h2>

        <h3>${formatPrice(product.price)}</h3>

        <p>${product.description}</p>

        <label for="detail-size">Choose Size</label>

        <select id="detail-size">
          ${product.sizes.map(size =>
            `<option value="${size}">${size}</option>`
          ).join("")}
        </select>

        <label for="detail-color">Choose Colour</label>

        <select id="detail-color">
          ${product.colors.map(color =>
            `<option value="${color}">${color}</option>`
          ).join("")}
        </select>

        <label for="detail-quantity">Quantity</label>

        <input
          type="number"
          id="detail-quantity"
          value="1"
          min="1"
          max="20"
        >

        <button id="detail-add-to-cart" class="add-btn">
          Add to Bag
        </button>

      </div>
    </div>
  `;

  modal.hidden = false;
}

function closeProductDetails() {
  const modal = document.getElementById("product-modal");

  if (modal) modal.hidden = true;
}


// ==========================================
// 8. PRODUCT BUTTONS
// ==========================================

if (productsContainer) {
  productsContainer.addEventListener("click", function(event) {

    const addButton = event.target.closest(".add-btn");
    const detailsButton = event.target.closest(".details-btn");
    const wishlistButton = event.target.closest(".wishlist-btn");

    if (addButton) {
      const productId = Number(addButton.dataset.id);
      const product = products.find(item => item.id === productId);

      addToCart(product, "One Size", product.colors[0], 1);

      addButton.textContent = "Added!";

      setTimeout(() => {
        addButton.textContent = "Add to Bag";
      }, 1000);
    }

    if (detailsButton) {
      openProductDetails(Number(detailsButton.dataset.id));
    }

    if (wishlistButton) {
      toggleWishlist(Number(wishlistButton.dataset.id));
    }
  });
}


// ==========================================
// 9. ADD PRODUCT TO CART
// ==========================================

function addToCart(product, size, color, quantity) {
  if (!product) return;

  const existingItem = cart.find(item =>
    item.id === product.id &&
    item.size === size &&
    item.color === color
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      size: size,
      color: color,
      quantity: quantity
    });
  }

  updateCart();
}


// ==========================================
// 10. PRODUCT DETAILS ADD BUTTON
// ==========================================

document.addEventListener("click", function(event) {

  if (event.target.id === "detail-add-to-cart") {

    const size = document.getElementById("detail-size").value;
    const color = document.getElementById("detail-color").value;

    const quantity = Math.max(
      1,
      Math.min(
        20,
        Number(document.getElementById("detail-quantity").value) || 1
      )
    );

    addToCart(selectedProduct, size, color, quantity);

    closeProductDetails();

    alert("Product added to your shopping bag!");
  }

  if (
    event.target.id === "close-product-modal" ||
    event.target.id === "product-modal"
  ) {
    closeProductDetails();
  }

});


// ==========================================
// 11. UPDATE SHOPPING CART
// ==========================================

function updateCart() {
  if (!cartItems || !count || !total) return;

  if (cart.length === 0) {

    cartItems.innerHTML =
      '<p class="empty-cart">Your shopping bag is empty.</p>';

  } else {

    cartItems.innerHTML = cart.map((item, index) => `
      <div class="cart-item">

        <div class="cart-item-name">
          <strong>${item.name}</strong>

          <p>Size: ${item.size} | Colour: ${item.color}</p>

          <p>${formatPrice(item.price)} each</p>
        </div>

        <div class="quantity-controls">

          <button
            class="quantity-btn"
            data-index="${index}"
            data-change="-1"
          >−</button>

          <span>${item.quantity}</span>

          <button
            class="quantity-btn"
            data-index="${index}"
            data-change="1"
          >+</button>

        </div>

        <strong>
          ${formatPrice(item.price * item.quantity)}
        </strong>

        <button class="remove-btn" data-index="${index}">
          Remove
        </button>

      </div>
    `).join("");

  }

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  count.textContent = cartCount;
  total.textContent = formatPrice(cartTotal);
}


// ==========================================
// 12. CART QUANTITY AND REMOVE BUTTONS
// ==========================================

if (cartItems) {

  cartItems.addEventListener("click", function(event) {

    const quantityButton = event.target.closest(".quantity-btn");
    const removeButton = event.target.closest(".remove-btn");

    if (quantityButton) {

      const index = Number(quantityButton.dataset.index);
      const change = Number(quantityButton.dataset.change);

      if (!cart[index]) return;

      cart[index].quantity += change;

      if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
      }

      updateCart();
    }

    if (removeButton) {

      const index = Number(removeButton.dataset.index);

      cart.splice(index, 1);

      updateCart();
    }

  });

}


// ==========================================
// 13. WISHLIST
// ==========================================

function toggleWishlist(productId) {

  if (wishlist.includes(productId)) {

    wishlist = wishlist.filter(id => id !== productId);

  } else {

    wishlist.push(productId);

  }

  saveWishlist();
  displayProducts();
  updateWishlistCount();
}

function updateWishlistCount() {

  const wishlistCount = document.getElementById("wishlist-count");

  if (wishlistCount) {
    wishlistCount.textContent = wishlist.length;
  }

  const wishlistContainer = document.getElementById("wishlist-items");

  if (!wishlistContainer) return;

  const savedProducts = products.filter(product =>
    wishlist.includes(product.id)
  );

  if (savedProducts.length === 0) {

    wishlistContainer.innerHTML =
      "<p>You haven't saved any favourites yet.</p>";

  } else {

    wishlistContainer.innerHTML = savedProducts.map(product => `
      <div class="wishlist-item">

        <img
          src="https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=300&q=80"
          alt="${product.name}"
        >

        <div>
          <h3>${product.name}</h3>
          <p>${formatPrice(product.price)}</p>

          <button class="wishlist-remove-btn" data-id="${product.id}">
            Remove
          </button>
        </div>

      </div>
    `).join("");

  }
}

document.addEventListener("click", function(event) {

  const removeButton = event.target.closest(".wishlist-remove-btn");

  if (removeButton) {
    toggleWishlist(Number(removeButton.dataset.id));
  }

});


// ==========================================
// 14. ORDER REFERENCE AND CHECKOUT
// ==========================================

const checkoutForm = document.getElementById("checkout-form");

if (checkoutForm) {

  checkoutForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    if (cart.length === 0) {
      alert("Your shopping bag is empty.");
      return;
    }

    const button = document.getElementById("place-order");
    const message = document.getElementById("order-message");

    button.disabled = true;
    button.textContent = "Submitting Order...";

    message.textContent = "";

    const cartTotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const orderReference = createOrderReference();

    const orderDetails = cart.map((item, index) =>
      `${index + 1}. ${item.name} | Size: ${item.size} | Colour: ${item.color} | Quantity: ${item.quantity} | Subtotal: ${formatPrice(item.price * item.quantity)}`
    ).join("\n");

    const templateParams = {

      customer_name: document.getElementById("customer-name").value,

      customer_email: document.getElementById("customer-email").value,

      customer_phone: document.getElementById("customer-phone").value,

      delivery_address: document.getElementById("delivery-address").value,

      order_reference: orderReference,

      order_details: orderDetails,

      total_amount: cartTotal.toLocaleString("en-NG"),

      payment_method: document.getElementById("payment-method").value

    };

    try {

      await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        templateParams
      );

      const confirmation = document.getElementById("order-confirmation");

      if (confirmation) {
        confirmation.hidden = false;
        confirmation.innerHTML = `
          <h3>Thank you for shopping with ÉLORA!</h3>
          <p>Your order reference is:</p>
          <strong>${orderReference}</strong>
          <p>Your order has been received. Payment is awaiting confirmation.</p>
        `;
      }

      message.textContent =
        "Your order was submitted successfully!";

      cart = [];
      updateCart();
      checkoutForm.reset();

    } catch (error) {

      console.error("Order email error:", error);

      message.textContent =
        "We couldn't submit your order. Please try again.";

    } finally {

      button.disabled = false;
      button.textContent = "Place Order";

    }

  });

}


// ==========================================
// 15. CUSTOMER REVIEWS
// ==========================================

const reviewForm = document.getElementById("review-form");

function displayReviews() {

  const reviewContainer = document.getElementById("reviews-list");

  if (!reviewContainer) return;

  if (reviews.length === 0) {

    reviewContainer.innerHTML =
      "<p>No reviews yet. Be the first to share your feedback!</p>";

    return;
  }

  reviewContainer.innerHTML = reviews.map(review => `
    <div class="review-card">

      <h3>${review.name.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</h3>

      <p class="review-stars">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</p>

      <p>${review.comment.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>

    </div>
  `).join("");

}

if (reviewForm) {

  reviewForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("review-name").value.trim();

    const rating = Number(document.getElementById("review-rating").value);

    const comment = document.getElementById("review-comment").value.trim();

    if (!name || !comment || rating < 1 || rating > 5) {
      alert("Please complete all review fields.");
      return;
    }

    reviews.unshift({
      name: name,
      rating: rating,
      comment: comment
    });

    saveReviews();
    displayReviews();

    reviewForm.reset();

    alert("Thank you for your feedback!");

  });

}


// ==========================================
// 16. INITIALISE WEBSITE
// ==========================================

displayProducts();
updateCart();
updateWishlistCount();
displayReviews();
