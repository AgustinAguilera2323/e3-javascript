const form = document.getElementById('formulario');
const numberInput = document.getElementById('pizza');
const pizza_card = document.getElementById('pizza-card');
const pizzaName = document.getElementById('pizzaName');
const pizzaImage = document.getElementById('pizzaImage');
const pizzaPrice = document.getElementById('pizzaPrice');

window.addEventListener('DOMContentLoaded', () => {
    const savedPizza = localStorage.getItem('ultimaPizza');
    if (savedPizza) {
        const pizza = JSON.parse(savedPizza);
        mostrarPizza(pizza);
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const pizzaId = parseInt(numberInput.value);

    const pizza = pizzas.find(p => p.id === pizzaId);

    if (pizza) {
        mostrarPizza(pizza);

        localStorage.setItem('ultimaPizza', JSON.stringify(pizza));
    } else {
        alert('No se encontró una pizza con ese ID.');
    }
});

function mostrarPizza(pizza) {
    pizzaName.textContent = pizza.nombre;
    pizzaImage.src = pizza.imagen;
    pizzaImage.alt = `Imagen de ${pizza.nombre}`;
    pizzaPrice.textContent = `$${pizza.precio}`;

    pizza_card.style.display = 'flex';
}