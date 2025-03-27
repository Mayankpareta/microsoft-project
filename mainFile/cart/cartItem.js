
//Add To Cart

let cart = [];

const cartItems = (imageUrl, product, description, price) => {
    cart.push({imageUrl, product, description, price});
    
    createCartItem();
}

const createCartItem = () => {
    let listItem = document.querySelector("#");
    let totlePriceShow = document.querySelector("#");

    listItem = '';
    let totlePrice = 0;

    cart.forEach((item) => {
        const list = document.createElement('li');
        
        const img = document.createElement('img')
        img.src = item.imageUrl;
        const prodName = document.createElement('h2')
        prodName.textContent = item.product;
        const prodDesc = document.createElement('div')
        prodDesc.textContent = item.description;
        const prodPrice = document.createElement('div')
        prodPrice.textContent = item.price

        list.appendChild(img);
        list.appendChild(prodName);
        list.appendChild(prodDesc);
        list.appendChild(prodPrice);

        listItem.appendChild(list);

        totlePrice  += item.price;
    })
}