import React from 'react';
import './App.css';
import { ToDoCounter } from '../ToDoCounter';
import { ToDoList } from '../ToDoList';
import { ToDo } from '../ToDo';
import ToDoSearch from '../ToDoSearch';
import CreateToDo from '../CreateToDo';
import useLocalStorage from './useLocalStorage';
import AgregarTareaModal from '../CreateToDo';
import { UserProfile } from '../UseContext/UseContext';
import { UserDashboard } from '../UseContext/UseContext';
import { UserProvider } from '../UseContext/UseContext';

function App() {
  const [searchValue,setSearchValue]= React.useState('');
  const [searchPartidos, saveTareas]=useLocalStorage('Tareas_V1',[])
  const partidosGanados=searchPartidos.filter(ToDo=>ToDo.completed).length;
  const totalDePartidos=searchPartidos.length

  const [modalAbierto, setModalAbierto] = React.useState(false);
  const abrirModal = () => {
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  const agregarPartido = (nuevoPartido) => {
    if (nuevoPartido.trim() !== '') {
      const nuevosItems = [...searchPartidos, { text: nuevoPartido, completed: false }];
      saveTareas(nuevosItems);
      cerrarModal();
    }
  };

  const partidosEncontrados= searchPartidos.filter(
    (ToDo)=>{
      return ToDo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
    });

  const partidoGanado= (text)=>{
    const nuevosItems=[...searchPartidos]
    const i=nuevosItems.findIndex(
      (partido)=>partido.text==text
    )
    nuevosItems[i].completed= !nuevosItems[i].completed
    saveTareas(nuevosItems)
  }

  const partidoEliminado= (text)=>{
    const nuevosItems=[...searchPartidos]
    const i=nuevosItems.findIndex(
      (partido)=>partido.text==text
    )
    nuevosItems.splice(i,1)
    saveTareas(nuevosItems)
  }
  

  return (
    <div className="App">
      <ToDoCounter completed={partidosGanados} total={totalDePartidos}/>
      <ToDoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ToDoList>
        {partidosEncontrados.map(partido=>
          <ToDo key={partido.text} 
          text={partido.text}
          completed={partido.completed}
          onComplete={()=>partidoGanado(partido.text)}
          onDelete={()=>partidoEliminado(partido.text)}
          />
        )}
      </ToDoList>      
      <CreateToDo/>
      <button className='CrearPartido' onClick={abrirModal}>+</button>
      <AgregarTareaModal isOpen={modalAbierto} onClose={cerrarModal} onAgregarTarea={agregarPartido} />
      <UserProvider>
      <UserProfile />
      <UserDashboard />
    </UserProvider>  
          </div>
  );
}

export default App;
