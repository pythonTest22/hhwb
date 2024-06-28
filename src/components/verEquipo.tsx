import React, { useEffect, useState } from 'react';

const VerEquipo: React.FC = () => {
    const [equipo, setEquipo] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEquipo = async () => {
            try {
                const response = await fetch('/api/entrenador');
                if (response.ok) {
                    const data = await response.json();
                    setEquipo(data.equipo);
                } else {
                    setError('Error al obtener el equipo del entrenador');
                }
            } catch (err) {
                setError('Error al conectar con el servidor');
            }
        };

        fetchEquipo();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    if (equipo.length === 0) {
        return <div>No hay Pokémon en el equipo</div>;
    }

    return (
        <div>
            <h1>Equipo del Entrenador</h1>
            <ul>
                {equipo.map((pokemon, index) => (
                    <li key={index}>
                        <p>Nombre: {pokemon.nombre}</p>
                        <p>Tipo: {pokemon.tipo}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VerEquipo;
