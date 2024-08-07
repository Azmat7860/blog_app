import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import ArticleDetailPage from './pages/articleDetail/ArticleDetailPage';
import RegisterPage from './pages/register/RegisterPage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/blog/:id' element={<ArticleDetailPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
      </Routes>
      <Toaster/>
      
    </div>
  );
}

export default App;
