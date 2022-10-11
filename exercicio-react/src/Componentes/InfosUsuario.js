import React from "react";

export default function InfosUsuario(){
    const titulo = "Título do vídeo"
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido")
    }
    return(
    <>
        <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=1 " alt=""></img>
        <h4>{titulo}</h4>
    </>
    )
}