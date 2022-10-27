import NavbarComponent from './components/navbar'
import Students from './pages/students'
import Streams from './pages/streams'
import AddStudent from './pages/create-student'
import AddStream from './pages/create-stream'
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarComponent />   
      </header>
      <Routes>
        <Route exact path="/" element={<Students />} />
        <Route exact path="/streams" element={<Streams />} />
        <Route exact path="/add-student" element={<AddStudent />} />
        <Route exact path="/add-stream" element={<AddStream />} />
      </Routes>
    </div>
  );
}

export default App;
