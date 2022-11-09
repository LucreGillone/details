const info = data

const queryString = location.search 
const params = new URLSearchParams(queryString)
const id = params.get("id")

console.log(id)

const persona = info.find(item => item._id === id)

const div = document.getElementById("container")
div.innerHTML = `<div class="card text-center">
                    <div class="card-header">
                    Destacado
                    </div>
                    <div class="card-body">
                    <h5 class="card-title">${persona.name}</h5>
                    <p class="card-text">${persona.text}.</p>
                    </div>
                    <div class="card-footer text-muted">
                    ${persona.country 
                    ? persona.country 
                    : "Esta persona no tiene país"}
                    </div>
                    </div>`


//Condicionales
//if(condición) {

// esto
//} else {
// esto otro
//}

//Ternario
// condición ? si true se hace esto : sino esto otro

