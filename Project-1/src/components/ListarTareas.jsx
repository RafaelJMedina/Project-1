import {BoxTarea} from './BoxTarea'

export const ListarTareas = ( {tarea, actualizarTarea, showCompleted = false } ) => {

    const filaTareas = (doneValue) => {
        return (
            
            tarea
            .filter(tarea => tarea.done === doneValue) // se pueden encadenar los metodos .filter .map 
            .map(tarea => (          // Con key evito el error de que cada fila pueda tener un elemento unico 
                <BoxTarea tarea = {tarea} key={tarea.name} actualizarTarea={actualizarTarea} />  //con esto paso la propiedad tarea con el valor de cada una de las tarea 
            ))
            
        )
    }
    

    return (

        <table className='table table-dark table-bordered'>
            <thead>
                <tr>
                    <th>Tareas</th>
                </tr>
            </thead>
            <tbody> 
                {
                    filaTareas(showCompleted)
                }
            </tbody>
      </table>
        
       
    )
}
