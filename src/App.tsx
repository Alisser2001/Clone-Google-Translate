import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from './hooks/useStore';

function App() {
  const {fromLanguage, setFromLanguage} = useState();
  return (
    <div className="App">
      <h1>Google Translate</h1>
      <button onClick={()=>setFromLanguage("es")}>Set Language</button>
      <p>{fromLanguage}</p>
    </div>
  )
}

export default App
