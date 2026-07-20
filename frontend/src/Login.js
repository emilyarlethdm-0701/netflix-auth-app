import React,{useState} from "react";
import axios from "axios";


function Login(){


const [register,setRegister]=useState(false);

const [username,setUsername]=useState("");

const [password,setPassword]=useState("");

const [message,setMessage]=useState("");



const enviar=async(e)=>{


e.preventDefault();



const url=register

?"http://127.0.0.1:8000/api/register/"

:"http://127.0.0.1:8000/api/login/";



try{


const respuesta=await axios.post(

url,

{
username,
password
}

);



if(register){


setMessage(
"Registro exitoso"
);


setRegister(false);


}else{


localStorage.setItem(

"access",

respuesta.data.access

);


localStorage.setItem(

"refresh",

respuesta.data.refresh

);



setMessage(
"Inicio de sesión correcto"
);


}



}

catch(error){


console.log(error);


setMessage(

"Error de conexión o datos incorrectos"

);


}


}




return(


<div>


<h1 className="cecyflix-logo">

CECYFLIX

</h1>



<h2>

{

register?

"Crear cuenta":

"Iniciar sesión"

}

</h2>



<form onSubmit={enviar}>


<input

type="text"

placeholder="Usuario"

value={username}

onChange={
e=>setUsername(e.target.value)
}

/>



<input

type="password"

placeholder="Contraseña"

value={password}

onChange={
e=>setPassword(e.target.value)
}

/>



<button>


{

register?

"Registrarse":

"Ingresar"

}


</button>


</form>



<p>

{message}

</p>



<p>


<span

style={{
color:"#e50914",
cursor:"pointer"
}}

onClick={()=>{

setRegister(!register);

setMessage("");

}}

>


{

register?

"Ya tengo cuenta":

"Crear cuenta"

}


</span>


</p>


</div>


)

}


export default Login;