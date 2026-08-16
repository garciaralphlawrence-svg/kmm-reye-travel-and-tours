// main.js for Kmm Reye Travel and Tours

const featuredPackages = [
  {
    name: 'Boracay Getaway',
    details: '3 Days, 2 Nights - Beach Resort',
    price: '₱12,500 per person'
  },
  {
    name: 'Palawan Adventure',
    details: '4 Days, 3 Nights - Island Hopping',
    price: '₱18,000 per person'
  }
];

document.addEventListener('DOMContentLoaded', function() {
  const list = document.getElementById('featured-list');
  if (!list) return;

  list.innerHTML = featuredPackages.map(function(pkg) {
    return (
      '<div class="package">' +
        '<h3>' + pkg.name + '</h3>' +
        '<p>' + pkg.details + '</p>' +
        '<p class="price">' + pkg.price + '</p>' +
      '</div>'
    );
  }).join('');
});
