let btnsub = document.getElementById("btnsub");
let mail = document.getElementById("mail");
let contra = document.getElementById("contra");

function alertaAA(){
    alert("Ingrese un e-mail y contraseña correctos")
}

function validar(){
    localStorage.setItem("nombre", mail.value)
    if (mail.value.length <= 0 || contra.value.length <= 0){
       return alertaAA();
    } else{
                window.location = "ecomerce.html"
            }
    }

btnsub.addEventListener("click", validar)

