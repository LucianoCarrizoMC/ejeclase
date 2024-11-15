import { agregaPersona } from "../firebase/Promesas.js"


window.addEventListener("load",()=>{
    console.log("holaa")
    document.getElementById("btnAsereje").addEventListener("click",()=>{
        console.log("aserejee")
        let eNombre =document.getElementById("nombre")
        let eApellido =document.getElementById("apellido")
        let ePais =document.getElementById("pais")
        let eMasculino =document.getElementById("masculino")
        let eFemenino =document.getElementById("femenino")

        
        let vNombre =eNombre.value
        let vApellido =eApellido.value
        let vPais =ePais.value
        let vGenero =""

        if(eMasculino.checked)(
            vGenero="masculino"
        )
        else if (eFemenino.checked)(
            vGenero="femenino"
        )
        else( vGenero="otro")



        let persona= {
            "nombre":vNombre,
            "apellido":vApellido,
            "pais":vPais,
            "genero":vGenero

        }
        console.log (persona)
        agregaPersona(persona)
    })
})