import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import ArticleDetailPage from './pages/articleDetail/ArticleDetailPage';

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/blog/:id' element={<ArticleDetailPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
