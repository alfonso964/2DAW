import { obtenerEstudiante } from '@/lib/data'
import { Suspense } from 'react'

async function PaginaEstudiante({ params }) {
    const { id } = params

    return (
        <div>
            <h1 className='text-4xl'>Estudiante</h1>

            <Suspense fallback={<p>Cargando...</p>}>
                <Estudiante id={id} />
            </Suspense>
        </div>
    )
}

export default PaginaEstudiante

async function Estudiante({ id }) {
    const estudiante = await obtenerEstudiante(id)

    return (
        <>
            <p>{estudiante.nombre}</p>
            <p>{estudiante.fecha_nacimiento}</p>
            <p>{estudiante.tutor_legal}</p>
            {estudiante.foto && <img src={estudiante.foto} alt="foto" />}
        </>
    )
}
