import Home from './pages/Home';
import Survey from './pages/Survey';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Error from './components/Error';
import Results from './components/Results';
import Freelances from './pages/Freelances';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/survey/' element={<Survey />} />
        <Route path='/survey/:questionNumber' element={<Survey />} />
        <Route path='/freelances' element={<Freelances />} />
        <Route path='/results' element={<Results />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
