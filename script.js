let txtnombre =document.getElementById("nombre")
let btnGuardar = document.getElementById("btnGuardar")
btnGuardar.addEventListener("click",function(event){
    localStorage.setItem("nombre",txtnombre.value)
})



