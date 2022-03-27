import React,{useContext} from 'react';
import '../Navbar/Navbar.css';
import Logo from '../../images/ethereum-logo.png';
import { RentingContext } from "../../context/RentingContext";


const Navbar = () =>{
    const {connectWallet,connectedAccount} = useContext(RentingContext);
    return (
        <div>
            <nav>
                <img  src={Logo} alt="Logo" className="logo"/>
                <label className="label">ETH-BNB</label>
                <div className="links">
                    <ul>
                        <li><a href="#about">Abuot</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                       {!connectedAccount && (<button type="button" name="login" onClick={connectWallet}>Login</button>)}   
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;