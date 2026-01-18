'use client'
import Link from 'next/link'
import { use } from 'react'

export default function Lista({ promesaEstudiantes }) {

    const estudiantes = use(promesaEstudiantes)

    return (
        <div className='flex flex-wrap gap-10'>
            {estudiantes.map((estudiante) => (
                <Item estudiante={estudiante} key={estudiante.id} />
            ))}
        </div>
    )
}

function Item({ estudiante }) {
    return (
        <Link href={`/estudiantes/${estudiante.id}`}>
            <div className='bg-green-100 p-4'>
                <p>Nombre: {estudiante.nombre}</p>
                <p>Fecha nacimiento:{" "} {new Date(estudiante.fecha_nacimiento).toLocaleDateString()}
                </p>
                <p>Tutor legal: {estudiante.tutor_legal}</p>
            </div>
        </Link>
    )
}
