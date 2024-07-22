let products = null;
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        console.log(products);
        addToHtml();
    })
let list = document.getElementById('products');
function addToHtml() {
    products.forEach(product => {
        let newProduct = document.createElement('a');
        newProduct.href = '/detail.html?id=' + product.id;
        newProduct.classList.add('card');
        newProduct.innerHTML = `
                <div class="card-image">
                    <img src="${product.image}">
                </div>
                <div class="card-body">
                    <h3 class="price">${product.price}</h3>
                    <p class="name">${product.productName}</p>
                    <button class="more">ვრცლად</button>
                </div>
                    <img src="./img/add.svg" alt="add" class="add-btn">`
        list.appendChild(newProduct);
    });
}