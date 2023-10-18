import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage';
import WatchHistory from './Pages/WatchHistory';
import Header from './Component/Header';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/watch-history' element={ <WatchHistory/>} />  
     </Routes>   
     <hr/>
     <Footer/> 
    </div>
  );
}

export default App;
