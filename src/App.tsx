import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Background from './components/Background';
import Translate from './components/Translate';
import Options from './components/Options';

function App() {
  return (
    <div id='app'>
      <NavBar />
      <Background/>
      <Options/>
      <Translate/>
    </div>
  )
}

export default App
