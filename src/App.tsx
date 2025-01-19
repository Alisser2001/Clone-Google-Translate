import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './sections/NavBar';
import Background from './components/Background';
import Translate from './components/Translate';
import Options from './components/Options';
import SideComponent from './components/SideComponent';
import { useState } from './hooks/useStore';
import LinksComponent from './components/LinksComponent';
import ProfileComponent from './components/ProfileComponent';
import { useEffect } from "react";

function App() {
  const { viewSide, viewLinks, viewProfile } = useState();
  useEffect(() => {
    console.log("Estado viewSide:", viewSide);
    console.log("Estado viewLinks:", viewLinks);
    console.log("Estado viewProfile:", viewProfile);
  }, [viewSide, viewLinks, viewProfile]);
  return (
    <div id='app'>
      <NavBar />
      <Background />
      <Options />
      <Translate />
      {viewSide && <SideComponent />}
      {viewLinks && <LinksComponent />}
      {viewProfile && <ProfileComponent />}
    </div>
  )
}

export default App
