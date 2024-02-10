let currentCatalogId = 1;
let currentProductId = null;

function editProduct(productId) {
  const productName = document.getElementById(`product-${productId}`).querySelector('h5').textContent;
  const productDescription = document.getElementById(`product-${productId}`).querySelector('p').textContent;

  document.getElementById('product-name').value = productName;
  document.getElementById('product-description').value = productDescription;

  currentProductId = productId;
  document.getElementById('form-title').textContent = 'Editar producto';
}

function deleteProduct(productId) {
  const productElement = document.getElementById(`product-${productId}`);
  productElement.parentNode.removeChild(productElement);
}

function saveProduct() {
  const productName = document.getElementById('product-name').value;
  const productDescription = document.getElementById('product-description').value;

  if (productName && productDescription) {
    if (currentProductId) {
      const productElement = document.getElementById(`product-${currentProductId}`);
      productElement.querySelector('h5').textContent = productName;
      productElement.querySelector('p').textContent = productDescription;
    } else {
      const newProductId = Date.now();
      const productContainer = document.getElementById(`product-list-${currentCatalogId}`);
      const newProductElement = document.createElement('div');
      newProductElement.className = 'product';
      newProductElement.id = `product-${newProductId}`;
      newProductElement.innerHTML = `
        <h5>${productName}</h5>
        <p>${productDescription}</p>
        <button onclick="editProduct(${newProductId})">Editar</button>
        <button onclick="deleteProduct(${newProductId})">Eliminar</button>
      `;
      productContainer.appendChild(newProductElement);
    }

    document.getElementById('product-name').value = '';
    document.getElementById('product-description').value = '';
    currentProductId = null;
    document.getElementById('form-title').textContent = 'Crear producto';
  }
}
