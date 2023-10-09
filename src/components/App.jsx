import {BrowserRouter, Routes, Route} from 'react-router-dom';
import '../styles/App.css'; //pour relier les styles css
import Layout from '../components/Layout'; //pour relier le Layout
import Home from '../pages/Home'; //pour relier le pages Home
import Game from '../pages/Game'; //pour relier le pages Game
import Eshop from '../pages/Eshop/Eshop'; //pour relier le pages Eshop
import MonCompte from '../pages/MonCompte'; //pour relier le pages MonCompte

function App() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='Game' element={<Game/>} />
                    <Route path='Eshop' element={<Eshop/>} />
                    <Route path='MonCompte' element={<MonCompte/>} />
                </Route>                             
            </Routes>
        </BrowserRouter>         
        </>
    )
}

export default App