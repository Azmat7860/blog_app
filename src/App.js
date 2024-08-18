import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import ArticleDetailPage from './pages/articleDetail/ArticleDetailPage';
import RegisterPage from './pages/register/RegisterPage';
import { Toaster } from 'react-hot-toast';
import LoginPage from './pages/login/loginPage';
import ProfilePage from './pages/profile/profilePage';

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/blog/:id' element={<ArticleDetailPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
      </Routes>
      <Toaster/>
      
    </div>
  );
}

export default App;
