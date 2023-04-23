import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Background from './components/Background';
import Translate from './components/Translate';
import Options from './components/Options';
import SideComponent from './components/SideComponent';
import { useState } from './hooks/useStore';
import LinksComponent from './components/LinksComponent';
import ProfileComponent from './components/ProfileComponent';

function App() {
  const { setViewSide, setViewLinks, setViewProfile, setViewAllLangsFrom, setViewAllLangsTo, viewSide, viewLinks, viewProfile } = useState();
  const handleView = (type: string, view: boolean) => {
    switch (type) {
      case "side":
        setViewLinks(false);
        setViewProfile(false);
        setViewAllLangsTo(false);
        setViewAllLangsFrom(false);
        setViewSide(view);
        break;
      case "links":
        setViewSide(false);
        setViewProfile(false);
        setViewAllLangsTo(false);
        setViewAllLangsFrom(false);
        setViewLinks(view);
        break;
      case "profile":
        setViewSide(false);
        setViewLinks(false);
        setViewAllLangsTo(false);
        setViewAllLangsFrom(false);
        setViewProfile(view);
        break;
      case "all":
        setViewAllLangsTo(false);
        setViewAllLangsFrom(false);
        setViewSide(view);
        setViewLinks(view);
        setViewProfile(view);
    }
  }
  return (
    <div id='app'>
      <NavBar onClick={handleView} viewSide={viewSide} viewLinks={viewLinks} viewProfile={viewProfile} />
      {viewSide && <SideComponent />}
      {viewLinks && <LinksComponent />}
      {viewProfile && <ProfileComponent />}
      <Background onClick={handleView} />
      <Options />
      <Translate onClick={handleView} />
    </div>
  )
}

export default App
