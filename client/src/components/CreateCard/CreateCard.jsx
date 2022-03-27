import React,{useContext,useState} from 'react';
import './CreateCard.css';
import { RentingContext } from '../../context/RentingContext';

const CreateCard = () =>{
    const {cardData,addCard,handleChange}=useContext(RentingContext);

    
    
    const handleSubmit= (e) =>{
        console.log("inside hndkls submit");
        const {price,image,title,description,assetAddress} = cardData;
        e.preventDefault();
        
        console.log(cardData);
        if(!price||!image||!title||!description||!assetAddress) return;

        addCard();
    }
    return( 
        <div>
            {/* <form> */}
                <div className="form-class">
                    <label  id="name-label">Title</label>
                    <input
                        className="form-control"  
                        type="text"
                        name="title"
                        placeholder="Please enter a title"
                        onChange={handleChange}
                        required>
                    </input>
                 </div>
                 <div className="form-class">
                    <label  id="name-label">Address</label>
                    <input
                        className="form-control"  
                        type="text"
                        name="assetAddress"
                        placeholder="Please enter an address."
                        onChange={handleChange}
                        required>
                    </input>
                 </div>
                 <div className="form-class">
                    <label  id="name-label">Description</label>
                    <input
                        className="form-control"  
                        type="text"
                        name="description"
                        placeholder="Please enter a description"
                        onChange={handleChange}
                        required>
                    </input>
                 </div>
                 <div className="form-class">
                    <label  id="name-label">Photo</label>
                    <input
                        className="form-control"  
                        // type="file"
                        type="text"
                        name="image"
                        placeholder="Add photo Url."
                        // accept="image/png, image/jpeg"
                        onChange={handleChange}
                        required>
                    </input>
                 </div>
                 <div className="form-class">
                    <label  id="name-label">Price</label>
                    <input
                        className="form-control"  
                        type="text"
                        name="price"
                        placeholder="Please enter your price"
                        onChange={handleChange}
                        required>
                    </input>
                 </div>
                 <button className="addCardButton" onClick={handleSubmit} type="button">Send</button>
            {/* </form>      */}
        </div>
    )
}
export default CreateCard;