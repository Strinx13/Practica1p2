// Cambia el contenido del elemento con id "demo" a "¡hola mundo!"
document.getElementById("demo").innerHTML = "¡hola mundo!";

// Cambia el contenido del elemento con id "p1" a "Nuevo Texto"
document.getElementById("p1").innerHTML = "Nuevo Texto";

// Obtiene el elemento con id "Titulo" y cambia su contenido a "Nuevo Encabezado"
const elemento = document.getElementById("Titulo");
elemento.innerHTML = "Nuevo Encabezado";

// Obtiene todos los elementos <p> y los imprime en la consola
const paragraphs = document.getElementsByTagName('p');
console.log('Párrafos en la página:', paragraphs);

// Obtiene el elemento con id "main" y lo imprime en la consola
const x = document.getElementById('main');
console.log(x);

// Obtiene todos los elementos <p> y los imprime en la consola
const y = document.getElementsByTagName('p');
console.log(y);

// Obtiene todos los elementos con la clase "intro" y los imprime en la consola
const xdos = document.getElementsByClassName("intro");
console.log(xdos);

// Obtiene todos los elementos <p> con la clase "intro"
const xx = document.querySelectorAll("p.intro");

// Obtiene todos los elementos <ul> > <li> y los imprime en la consola
const listItems = document.querySelectorAll("ul > li");
console.log(listItems);

// Obtiene todos los elementos <h1> y los imprime en la consola
const h1Elemento = document.querySelectorAll("h1");
console.log(h1Elemento);

// Obtiene todos los elementos con la clase "list" y los imprime en la consola
const list = document.querySelectorAll(".list");
console.log(list);

// Itera sobre todos los elementos <ul> > <li> y los imprime en la consola
const listaDeElementos = document.querySelectorAll("ul > li");
listaDeElementos.forEach((item) => {
    console.log(item);
});

// Cambia el color del primer elemento <h1> a azul
const h1 = document.querySelector("h1");
h1.style.color = "blue";

// Obtiene el formulario con el nombre "frm1" y obtiene los valores de sus elementos
const a = document.forms['frm1'];
let texto = "";
for (let i = 0; i < a.elements.length; i++) {
    texto += a.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = texto;
console.log(a);

// Crea un nuevo elemento <ul> y lo añade al body del documento
let lista = document.createElement("ul");
document.body.appendChild(lista);

// Crea un nuevo elemento <li> con texto "flor" y lo añade a la lista
let elemento1 = document.createElement("li");
elemento1.textContent = "flor";
lista.appendChild(elemento1);

// Crea un nuevo elemento <li> con texto "xbox" y lo añade a la lista
let elemento2 = document.createElement("li");
elemento2.textContent = "xbox";
lista.appendChild(elemento2);

// Añade un evento click al botón con id "btn" que muestra una alerta al hacer clic
const button = document.getElementById('btn');
button.addEventListener("click", () => {
    alert("gracias por dar click");
});

// Función para validar un formulario, verifica si el campo "nombre" está vacío
function validarFormulario() {
    let c = document.forms["miFormulario"]["nombre"].value.trim();
    if (c === "") {
        alert("Se debe completar el nombre");
        return false;
    }
    return true;
}

// Función para validar un número, verifica si el valor ingresado es un número entre 1 y 10
function validarNumero() {
    let b = document.getElementById("numero").value;
    let texto2;
    if (isNaN(b) || b < 1 || b > 10) {
        texto2 = "Entrada NO valida";
    } else {
        texto2 = "Entrada Correcta";
    }
    document.getElementById("demo1").innerHTML = texto2;
}

// Cambia la fuente de la imagen con id "miImagen" a "bici.jpg"
document.getElementById("miImagen").src = "bici.jpg";

// Cambia el contenido del elemento con id "demo3" a la fecha actual
document.getElementById("demo3").innerHTML = "Fecha: " + Date();
