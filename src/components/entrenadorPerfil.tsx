import React, { useEffect, useState } from 'react';

const EntrenadorPerfil: React.FC = () => {
    const [entrenador, setEntrenador] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEntrenador = async () => {
            try {
                const response = await fetch('/api/entrenador');
                if (response.ok) {
                    const data = await response.json();
                    setEntrenador(data);
                } else {
                    setError('Error al obtener el perfil del entrenador');
                }
            } catch (err) {
                setError('Error al conectar con el servidor');
            }
        };

        fetchEntrenador();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    if (!entrenador) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1>Perfil del Entrenador</h1>
            <p>Nombre: {entrenador.nombre}</p>
            <p>Edad: {entrenador.edad}</p>
            <p>Equipo: {entrenador.equipo}</p>
        </div>
    );
};

export default EntrenadorPerfil;
