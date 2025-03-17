// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Arreglo para almacenar los nombres
let listaAmigos = [];

// Implementa una función para agregar amigos
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const lista = document.getElementById("listaAmigos");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
  } else {
    // Añadimos el nombre a la lista
    listaAmigos.push(nombre);

    // Creamos un nuevo elemento en la lista y limpiamos el campo
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
    input.value = "";
    input.focus();
  }
}

// Funcion para sortear
function sortearAmigo() {
  const res = document.getElementById("resultado");

  if (listaAmigos.length === 0) {
    alert("Lista vacia. Ingresa nombres antes de realizar un sorteo.");
  } else {
    // Obtenemos un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];

    res.textContent = `El amigo sorteado es: ${amigoSorteado}`;
  }
}
