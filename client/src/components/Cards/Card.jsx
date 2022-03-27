import React,{useContext} from 'react';
import "../Cards/Card.css";
import demoCards from '../../utils/demoCards';
import { RentingContext } from '../../context/RentingContext';

 const Card = ({imgSrc,title,description,price}) => {
   const {connectedAccount} = useContext(RentingContextting);
  //  const [connectWallet,connectedAccount,cardData,setCardData,handleChange]=useContext(RentingContext);
  return (
    <div className="card" onClick={}>
        {/* <h1>card</h1> */}
        <img src={imgSrc} />
            <div className="card-info">
                <h2>{title}</h2>
                    <h4>{description}</h4>
                    <h5>{price}</h5>
            </div>
        
        
    </div>
  );
}
export default Card;