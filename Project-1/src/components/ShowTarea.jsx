export const ShowTarea = ({isChecked, setShowCompleted, borrarTarea}) => {

    const DeleteTarea = () => {
        if (window.confirm('Seguro que quieres eliminar las tareas realizadas?')) {
            borrarTarea();
        }
    
    }
                                                                // e.target.cheked viene de la linea 45 de app.jsx para poder guardar el valor de true o false
    return (
        <div className="row">
            
            <div className="col-9">
                <label className="my-4"> Tareas Realizadas </label>
                <input type="checkbox" checked={isChecked} onChange={e=> setShowCompleted(e.target.checked)}/> 
            </div>


            <div className="col-3">
                <button onClick={borrarTarea} className="btn-sm">
                    Borrar
                </button>
            </div>

        </div>
        
    )
}