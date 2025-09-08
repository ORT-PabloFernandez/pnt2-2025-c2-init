'use client';

import "./user.css";
import Link from "next/link";



export default function UserDetails({ user }) {


    //console.log(props.user);
    // TODO: Mostrar el avatar del usuario (foto)
    // TODO: Mostrar todos los demas datos del usuario

    // TODO: Mostrar un boton de Volver a la lista

    if (!user) {
        return <div>Cargando...</div>;
    }


    if(!user) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <div>Nombre: {user.name}</div>
            <div>Email: {user.email}</div>
        </div>
    );
}