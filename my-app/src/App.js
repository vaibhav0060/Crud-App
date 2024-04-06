import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes , Route } from "react-router-dom";
import Users from './Components/users';
import CreateUser from './Components/CreateUser';
import UpdateUser from './Components/UpdateUser';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
<Route  path='/' element ={<Users/>}></Route>
<Route  path='/create' element ={<CreateUser/>}></Route>
<Route  path='/update/:id' element ={<UpdateUser/>}></Route>


    </Routes>

    </BrowserRouter>


    </div>
  );
}

export default App;
