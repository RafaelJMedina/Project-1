export const BoxTarea = ({tarea, actualizarTarea}) => {
    return (
        <tr> 
            <td>
                {tarea.name}  
                <input type="checkbox" 
                    checked={tarea.done}  // .done sirve para recibir el valor de false o true dentro del checked 
                    onChange={()=> actualizarTarea(tarea)} // con onchage puedo realizar el cambio del checked de una tarea o podes cambiarla
                />  
             </td>
         </tr>
    )
}