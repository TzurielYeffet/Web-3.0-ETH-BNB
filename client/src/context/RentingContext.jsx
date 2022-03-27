import React, {useEffect,useState} from 'react';
import {ethers} from 'ethers';
import {contractAddress,contractABI} from '../utils/constants';

export const RentingContext=React.createContext();


const {ethereum}=window;

const getEthereumContract = () =>{
    const provider = new ethers.providers.Web3Provider(ethereum);   
    const signer = provider.getSigner();
    const rentingContract = new ethers.Contract(contractAddress,contractABI,signer); 

    console.log(rentingContract);
    return rentingContract;
}

export const RentingProvider = ({children}) =>{
    const [isLoading,setIsLoading] = useState(false);
    const [connectedAccount,setConnectedAccount]= useState('');
    const [cardData,setCardData]=useState({
        title:'',
        assetAddress:'',
        description:'',
        image:``,
        price:'',
        rentee: false
    });
    const handleChange=(event) =>{
        console.log("inside handleChange");
        setCardData((prevState)=>({
            ...prevState,[event.target.name]:event.target.value
        }));
        }    
    const checkIfWalletConnected = async () =>{
        try{
        if(!ethereum) return alert("Please install Metamask");
            
            const accounts = await ethereum.request({method:'eth_accounts'});
            console.log(accounts);

            if(accounts.length){
                setConnectedAccount(accounts[0]);
            }
            else{
                console.log('No acconts found');
            }
        }catch(e){
            console.log(e);
            throw new Error("No ethereum object found");
        }             


    }
    
    const connectWallet= async ()=>{
        try{
            if(!ethereum) return alert("Please install Metamask");
            const accounts = await ethereum.request({method:'eth_requestAccounts'});
            
            setConnectedAccount(accounts[0]);
            
        }catch(error){
            console.log(error);
            
            throw new Error("No ethereum object found");
        }
    } 

    const addCard= async ()=>{
        try {
            if(!ethereum) return alert("Please install Metamask");
            //get data from the form
            const {price,image,title,description,assetAddress} = cardData;
            console.log("inside addCard");
            const rentingContract = getEthereumContract();
            console.log(connectedAccount);
            await ethereum.request({
                method:'eth_sendTransaction',
                params:[{
                    from:connectedAccount,
                    to:connectedAccount,
                    gas:'0x5208',// 21000 GWEI
                    value:''
                }]
            });
            
            const transactionHash = await rentingContract.addToBlockchain(connectedAccount,price,title,assetAddress,'','',false);
            setIsLoading(true);
            console.log(`Loading -> ${transactionHash.hash}`);
            await transactionHash.wait();
            setIsLoading(false);
            console.log(`Success -> ${transactionHash.hash}`);

            const contractCount = await rentingContract.getContractCount();
    

        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object found");

        }

    }


    const rent = async ()=>{
        try {
            const {price,image,title,description,assetAddress} = cardData;
            const parsePrice = ethereum.utils.parseEther(price); //in the transaction add ._hex

            if(!ethereum) return alert("Please install Metamask");
            //get data from cards
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object found");

        }
    }

    





    useEffect(()=>{
        checkIfWalletConnected();
    },[]);
    return(
        <RentingContext.Provider value={{connectWallet,connectedAccount,cardData,setCardData,handleChange,addCard}}>
         {children}
        
        </RentingContext.Provider>
    );
}