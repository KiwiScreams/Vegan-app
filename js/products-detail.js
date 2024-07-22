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
}