import { obtenerPersonas, eliminarPersona} from "../firebase/Promesas.js "

window.addEventListener("load",()=>{
    var personas =obtenerPersonas()
    console.log(personas)
    var tableit =document.getElementById("tablaaa")
    personas.then((listado)=>{
        let filas =""
        listado.forEach((t)=>{
            filas += "<tr>"
            filas += "<td>"+t.nombre+"</td>"
            filas += "<td>"+t.apellido+"</td>"
            filas += "<td>"+t.pais+"</td>"
            filas += "<td>"+t.genero+"</td>"

            filas += "<td><button id='mod"+ t.id +"'>Modificar</button></td>"
            filas += "<td><button id='eli"+ t.id +"'>Eliminar</button></td>"

            filas += "</tr>"
        })
        console.log(filas)
        tableit.innerHTML=filas;

        listado.forEach((p)=>{
            let botonEliminar=document.getElementById("eli"+p.id);
            botonEliminar.addEventListener("click",()=>{
                alert("tai eliminando")
                eliminarPersona(p.id).then(()=>{
                    location.reload()
                })

            })

            let botomActualizar=document.getElementById("mod"+p.id)
            botomActualizar.addEventListener( "click",()=>{
                alert("nos viramos a "+p.id)
                window.location.href= "/Actualizar.html?id="+p.id;


            })
            })
        })

})