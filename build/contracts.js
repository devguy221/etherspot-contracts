/* eslint-disable */

module.exports = {
  "AccountRegistry": {
    "abi": [
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "refundAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "refundToken",
            "type": "address"
          }
        ],
        "name": "AccountCallRefunded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "AccountDeployed",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "AccountOwnerAdded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "AccountOwnerRemoved",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "AccountTransactionExecuted",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [],
        "name": "Initialized",
        "type": "event"
      },
      {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "isInitialized",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "metaTxRelay",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_metaTxRelay",
            "type": "address"
          }
        ],
        "name": "initialize",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "_saltOwner",
            "type": "address"
          }
        ],
        "name": "computeAccountAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "_account",
            "type": "address"
          }
        ],
        "name": "isAccountDeployed",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "_account",
            "type": "address"
          }
        ],
        "name": "getAccountNonce",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "_account",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "isAccountOwner",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "_account",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "hasEverBeenAccountOwner",
        "outputs": [
          {
            "internalType": "bool",
            "name": "_result",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_account",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_nonce",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "addAccountOwner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_account",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_nonce",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "removeAccountOwner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_account",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_nonce",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
          }
        ],
        "name": "executeAccountTransaction",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_account",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_nonce",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "_refundToken",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_refundAmount",
            "type": "uint256"
          }
        ],
        "name": "refundAccountCall",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "byteCodeHash": "0x677c07f0f98cadb83315e02631f0ccea7486c84fcc4085dab892aad0e8063843",
    "addresses": {
      "9999": "0xE859C7e29837FA19248bffeADe14F9fE76dDBeC6"
    }
  },
  "Chained": {
    "abi": [
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "chainId",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "byteCodeHash": null,
    "addresses": {}
  },
  "ControlledAccount": {
    "abi": [
      {
        "inputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "constructor"
      },
      {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "controller",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address payable",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
          }
        ],
        "name": "executeTransaction",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "byteCodeHash": "0xad0eb4ac955d9e9483ee98f56248156d875d3a1d724469d63e93df97c67042f5",
    "addresses": {}
  },
  "ControlledAccountFactory": {
    "abi": [
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      }
    ],
    "byteCodeHash": null,
    "addresses": {}
  },
  "ERC20DetailedToken": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_symbol",
            "type": "string"
          },
          {
            "internalType": "uint8",
            "name": "_decimals",
            "type": "uint8"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "byteCodeHash": null,
    "addresses": {}
  },
  "ERC20Token": {
    "abi": [
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "byteCodeHash": null,
    "addresses": {}
  },
  "Guarded": {
    "abi": [
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "guardian",
            "type": "address"
          }
        ],
        "name": "GuardianAdded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "guardian",
            "type": "address"
          }
        ],
        "name": "GuardianRemoved",
        "type": "event"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "_guardian",
            "type": "address"
          }
        ],
        "name": "isGuardian",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_messageHash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "_signature",
            "type": "bytes"
          }
        ],
        "name": "verifyGuardianSignature",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_guardian",
            "type": "address"
          }
        ],
        "name": "addGuardian",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_guardian",
            "type": "address"
          }
        ],
        "name": "removeGuardian",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "byteCodeHash": null,
    "addresses": {}
  },
  "IAccountRegistry": {
    "abi": [
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "_saltOwner",
            "type": "address"
          }
        ],
        "name": "computeAccountAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "_account",
            "type": "address"
          }
        ],
        "name": "isAccountDeployed",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "_account",
            "type": "address"
          }
        ],
        "name": "getAccountNonce",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "_account",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "isAccountOwner",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "_account",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "hasEverBeenAccountOwner",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_account",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_nonce",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "addAccountOwner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_account",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_nonce",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "removeAccountOwner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_account",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_nonce",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
          }
        ],
        "name": "executeAccountTransaction",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_account",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_nonce",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "_refundToken",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_refundAmount",
            "type": "uint256"
          }
        ],
        "name": "refundAccountCall",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "byteCodeHash": null,
    "addresses": {}
  },
  "IControlledAccount": {
    "abi": [
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address payable",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
          }
        ],
        "name": "executeTransaction",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "byteCodeHash": null,
    "addresses": {}
  },
  "IERC20Token": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "byteCodeHash": null,
    "addresses": {}
  },
  "ISignatureValidator": {
    "abi": [
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_messageHash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "_signature",
            "type": "bytes"
          },
          {
            "internalType": "address",
            "name": "_signer",
            "type": "address"
          }
        ],
        "name": "verifySignature",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "byteCodeHash": null,
    "addresses": {}
  },
  "ISignedMessageRegistry": {
    "abi": [
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_signedMessageHash",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "_signer",
            "type": "address"
          }
        ],
        "name": "verifySignedMessageHash",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "bytes",
            "name": "_message",
            "type": "bytes"
          }
        ],
        "name": "setMessage",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_messageHash",
            "type": "bytes32"
          }
        ],
        "name": "setMessageHash",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "byteCodeHash": null,
    "addresses": {}
  },
  "Initializable": {
    "abi": [
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [],
        "name": "Initialized",
        "type": "event"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "isInitialized",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "byteCodeHash": null,
    "addresses": {}
  },
  "MetaTxRelay": {
    "abi": [
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "chainId",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "bytes[]",
            "name": "_calls",
            "type": "bytes[]"
          },
          {
            "internalType": "bytes",
            "name": "_senderSignature",
            "type": "bytes"
          }
        ],
        "name": "relayCalls",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "byteCodeHash": "0x49c4a9ad3b5a934a08c3caf4e65c3f350254fbd24278710aa4669d415709de3c",
    "addresses": {
      "9999": "0x51AA6Dbede0DFbec34Ae2084A3A9AA14535f5b46"
    }
  },
  "MetaTxRelayed": {
    "abi": [
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "metaTxRelay",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "byteCodeHash": null,
    "addresses": {}
  },
  "NoFallback": {
    "abi": [
      {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
      }
    ],
    "byteCodeHash": "0xd0328fbb0d73b494bf2f2494101054f130e10e6de93ef956976b0959e9c14bbc",
    "addresses": {}
  },
  "PaymentRegistry": {
    "abi": [
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "DepositAccountDeployed",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "lockedUntil",
            "type": "uint256"
          }
        ],
        "name": "DepositWithdrawalRequested",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "DepositWithdrawn",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "guardian",
            "type": "address"
          }
        ],
        "name": "GuardianAdded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "guardian",
            "type": "address"
          }
        ],
        "name": "GuardianRemoved",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [],
        "name": "Initialized",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "hash",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "uid",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "PaymentChannelCommitted",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "channelHash",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "PaymentDeposited",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "channelHash",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "PaymentWithdrawn",
        "type": "event"
      },
      {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_guardian",
            "type": "address"
          }
        ],
        "name": "addGuardian",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "chainId",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "depositWithdrawalLockPeriod",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "_guardian",
            "type": "address"
          }
        ],
        "name": "isGuardian",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "isInitialized",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_guardian",
            "type": "address"
          }
        ],
        "name": "removeGuardian",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_messageHash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "_signature",
            "type": "bytes"
          }
        ],
        "name": "verifyGuardianSignature",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_depositWithdrawalLockPeriod",
            "type": "uint256"
          },
          {
            "internalType": "contract ISignatureValidator",
            "name": "_signatureValidator",
            "type": "address"
          }
        ],
        "name": "initialize",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "computeDepositAccountAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "_sender",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_recipient",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_token",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "_uid",
            "type": "bytes32"
          }
        ],
        "name": "computePaymentChannelHash",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "isDepositAccountDeployed",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_token",
            "type": "address"
          }
        ],
        "name": "getDepositWithdrawalLockedUntil",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_hash",
            "type": "bytes32"
          }
        ],
        "name": "getPaymentChannelCommittedAmount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "deployDepositAccount",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_token",
            "type": "address"
          }
        ],
        "name": "withdrawDeposit",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_sender",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_token",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "_uid",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_senderSignature",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "_guardianSignature",
            "type": "bytes"
          }
        ],
        "name": "commitPaymentChannelAndWithdraw",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_sender",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_token",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "_uid",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_senderSignature",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "_guardianSignature",
            "type": "bytes"
          }
        ],
        "name": "commitPaymentChannelAndDeposit",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_sender",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_token",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "_uid",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_depositPaymentValue",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_senderSignature",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "_guardianSignature",
            "type": "bytes"
          }
        ],
        "name": "commitPaymentChannelAndSplit",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "byteCodeHash": "0xbfbdb510f63b80b41bc8c55f308c99c2e3d219d9cdfb8b567ad0f3890eb708f8",
    "addresses": {
      "9999": "0xd8442BE7714D3726CF7dEfad849d84efAB340510"
    }
  },
  "SignatureValidator": {
    "abi": [
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [],
        "name": "Initialized",
        "type": "event"
      },
      {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "accountRegistry",
        "outputs": [
          {
            "internalType": "contract IAccountRegistry",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "isInitialized",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "signedMessageRegistry",
        "outputs": [
          {
            "internalType": "contract ISignedMessageRegistry",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "contract IAccountRegistry",
            "name": "_accountRegistry",
            "type": "address"
          },
          {
            "internalType": "contract ISignedMessageRegistry",
            "name": "_signedMessageRegistry",
            "type": "address"
          }
        ],
        "name": "initialize",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_messageHash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "_signature",
            "type": "bytes"
          },
          {
            "internalType": "address",
            "name": "_signer",
            "type": "address"
          }
        ],
        "name": "verifySignature",
        "outputs": [
          {
            "internalType": "bool",
            "name": "_result",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "byteCodeHash": "0x66cd8b97d812cdc484b42c8f9aaebb88cb5176e3ef2f1ffa426d18069b2a6388",
    "addresses": {
      "9999": "0xa0CC33936b602f3459e16f343329E0aC074008f7"
    }
  },
  "SignedMessageRegistry": {
    "abi": [
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "signer",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "messageHash",
            "type": "bytes32"
          }
        ],
        "name": "MessageHashSigned",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "signer",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "message",
            "type": "bytes"
          }
        ],
        "name": "MessageSigned",
        "type": "event"
      },
      {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_signedMessageHash",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "_signer",
            "type": "address"
          }
        ],
        "name": "verifySignedMessageHash",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "bytes",
            "name": "_message",
            "type": "bytes"
          }
        ],
        "name": "setMessage",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_messageHash",
            "type": "bytes32"
          }
        ],
        "name": "setMessageHash",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "byteCodeHash": "0xb06d3f9a5707939619e1fae4ee9a9bf97c55793e31fd7e498d0a3dbc0359cbe4",
    "addresses": {
      "9999": "0xc24DfC7A2ec23Bc5b2AcAAC4940f5cdA624Ebd6B"
    }
  }
};
