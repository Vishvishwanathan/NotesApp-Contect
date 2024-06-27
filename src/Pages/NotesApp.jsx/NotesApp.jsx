import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import NoteLayout from './Pages/Notes/NoteLayout';
import TaskLayout from './Pages/Tasks/TaskLayout';
import Trash from './Pages/Trash/Trash';



function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <Sidebar/>
        </div>
        <div className="col-9">
          <div className="row">
            <Routes>
              <Route path='/' Component={Home}/>
              <Route path='/noteslayout' Component={NoteLayout}/>
              <Route path='/tasklayout' Component={TaskLayout}/>
              <Route path='/trash' Component={Trash}/>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
