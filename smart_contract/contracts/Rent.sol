// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Rent{
    uint256 contractCount=0;

    event Renting(address from,address to,uint amount,string assetName,string assetAddress,uint256 timestamp,string startDate,string endDate,bool rentee);

    struct RentStruct{
        address from;
        address to;
        uint amount;
        string assetName;
        string assetAddress;
        uint256 timestamp;
        string startDate;
        string endDate;
        bool rentee;
    }
    RentStruct[] rentingTransactions;
    function addToBlockchain(address payable to, uint amount, string memory assetName, string memory assetAddress, string memory startDate, string memory endDate, bool rentee) public{
        contractCount++;
        rentingTransactions.push(RentStruct(msg.sender,to,amount,assetName,assetAddress,block.timestamp,startDate,endDate,rentee));
        emit Renting(msg.sender,to,amount,assetName,assetAddress,block.timestamp,startDate,endDate,rentee);
    }
    function getAllRentTransactions() public view returns(RentStruct[] memory) {

        return rentingTransactions;
    }
    function getContractCount() public view 
    returns (uint256){
        return contractCount;
    }

} 