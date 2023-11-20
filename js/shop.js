document.addEventListener('DOMContentLoaded', function () {
    var products = document.querySelectorAll('.product');

    products.forEach(function (product) {
      product.addEventListener('click', function () {
        var productName = product.querySelector('h2').innerText;
        alert('Clicked on ' + productName);
      });
    });
  });

  function openProductPage(url) {
    window.location.href = url;
}
  