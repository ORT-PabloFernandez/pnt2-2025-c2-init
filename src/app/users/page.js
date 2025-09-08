'use client';

import UsersList from "./components/UserList";
import { useState, useEffect } from 'react';
//import { users } from "../data/mocs";


export default function UsersPage() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Function para obtener los usuarios de la API
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/src/data/usersv2.json');
                const data = await response.json();

                setUsers(data);
                setLoading(false);
            } catch (error) {
                console.error('Error al cargar usuarios', error);
                setLoading(false);
            }

        };
        setTimeout(() => {
            fetchUsers();
        }, 2000);

    }, []);

    return (
        <div className="container">
            {loading ? (
                <p>Cargando usuarios...</p>
            ) : (
                <UsersList users={users} />)
            }
        </div>
    );
}