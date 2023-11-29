import { useState } from 'react';
import './App.css'
import { CreadorDeTareas } from './components/CreadorDeTareas';

function App() {  

  const [listaItems, setListaItems] = useState([
    {name: 'Terminar el tp Integrador', done: false},
    {name: 'Arreglar el css', done: false},
    {name: 'Ultimo dia de entrega el 27', done: false},
  ])

  function CrearTarea (TareaNombre) {
   if (!listaItems.find(tarea => tarea.name === TareaNombre)) { // Uso esta validacion para poder evitar que se repitan las key y salte un error en la consola
     setListaItems([...listaItems, {name: TareaNombre}]) // Uso esta funcion para no reemplazar un array si no crear otro ya que se manda un string pero la idea seria que se vuelva un objeto
    }
  }
  
  return(

    <div className='App'>
      <CreadorDeTareas CrearTarea={CrearTarea} />


      <table>
        <thead>
          <tr>
           <th>Tareas</th>
          </tr>
        </thead>
        <tbody> 
          {
            listaItems.map(Tarea => (
              <tr key={Tarea.name}> 
                <td>
                  {Tarea.name} 
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>


      
    </div>
  )

}

export default App
