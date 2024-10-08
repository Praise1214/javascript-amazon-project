import {cart, calculateCartQuantity} from '../data/cart.js'
import {products, loadProducts} from '../data/products.js';
import { formatCurrency } from './utils/money.js';

loadProducts(renderProductsGrid);

function renderProductsGrid() {


  let productsHTML = '';

  products.forEach((product) => {
    productsHTML += `
      <div class="product-container">
            <div class="product-image-container">
              <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
              ${product.name}
            </div>

            <div class="product-rating-container">
              <img class="product-rating-${product.getStarsUrl()}"
                src="images/ratings/rating-45.png">
              <div class="product-rating-count link-primary">
                ${product.getPrice()}
              </div>
            </div>

            <div class="product-price">
              $${formatCurrency(product.priceCents)}
            </div>

            <div class="product-quantity-container">
              <select class="js-quantity-selector-${product.id}">
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            ${product.extraInfoHTML()}

            <div class="product-spacer"></div>

            <div class="added-to-cart js-added-${product.id}">
              <img src="images/icons/checkmark.png">
              Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart"
            data-product-id = '${product.id}'
            >
              Add to Cart
            </button>
          </div>`
  })



  document.querySelector('.js-products-grid').innerHTML = productsHTML;

  const addedMessageTimeout = {};





  function updateCartQuantity() {
  const cartQuantity = calculateCartQuantity();

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

  }

    updateCartQuantity()


  document.querySelectorAll('.js-add-to-cart').forEach((button) => {button.addEventListener('click', () => {
        
      const productId = button.dataset.productId;

      const quantitySelector = document.querySelector(`.js-quantity-selector-${button.dataset.productId}`)

      const quantity = Number(quantitySelector.value);
      
      addtoCart(productId, quantity);

      updateCartQuantity();


      const quantityAdd = document.querySelector(`.js-added-${button.dataset.productId}`)

      const previousTimeoutId = addedMessageTimeout[productId];

      if (previousTimeoutId) {
        clearTimeout(previousTimeoutId)
      }

      quantityAdd.classList.add('added-to-cart-visible');

      const timeoutId = setTimeout(() => {
        quantityAdd.classList.remove('added-to-cart-visible')
      }, 2000)
      
      addedMessageTimeout[productId] = timeoutId
        

  })
  })
}