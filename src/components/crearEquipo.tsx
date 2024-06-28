import React, { useState } from 'react';

const CrearEquipo: React.FC = () => {
    const [equipo, setEquipo] = useState([{ nombre: '', tipo: '' }]);

    const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const values = [...equipo]; 
        const name = event.target.name; 
        const value = event.target.value; 
    
        if (values[index]) { 
            values[index] = {
                ...values[index], 
                [name]: value 
            };
            setEquipo(values); 
        }
    };
    

    const handleAddPokemon = () => {
        setEquipo([...equipo, { nombre: '', tipo: '' }]);
    };

    const handleRemovePokemon = (index: number) => {
        const values = [...equipo];
        values.splice(index, 1);
        setEquipo(values);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await fetch('/api/entrenador/equipo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ equipo }),
        });
        if (response.ok) {
            alert('Equipo creado exitosamente');
            setEquipo([{ nombre: '', tipo: '' }]);
        } else {
            alert('Error al crear el equipo');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Crear Equipo de Pokémon</h2>
            {equipo.map((pokemon, index) => (
                <div key={index}>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre del Pokémon"
                        value={pokemon.nombre}
                        onChange={(event) => handleChange(index, event)}
                        required
                    />
                    <input
                        type="text"
                        name="tipo"
                        placeholder="Tipo del Pokémon"
                        value={pokemon.tipo}
                        onChange={(event) => handleChange(index, event)}
                        required
                    />
                    <button type="button" onClick={() => handleRemovePokemon(index)}>Eliminar</button>
                </div>
            ))}
            <button type="button" onClick={handleAddPokemon}>Agregar Pokémon</button>
            <button type="submit">Crear Equipo</button>
        </form>
    );
};

export default CrearEquipo;
