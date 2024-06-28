import React, { useState } from 'react';

const EntrenadorForm: React.FC = () => {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [equipo, setEquipo] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await fetch('/api/entrenador', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre, edad, equipo }),
        });
        if (response.ok) {
            alert('Perfil creado exitosamente');
            setNombre('');
            setEdad('');
            setEquipo('');
        } else {
            alert('Error al crear el perfil');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Edad:</label>
                <input
                    type="number"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Equipo:</label>
                <input
                    type="text"
                    value={equipo}
                    onChange={(e) => setEquipo(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Crear Perfil</button>
        </form>
    );
};

export default EntrenadorForm;
