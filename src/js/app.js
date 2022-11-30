import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

let products = document.querySelectorAll('.product');
products.forEach(product => {
  product.classList.add('data-price')
  let data_price = document.querySelector('.price').textContent;
  console.log(data_price);
});
});
