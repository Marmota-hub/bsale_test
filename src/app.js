
let contenidoCard = document.querySelector('.container')
$(document).ready(function() {
    fetch('http://localhost:3000/')
    .then(res => res.json())
    .then(data => {
        section(data)

    })
    
    
})

function section(data){
    contenidoCard.innerHTML = '';
    for(let valor of data){
        contenidoCard.innerHTML += `
        <section class="container__card">
        <img class="container__img" src="${valor.url_image}" alt="">
            <p class="container__title">${valor.name}</p>
            <hr class="container__hr">
            <div class="detalles">
                <p class="detalles__price">$${valor.price}</p>
                <button class="detalles__button"><img class="logo" src="/images/cart.svg" alt="icono carro de compras"></button>
            </div>
        </section>`;
    }
}


