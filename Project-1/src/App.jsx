import { useState, useEffect } from 'react';
import './App.css'
import { CreadorDeTareas } from './components/CreadorDeTareas';
import { ListarTareas } from './components/ListarTareas'
import { ShowTarea } from './components/ShowTarea'

function App() {  

  const [listaItems, setListaItems] = useState([]); // Arreglo de tareas
  const [showCompleted, setShowCompleted] = useState(false); // Uso este usestate para poder ocultar las tareas realizadas o no realizadas

  function CrearTarea (tareaNombre) {
   if (!listaItems.find((tarea) => tarea.name === tareaNombre)) { // Uso esta validacion para poder evitar que se repitan las key y salte un error en la consola
     setListaItems([...listaItems, { name: tareaNombre, done: false}]); // Uso esta funcion para no reemplazar un array si no crear otro ya que se manda un string pero la idea seria que se vuelva un objeto
    }
  }

  const actualizarTarea = (tarea) => {
    setListaItems(
      listaItems.map((t) => (t.name  === tarea.name ? {...t, done: !t.done}: t)) // con esto hago que la funcion cambien de true a false 
    );
  };


  useEffect(()=>{
    let data = localStorage.getItem('tarea')
    if (data) {
      setListaItems(JSON.parse(data))
    }
  }, [])
  

  const borrarTarea = () => {
    setListaItems(
      listaItems.filter(tarea => !tarea.done)
    )
    setShowCompleted(false)
  }

  useEffect(() => {
    localStorage.setItem('tarea', JSON.stringify(listaItems)); // Uso useEffect y JSON.stringify para poder guardar dentro del localstore el array de objetos y que me lo muestre en la consola del navegador
  }, [listaItems]) 

  return(

    <div className='App'>
     <div className="container col-md-9">

     <CreadorDeTareas CrearTarea={CrearTarea} />
      <ListarTareas tarea={listaItems} actualizarTarea = {actualizarTarea} />
      <ShowTarea isChecked={showCompleted} setShowCompleted={(checked) => setShowCompleted(checked)} borrarTarea={borrarTarea} />
      {
        showCompleted && (
          <ListarTareas tarea={listaItems} actualizarTarea = {actualizarTarea} showCompleted={showCompleted} />
        )
      }
      

     </div>
    </div>
  )

}

export default App
