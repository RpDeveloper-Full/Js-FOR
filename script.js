// Obtenemos la lista del HTML
const lista = document.getElementById("lista");

// Usamos un for para generar los números del 1 al 10
for (let i = 1; i <= 10; i++) {
  const item = document.createElement("li");
  item.textContent = "Número " + i;
  lista.appendChild(item);
}