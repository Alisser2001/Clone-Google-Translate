import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './sections/navBar';
import Translate from './sections/translate';
import Options from './sections/options';
import SideComponent from './components/menu/SideComponent';
import { useState } from './hooks/useStore';
import LinksComponent from './components/menu/LinksComponent';
import ProfileComponent from './components/menu/ProfileComponent';
import { useEffect } from "react";

function App() {
  const { viewSide, viewLinks, viewProfile } = useState();
  useEffect(() => {
  }, [viewSide, viewLinks, viewProfile]);
  return (
    <div id='app'>
      <NavBar />
      <Options />
      <Translate />
      {viewSide && <SideComponent />}
      {viewLinks && <LinksComponent />}
      {viewProfile && <ProfileComponent />}
    </div>
  )
}

export default App
