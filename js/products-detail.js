let products = null;
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        console.log(products);
        showDetail();
    })
let list = document.querySelector('.similar');
function showDetail() {
    let detail = document.querySelector('.detail');
    let productId = new URLSearchParams(window.location.search).get('id');
    let thisProduct = products.filter(value => {
        return value.id == productId;
    })[0];
    if (!thisProduct) {
        window.location.href = '/';
    }
    detail.querySelector('.image img').src = thisProduct.image;
    detail.querySelector('.name').innerHTML = thisProduct.productName;
    detail.querySelector('.price').innerHTML = thisProduct.price + 'ლ';
    detail.querySelector('.description').innerHTML = thisProduct.description;
        (products.filter(value => value.id != productId)).forEach(product => {
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
                    <p class="name">${product.description}</p>
                    <button class="more">ვრცლად</button>
                </div>
                    <img src="./img/add.svg" alt="add" class="add-btn">`
        list.appendChild(newProduct);
    });
}