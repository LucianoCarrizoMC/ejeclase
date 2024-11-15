import { db } from "../firebase/Firebase.js";
import { collection, addDoc, getDocs, deleteDoc, doc ,getDoc,updateDoc} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js"; 



export let agregaPersona =async(persona)=>{
   const docRef = await addDoc(collection(db, "persona"),persona);
}

export let obtenerPersonas =async()=>{
   const querySnapshot = await getDocs(collection(db,"persona"))
   var Personas=[]
   querySnapshot.forEach((doc) => {


   let persona={
      "id":doc.id,
      "nombre":doc.data().nombre,
      "apellido":doc.data().apellido,
      "pais":doc.data().pais,
      "genero":doc.data().genero
   }
   Personas.push(persona)
   console.log(doc.id," => ",doc.data());
});
   return Personas;
};

export let eliminarPersona =async(idPersona)=>{
   await deleteDoc(doc(db,"persona",idPersona))
}

export let obtenerPersona =async(idPersona)=>{
   const docRef =doc(db,"persona",idPersona)
   const docSnap =await getDoc(docRef)
   let persona={
      'id':docSnap.id,
      'nombre':docSnap.data().nombre,
      'apellido':docSnap.data().apellido,
      'pais':docSnap.data().pais,
      'genero':docSnap.data().genero,

   }
   return persona
}
