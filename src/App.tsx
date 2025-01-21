import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './sections/navBar';
import Translate from './sections/translate';
import Options from './sections/options';
import SideMenu from './components/menu/sideMenu';
import { useState } from './hooks/useStore';
import ToolsMenu from './components/menu/toolsMenu';
import ProfileMenu from './components/menu/profileMenu';
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
      {viewSide && <SideMenu />}
      {viewLinks && <ToolsMenu />}
      {viewProfile && <ProfileMenu />}
    </div>
  )
}

export default App
