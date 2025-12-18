let productsGrid = document.getElementById('productsGrid')
let productsArray = []
let url = 'https://my-json-server.typicode.com/morolo223/Lesson11/db'
let cartWindow = document.getElementById('cartProducts')
let buyButton = document.querySelector('.buyButton')
let cart = []


fetch(url)
.then(async function(response){
    let products = await response.json()
    console.log(products.products)
        products.products.forEach((product, index) => {
        productsArray.push(product)
        productsGrid.innerHTML += `
            <div class="product">
                 <h2>${product.title}</h2>
                 <img src="${product.img}" alt="test.img">
                 <p>price: ${product.price}</p>
                 <p>description: ${product.description}</p>
                 <button onclick="toCart(${index})">Buy</button>
         </div>
    `
    })
})








function openCart(){
    console.log('open')
    cartWindow.classList.toggle('hide')
    
}

function toCart(index){
    cart.push(productsArray[index])
    redrawCart()
}

function redrawCart(){
    cartWindow.innerHTML = ``

    cart.forEach(product => {
        cartWindow.innerHTML += `
            <div class="cart-item">
                <h3>${product.title}</h3>
                <p>${product.price}</p>
            </div>
        `
    })
}