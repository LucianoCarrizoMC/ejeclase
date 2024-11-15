import { obtenerPersonas, } from "../firebase/Promesas";

window.addEventListener("load",()=>{
    let valor=window.location.search

    const urlParams=new URLSearchParams(valor)
    var id =urlParams.get("id")

    obtenerPersonas(id).then((p)=>{
        console.log(p)

        let nombre=document.getElementById("nombre")
        let apellido=document.getElementById("apellido")
        let pais=document.getElementById("pais")
        let genero =document.getElementById("genero")

        
        
    })
})