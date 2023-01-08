import "./themes/uikit-axtechweb.less";
import '../node_modules/uikit/dist/js/uikit.min.js'
import '../node_modules/uikit/dist/js/uikit-icons.min.js'
import { BrowserRouter, Routes, Route} from "react-router-dom";

import AdminPanel from './components/auth/admin/AdminPanel';
import Configuration from './pages/configuration/configuration';
import Dashboard from './pages/dashboard/dashboard';
import Header from './views/header/header'
import Home from './pages/home/home';
import Login from './components/auth/login/Login'
import Register from './components/auth/register/Register';

import './i18n'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/config' element={ <Configuration /> } />
        <Route path='/dashboard' element={ <Dashboard /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/admin/panel' element={ <AdminPanel /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
