document.addEventListener('DOMContentLoaded', function () {
  const checkboxes = document.querySelectorAll('.form-check-input');
  const products = document.querySelectorAll('.products-card');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
      const selectedFilters = Array.from(document.querySelectorAll('.form-check-input:checked'))
        .map(checkbox => checkbox.getAttribute('data-filter'));

      if (selectedFilters.length === 0) {
        products.forEach(product => {
          product.style.display = 'flex';
        });
        return;
      }

      products.forEach(product => {
        const productFilters = Array.from(product.classList);
        const isVisible = selectedFilters.some(filter => productFilters.includes(filter));
        product.style.display = isVisible ? 'flex' : 'none';
      });
    });
  });

  const filterButton = document.getElementById('filterButton');
  const sideNav = document.getElementById('sideNav');
  const closeButton = document.getElementById('closeButton');

  filterButton.addEventListener('click', () => {
    sideNav.classList.add('active');
  });

  closeButton.addEventListener('click', () => {
    sideNav.classList.remove('active');
  });

});


