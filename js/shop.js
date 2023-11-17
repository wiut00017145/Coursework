document.addEventListener('DOMContentLoaded', function () {
    // Get all elements with the class 'product'
    var products = document.querySelectorAll('.product');
  
    // Add a click event listener to each product
    products.forEach(function (product) {
      product.addEventListener('click', function () {
        // Get the product name from the h2 element
        var productName = product.querySelector('h2').innerText;
  
        // Display an alert with the product name
        alert('Clicked on ' + productName);
      });
    });
  });
  