'use client';
import { useState, useEffect, use } from "react";
//import UserDetails from "./components/UserDetails";
import { useParams } from "next/navigation";
import UserDetails from "../components/UserDetails";


export default function UserDetailPage() {

    const [user, setUser] = useState(null);
    const params = useParams();
    const userId = params.id;
    useEffect(() => {
        // Function para obtener los usuarios de la API
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/src/data/usersv2.json');
                const data = await response.json();
                // Buscar el usuario por ID

                console.log(userId);
                console.log(params.id);
                const foundUser = data.find((user) => user.id === userId);
                //console.log(foundUser);
                if (foundUser) {
                    setUser(foundUser);
                } else {
  

                    console.log('Usuario no encontrado');
                }

            } catch (error) {
felipe-pruebas
                console.error('Error al cargar usuarios', error);
                setLoading(false);
            }
        };
        fetchUsers();

    }, []);

    return (
        <div>
            <UserDetails user={user} />
        </div>
    );
}