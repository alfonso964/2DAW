import { obtenerAsignatura } from '@/lib/data'
import { Suspense } from 'react'

async function PaginaAsignatura({ params }) {
    const { id } = params

    return (
        <div>
            <h1 className='text-4xl'>Asignatura</h1>

            <Suspense fallback={<p>Cargando...</p>}>
                <Asignatura id={id} />
            </Suspense>
        </div>
    )
}

export default PaginaAsignatura

async function Asignatura({ id }) {
    const asignatura = await obtenerAsignatura(id)

    return (
        <>
            <p>{asignatura.nombre}</p>
            <p>{asignatura.profesor}</p>
            <p>{asignatura.horas_semana}</p>
        </>
    )
}
