
let container = []
let array = []

document.addEventListener("DOMContentLoaded", function () {
    getJSONData(PRODUCTS_URL).then(resultObj => {
        if (resultObj.status == "ok") {
            container = resultObj.data;
            array = container.products
            VerAutos(container.products);
        } else {
            throw Error(response.statusText);
        }
    })
})

const lista = document.querySelector("#InfoAutos");
function VerAutos(array) {
    lista.innerHTML = ""
    let htmlContentToAppend = "";
    for (let info of array) {
        htmlContentToAppend += `
        <div onclick="dirigir(${info.id})" class="list-group-item list-group-item-action cursor-active">
        <div class="row">
            <div class="col-3">
                <img src="${info.image}" alt="${info.cost}" class="img-thumbnail">
            </div>
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">${info.name} ${info.cost} ${info.currency} </h4>
                    <small class="text-muted">${info.soldCount} artículos</small>
                </div>
                <p class="mb-1">${info.description}</p>
            </div>
        </div>
    </div>`
    }

    lista.innerHTML += htmlContentToAppend;
    console.log(array)
}





document.getElementById("sortByCount").addEventListener("click", function () {
    container.products.sort(function (a, b) {
        return ((b.soldCount) - (a.soldCount))
    })
    VerAutos(container.products)
})

document.getElementById("filtAsc").addEventListener("click", function () {
    container.products.sort(function (a, b) {
        if (a.cost < b.cost) { return -1; }
        if (a.cost > b.cost) { return 1; }
        return 0;
    })
    VerAutos(container.products)
})

document.getElementById("filtDesc").addEventListener("click", function () {
    container.products.sort(function (a, b) {
        if (a.cost > b.cost) { return -1; }
        if (a.cost < b.cost) { return 1; }
        return 0;
    })
    VerAutos(container.products)
})

document.getElementById("clearRangeFilter").addEventListener("click", function () {
    document.getElementById("rangeFilterCountMin").value = "";
    document.getElementById("rangeFilterCountMax").value = "";

    minCount = undefined;
    maxCount = undefined;

    VerAutos(container.products);
});

function filtrar(array) {

    let filtrararray = array.filter(products => (parseInt(products.cost) >= min || min == undefined) && (parseInt(products.cost) <= max || max == undefined));

    return filtrararray;
}

document.getElementById("filtrador").addEventListener("click", function () {

    if (document.getElementById("rangeFilterCountMin").value != "") {
        min = parseInt(document.getElementById("rangeFilterCountMin").value);
    }
    else {
        min = undefined;
    }

    if (document.getElementById("rangeFilterCountMax").value != "") {
        max = parseInt(document.getElementById("rangeFilterCountMax").value);
    }
    else {
        max = undefined;

    }
    VerAutos(filtrar(container.products))
});





function dirigir(id) {
    localStorage.setItem("productsID", id);
    window.location = "product-info.html"
}
