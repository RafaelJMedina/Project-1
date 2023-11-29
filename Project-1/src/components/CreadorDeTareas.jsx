import { useState } from "react"

export const CreadorDeTareas = ({CrearTarea}) => {  // cuando uso props puedo desestructurar sin usar props.CrearTarea y solo uso CrearTarea

    const nombre = 'Rafael'

    const [ newTarea, setNewTarea ] = useState('') // Variable y funcion que permite actualizar
     
    const DatosSubmit = (e) => {
        e.preventDefault(); // Preventdefault evitará que se active el comportamiento predeterminado de un elemento
        CrearTarea(newTarea);
        localStorage.setItem('Tareas', newTarea);
        setNewTarea('');
    }

    return (
        <div className='Inicio'>
    
          <h1> Hola { nombre } tus tareas pendientes! </h1>
            
          <form onSubmit={DatosSubmit}> 
              <input 
                type="text" 
                placeholder="Escribe la Tarea"
                value={newTarea} // reflejando el estado puedo hacer que el input se vacie 
                onChange={(e) => setNewTarea(e.target.value)} // Guarda el valor de la tarea en newTarea dentro del setNewTarea
              />
              <button>
                Guardar
              </button>
          </form>
          
          
        </div>
    )
}
