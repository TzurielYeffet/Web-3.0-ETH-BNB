import React,{useContext} from 'react';
import '../AssetsComponent/Assets.css';
import  '../Cards/Card.css';
import CreateCard from '../CreateCard/CreateCard';
import { RentingContext } from '../../context/RentingContext';
import demoCards from '../../utils/demoCards';
const Assets = () =>{
    const {connectedAccount}=useContext(RentingContext);
    const Card = ({imgSrc,title,description,price}) => {
        const {connectedAccount} = useContext(RentingContext);
       //  const [connectWallet,connectedAccount,cardData,setCardData,handleChange]=useContext(RentingContext);
       return (
         <div className="card">
            <img src={imgSrc} />
                 <div className="card-info">
                     <h2>{title}</h2>
                         <h4>{description}</h4>
                         <h5>{price}</h5>
                         <div>
                             
                         </div>
                 </div>
             
             
         </div>
       );
     }
         
         


    return (
        <div className="assets" >
        <CreateCard />;
            <div className="assetH1">
                <h1>Take a break</h1>
            </div>
            <div >
                {/* <button onClick={createCard} type="button" visibility="hidden"> Add Asset</button> */}
                <div className="asset-grid">
                    {demoCards.reverse().map((card,i)=>(
                        <Card key={i} {...card} />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Assets;