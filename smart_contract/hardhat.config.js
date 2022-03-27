//https://eth-ropsten.alchemyapi.io/v2/ps51v-gcCYyLBdKOS6go2yNxUo7g90Bb

require("@nomiclabs/hardhat-waffle");

module.exports ={
  solidity:'0.8.0',
  networks:{
    ropsten:{
      url:'https://eth-ropsten.alchemyapi.io/v2/ps51v-gcCYyLBdKOS6go2yNxUo7g90Bb',
      accounts:['a11d1eb3735ff3cde266f55041c574a11aa94c8a1f7c6029b876fc29802f24c9']
    }   
  }
}