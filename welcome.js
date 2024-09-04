let btnEliminar = document.getElementById("btnEliminar")
let saludo = document.getElementById("saludo")
if(this.localStorage.getItem("nombre")!=null){
    saludo.innerText = "hola "+ this.localStorage.getItem("nombre") + ", bienvenido de nuevo"
}else{
    saludo.innerText = "Por favor vuelve al index e ingresa tu nombre"
}

btnEliminar.addEventListener("click",function(event){
    localStorage.clear()
    saludo.innerText=""
})

