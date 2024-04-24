document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();

    const products = document.getElementsByClassName('product');

    for (const product of products) {
      const productName = product.getElementsByTagName('h2')[0].innerText.toLowerCase();

      if (productName.includes(searchTerm)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    }

    searchInput.value = '';
  });