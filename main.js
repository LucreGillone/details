const datos = data
console.log(datos)

console.log([document])

let divContainer = document.getElementById("container")

function renderCards(info) {
  info.forEach(item => {
    divContainer.innerHTML += `<div class="card" style="width: 18rem;">
                                <div class="card-body">
                                  <h5 class="card-title">${item.name}</h5>
                                  <p class="card-text">${item.text}/p>
                                  <a href="./details.html?id=${item._id}" class="btn btn-primary">View more</a>
                                </div>
                              </div>
    `
  })
}


renderCards(datos)

{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Título de la tarjeta</h5>
    <p class="card-text">Un texto de ejemplo rápido para colocal cerca del título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p>
    <a href="#" class="btn btn-primary">Ir a algún lugar</a>
  </div>
</div> */}