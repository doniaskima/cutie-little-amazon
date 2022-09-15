import './App.css';
import React , {useEffect} from "react";
import {selectUser , login , logout} from "./features/userSlice";
import {useDispatch , useSelector} from "react-redux";
import {auth} from "./firebase";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        // user is logged in 
        login({
          uid: authUser.uid,
          photo:authUser.photo,
          email:authUser.email,
          displayName:authUser.displayName,
        })
      } else{
        // user is logged out 
        dispatch(logout());
      }
    })
  })

  return (
    <div className="app">
     {user ? <Home/> : <Login/>}
    </div>
  );
}

export default App;
