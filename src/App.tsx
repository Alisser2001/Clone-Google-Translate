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
  const { viewSide, viewLinks, viewProfile, setViewSide, setViewLinks, setViewProfile, setViewAllLangsFrom, setViewAllLangsTo } = useState();
  useEffect(() => {
  }, [viewSide, viewLinks, viewProfile]);
  const handleViewAll = () => {
    setViewSide(false);
    setViewLinks(false);
    setViewProfile(false);
    setViewAllLangsFrom(false);
    setViewAllLangsTo(false);
}
  return (
    <div id='app' onClick={handleViewAll}>
      <NavBar handleViewAll={handleViewAll}/>
      <Options handleViewAll={handleViewAll}/>
      <Translate handleViewAll={handleViewAll}/>
      {viewSide && <SideComponent />}
      {viewLinks && <LinksComponent />}
      {viewProfile && <ProfileComponent />}
    </div>
  )
}

export default App
