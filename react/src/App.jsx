import { Link, Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Gallery from './pages/Gallery';
import Pegawai from './pages/Pegawai';
import './App.css';

function App(){
  return (
    <div className ="flex justify-center p-6 w-wscreen h-screen bg-gray-200 overflow-auto">
    <div className="max-w-md">
      <div className="flex items-center justify-center mb-4 text-xstext-gray-600 font-semibold uppercase tracking-wide">
        <Link 
          className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out" to="/">Home</Link>
        <Link 
          className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out"to="/about">About</Link>
        <Link 
          className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out" to="/Gallery">Gallery</Link>
        <Link 
          className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out" to="/pegawai">Pegawai</Link>
      </div>
            
      <div className="p-6 w-full bg-white rounded-x1 shadow-lg">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
          <Route path="/pegawai" element={<Pegawai />}></Route>
        </Routes>
      </div>
    </div>
    </div>
  )
}

export default App;