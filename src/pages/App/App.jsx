import { useState } from "react";

import './App.css';
// import NewOrderPage from "../NewOrderPage/NewOrderPage";
import AuthPage from "../AuthPage/AuthPage";
// import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NotesPage from '../../pages//NotesPage/NotesPage'
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from '../../utilities/users-service';


export default function App() {
  const [user, setUser] = useState(getUser()) // setUser is transferable data

  return (
<main className='App'>
  {
    user ?
    <>
    <NavBar user={user} setUser={setUser} />
    <NotesPage user={user} />
    </>
    :
    <AuthPage setUser={setUser}/>
  }
</main>
  );
}

//elements accepts jsx components
// you wrap in react fragments because it can not render 2 child back to back. eg navbar and routes