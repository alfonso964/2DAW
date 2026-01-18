import Lista from '@/components/estudiantes/lista'
import { obtenerEstudiantes } from '@/lib/data'
import { Suspense } from 'react'

async function PaginaEstudiantes() {

    const promesaEstudiantes = obtenerEstudiantes()

    return (
        <div>
            <h1 className='text-4xl'>Estudiantes</h1>

            <Suspense fallback={<p className='text-2xl text-blue-300'>Cargando...</p>}>
                <Lista promesaEstudiantes={promesaEstudiantes} />
            </Suspense>
        </div>
    )
}

export default PaginaEstudiantes
