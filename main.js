let container = document.getElementsByClassName('main-container')[0];

let products = 'https://fakestoreapi.com/products';

fetch(products).then(response => response.json()).then(data => {
    console.log(data)

    data.forEach(product => {
        let card = document.createElement('div');
        card.classList.add('card')
        let text = document.createElement('div')
        text.classList.add('text-div')
        let title = document.createElement('p');
        title.classList.add('title')
        let imgBox = document.createElement('div')
        imgBox.classList.add('imgBox')
        let img = document.createElement('img');
        let price = document.createElement('p');
        price.classList.add('price')

        
        title.textContent = product.title
        img.src = product.image
        img.classList.add('imgStyle')
        price.textContent = product.price   
        imgBox.appendChild(img)
        card.appendChild(imgBox)
        text.appendChild(title)
        text.appendChild(price)
        card.appendChild(text)
        container.appendChild(card)
    });
})