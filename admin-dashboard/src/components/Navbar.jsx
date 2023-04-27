import React, {useState} from "react";
import { Link, Route, Routes } from 'react-router-dom';
import Cuentas from './Cuentas';
import Pedidos from './Pedidos';
import Productos from './Productos';
import Promociones from './Promociones';
import '../styles/navbar.css'


const Navbar = () => {

    
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)


    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div className="content">
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    
                </div>
                <div className="text-title">Admin Dashboard</div>
            </nav>
            <div className="center">
                <div className={menu_class}>
                    <Link className="boton-menu"
                    to='./Cuentas'>Cuentas</Link>

                    <Link className="boton-menu"
                    to='./Productos'>Productos</Link>

                    <Link className="boton-menu"
                    to='./Pedidos'>Pedidos</Link>

                    <Link className="boton-menu"
                    to='./Promociones'>Promociones</Link>

                </div >
                        <div>
                            <Routes>
                                <Route path="/Cuentas" element={<Cuentas />} />
                                <Route path="/Pedidos" element={<Pedidos />} />
                                <Route path="/Productos" element={<Productos />} />
                                <Route path="/Promociones" element={<Promociones />} />
                                <Route path="*" element={<h1>Not Found</h1>} />
                            </Routes>
                        </div>
            </div>
            
        </div>
    )
}

export default Navbar