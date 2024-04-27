"use strict";

const $users1 = document.getElementById("users1");
const $escuchar = document.getElementById("escuchar");

$escuchar.addEventListener("click", obtenerPato);

async function obtenerPato() {
  try {
    const respuesta = await fetch("https://random-d.uk/api/v2/random");
    const pato = await respuesta.json();
    const $imagen = document.getElementById("imagen");
    $imagen.setAttribute("src", pato.url);
    $imagen.setAttribute("alt", pato.message);
  } catch (error) {
    console.log(error);
  }
}

async function getusers1() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    //nombre, tel, email, ciudad, compañia
    let html = "";
    for (let i = 0; i < data.length; i++) {
      html +=
        `<li> Nombre: ${data[i].name} </li>` +
        "<ul>" +
        `<li> Telefono: ${data[i].phone}</li>` +
        `<li> Email: ${data[i].email}</li>` +
        `<li> City: ${data[i].address.city}</li>` +
        `<li> Compañia: ${data[i].company.name}</li> ` +
        "</ul>";
    }
    $users1.innerHTML = html;
  } catch (error) {
    console.log(error);
  }
}

getusers1();
