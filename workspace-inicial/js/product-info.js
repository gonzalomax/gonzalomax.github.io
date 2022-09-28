






document.addEventListener("DOMContentLoaded", function () {
    getJSONData(PRODUCT_INFO_URL).then(resultObj => {
        if (resultObj.status == "ok") {
            Info = resultObj.data
            ShowInfo();
        } else {
            alert("chau");
        }
    })
})

let listaPI = document.getElementById("productinfo")

function ShowInfo() {

    listaPI.innerHTML = ""
    let htmlcontenidoappend = ""
    htmlcontenidoappend = `<div class="list-group-item list-group-item-action cursor-active">
                            <h3>${Info.name}</h3>
                            <b>Precio</b>
                            <p>${Info.cost} ${Info.currency}</p>
                            <b>Descripción</b>
                            <p>${Info.description}</p>
                            <b>Categoría</b>
                            <p>${Info.category}</p>
                            <b>Cantidad de vendidos</b>
                            <p>${Info.soldCount}</p>
                            </div>
                            <div class="cardg">
                            <div class="list-group list-group-horizontal">
                            <div class="galeria">
                            <span > <img src="${Info.images[0]}"class="d-block w-100 list-group-item"  >  </span>
                            <span> <img src="${Info.images[1]}" class="d-block w-100 list-group-item" >  </span>
                            <span> <img src="${Info.images[2]}"class="d-block w-100 list-group-item"  >  </span>
                            <span> <img src="${Info.images[3]}" class="d-block w-100 list-group-item" >  </span>
                            </div>
                        </div>
                    </div>
    
    `
    listaPI.innerHTML += htmlcontenidoappend
    console.log(Info)
}

document.addEventListener("DOMContentLoaded", function () {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(resultObj => {
        if (resultObj.status == "ok") {
            Infocoments = resultObj.data
            comentsInfo(Infocoments);
        } else {
            alert("chau");
        }
    })
})

let comentarioshtml = document.getElementById("comentarios")

function comentsInfo(array) {

    comentarioshtml.innerHTML = ""
    let htmlcomentariosappend = ""
    for (let i = 0; i < array.length; i++) {
        const comenta = array[i];
        htmlcomentariosappend = `
        <div class="list-group-item list-group-item-action cursor-active">
        <b>${Infocoments[i].user}</b>
        <span>${Infocoments[i].dateTime}</span>
        <br><br>
        <p>${Infocoments[i].description}</p>
        <p>${verestrellas(Infocoments[i].score)}${noverestrellas(Infocoments[i].score)}</p>
                            </div>
                            
    `
        comentarioshtml.innerHTML += htmlcomentariosappend
        console.log(comentsInfo)
    }
}

let hoy = new Date()

let fecha = hoy.getFullYear() + "-" + (hoy.getMonth() + 1) + "-" + hoy.getDate()

function comentar() {
    let puntaje = document.getElementById("estrellitador").value
    let PonerC = document.getElementById("comenta").value
    let htmlcomentar = document.getElementById("comentar")
    htmlcomentar.innerHTML += `<div class="list-group-item list-group-item-action cursor-active">
    <b>${localStorage.getItem("nombre")}</b>
    <span>${fecha}</span>
    <br><br>
    <p>${PonerC}</p>
    <p>${verestrellas(puntaje)}${noverestrellas(puntaje)} </p>
    </div>
    `



}




let mandarC = document.getElementById("enviador")

mandarC.addEventListener("click", function () {
    comentar()
});


 function verestrellas (score){
    let estrellitas = []
    for (let i = 0; i < score; i++) {
        estrellitas += `<span class="fa fa-star checked"></span>`;   
    }
    return estrellitas;

 }
 console.log(estrellitas)

 function noverestrellas(score){
    let noestrellitas  = []
    for (let z = 0;(z + score) < 5 ; z++) 
    {
        noestrellitas += `<span class="fa fa-star"></span>`;
    }
 return noestrellitas
}

function noverestrellas2(score){
    let noestrellitas2  = []
    for (let z = 1; z < 5 ; z++) 
    {   
        noestrellitas2 += `<span class="fa fa-star"></span>`;
    }
 return noestrellitas2
}

