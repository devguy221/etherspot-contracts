/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import {
  Contract,
  ContractFactory,
  PayableOverrides,
} from "@ethersproject/contracts";

import type { WrappedWeiToken } from "../WrappedWeiToken";

export class WrappedWeiToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: PayableOverrides): Promise<WrappedWeiToken> {
    return super.deploy(overrides || {}) as Promise<WrappedWeiToken>;
  }
  getDeployTransaction(overrides?: PayableOverrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): WrappedWeiToken {
    return super.attach(address) as WrappedWeiToken;
  }
  connect(signer: Signer): WrappedWeiToken__factory {
    return super.connect(signer) as WrappedWeiToken__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WrappedWeiToken {
    return new Contract(address, _abi, signerOrProvider) as WrappedWeiToken;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "consumer",
        type: "address",
      },
    ],
    name: "ConsumerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "consumer",
        type: "address",
      },
    ],
    name: "ConsumerRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "depositTo",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "consumers_",
        type: "address[]",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "consumer",
        type: "address",
      },
    ],
    name: "isConsumer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isInitialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "startConsuming",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stopConsuming",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "withdrawAllTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x600080546001600160a01b0319163217905560c0604052600b60808190526a577261707065642057656960a81b60a090815262000040916001919062000239565b50604080518082019091526004808252635757454960e01b60209092019182526200006e9160029162000239565b503415620000825762000082333462000088565b620002d5565b6001600160a01b038216620000cf5760405162461bcd60e51b81526004018080602001828103825260268152602001806200146b6026913960400191505060405180910390fd5b6000811162000125576040805162461bcd60e51b815260206004820152601f60248201527f4552433230546f6b656e3a2063616e6e6f74206d696e7420302076616c756500604482015290519081900360640190fd5b6001600160a01b0382166000908152600560209081526040909120546200015791839062000a08620001d7821b17901c565b6001600160a01b0383166000908152600560209081526040909120919091556004546200018f91839062000a08620001d7821b17901c565b6004556040805182815290516001600160a01b038416916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b60008282018381101562000232576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174684c69623a206164646974696f6e206f766572666c6f770000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200027c57805160ff1916838001178555620002ac565b82800160010185558215620002ac579182015b82811115620002ac5782518255916020019190600101906200028f565b50620002ba929150620002be565b5090565b5b80821115620002ba5760008155600101620002bf565b61118680620002e56000396000f3fe6080604052600436106101185760003560e01c806370a08231116100a0578063a9059cbb11610064578063a9059cbb14610434578063b760faf91461046d578063ca9add8f14610493578063dd62ed3e146104c6578063f55647e01461050157610129565b806370a0823114610327578063834ff7391461035a578063853828b61461038d57806395d89b41146103a2578063a224cee7146103b757610129565b806323b872dd116100e757806323b872dd146102655780632e1a7d4d146102a8578063313ce567146102d2578063392e53cd146102fd57806356a3b64b1461031257610129565b806306fdde031461012e578063095ea7b3146101b857806318160ddd14610205578063205c28781461022c57610129565b36610129576101273334610516565b005b600080fd5b34801561013a57600080fd5b50610143610641565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561017d578181015183820152602001610165565b50505050905090810190601f1680156101aa5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101c457600080fd5b506101f1600480360360408110156101db57600080fd5b506001600160a01b0381351690602001356106ce565b604080519115158252519081900360200190f35b34801561021157600080fd5b5061021a6106e4565b60408051918252519081900360200190f35b34801561023857600080fd5b506101276004803603604081101561024f57600080fd5b506001600160a01b0381351690602001356106ea565b34801561027157600080fd5b506101f16004803603606081101561028857600080fd5b506001600160a01b038135811691602081013590911690604001356106f9565b3480156102b457600080fd5b50610127600480360360208110156102cb57600080fd5b503561074a565b3480156102de57600080fd5b506102e7610758565b6040805160ff9092168252519081900360200190f35b34801561030957600080fd5b506101f1610761565b34801561031e57600080fd5b50610127610771565b34801561033357600080fd5b5061021a6004803603602081101561034a57600080fd5b50356001600160a01b031661077c565b34801561036657600080fd5b506101f16004803603602081101561037d57600080fd5b50356001600160a01b0316610797565b34801561039957600080fd5b506101276107b5565b3480156103ae57600080fd5b506101436107d1565b3480156103c357600080fd5b50610127600480360360208110156103da57600080fd5b8101906020810181356401000000008111156103f557600080fd5b82018360208201111561040757600080fd5b8035906020019184602083028401116401000000008311171561042957600080fd5b509092509050610829565b34801561044057600080fd5b506101f16004803603604081101561045757600080fd5b506001600160a01b03813516906020013561090e565b6101276004803603602081101561048357600080fd5b50356001600160a01b031661091b565b34801561049f57600080fd5b50610127600480360360208110156104b657600080fd5b50356001600160a01b0316610925565b3480156104d257600080fd5b5061021a600480360360408110156104e957600080fd5b506001600160a01b0381358116916020013516610941565b34801561050d57600080fd5b5061012761096c565b6001600160a01b03821661055b5760405162461bcd60e51b815260040180806020018281038252602681526020018061108c6026913960400191505060405180910390fd5b600081116105b0576040805162461bcd60e51b815260206004820152601f60248201527f4552433230546f6b656e3a2063616e6e6f74206d696e7420302076616c756500604482015290519081900360640190fd5b6001600160a01b0382166000908152600560205260409020546105d39082610a08565b6001600160a01b0383166000908152600560205260409020556004546105f99082610a08565b6004556040805182815290516001600160a01b038416916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156106c65780601f1061069b576101008083540402835291602001916106c6565b820191906000526020600020905b8154815290600101906020018083116106a957829003601f168201915b505050505081565b60006106db338484610a69565b50600192915050565b60045481565b6106f5338383610b55565b5050565b6000610706848484610bc4565b6001600160a01b03841660009081526006602090815260408083203380855292529091205461074091869161073b9086610c00565b610a69565b5060019392505050565b610755333383610b55565b50565b60035460ff1681565b6000546001600160a01b03161590565b61077a33610c25565b565b6001600160a01b031660009081526005602052604090205490565b6001600160a01b031660009081526007602052604090205460ff1690565b3360008181526005602052604090205461077a91908190610b55565b6002805460408051602060018416156101000260001901909316849004601f810184900484028201840190925281815292918301828280156106c65780601f1061069b576101008083540402835291602001916106c6565b6000546001600160a01b031632146108725760405162461bcd60e51b815260040180806020018281038252602f815260200180610fc0602f913960400191505060405180910390fd5b600080546001600160a01b0319169055806108a657336000908152600760205260409020805460ff191660011790556108e1565b8060005b818110156108de576108d68484838181106108c157fe5b905060200201356001600160a01b0316610c25565b6001016108aa565b50505b6040517f5daa87a0e9463431830481fd4b6e3403442dfb9a12b9c07597e9f61d50b633c890600090a15050565b60006106db338484610bc4565b6107558134610516565b3360008181526005602052604090205461075591908390610b55565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205490565b3360009081526007602052604090205460ff166109ba5760405162461bcd60e51b81526004018080602001828103825260278152602001806110dc6027913960400191505060405180910390fd5b33600081815260076020908152604091829020805460ff19169055815192835290517fe3f5ed5f263f1f01764a96edfc7d025f511ec5f7d180e8816908b78bcf74f0989281900390910190a1565b600082820183811015610a62576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174684c69623a206164646974696f6e206f766572666c6f770000604482015290519081900360640190fd5b9392505050565b6001600160a01b038316610aae5760405162461bcd60e51b815260040180806020018281038252602b815260200180611061602b913960400191505060405180910390fd5b6001600160a01b038216610af35760405162461bcd60e51b81526004018080602001828103825260298152602001806110176029913960400191505060405180910390fd5b6001600160a01b03808416600081815260066020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b610b5f8382610cd8565b6040516001600160a01b0383169082156108fc029083906000818181858888f19350505050610bbf5760405162461bcd60e51b81526004018080602001828103825260258152602001806111036025913960400191505060405180910390fd5b505050565b6001600160a01b03821660009081526007602052604090205460ff1615610bf557610bf0838383610b55565b610bbf565b610bbf838383610dc8565b6000610a62838360405180606001604052806021815260200161104060219139610f00565b6001600160a01b03811660009081526007602052604090205460ff1615610c7d5760405162461bcd60e51b8152600401808060200182810382526028815260200180610fef6028913960400191505060405180910390fd5b6001600160a01b038116600081815260076020908152604091829020805460ff19166001179055815192835290517f28b26e7a3d20aedbc5f8f2ebf7da671c0491723a2b78f47a097b0e46dee071429281900390910190a150565b6001600160a01b038216610d1d5760405162461bcd60e51b8152600401808060200182810382526028815260200180610f986028913960400191505060405180910390fd5b610d5a81604051806060016040528060268152602001611128602691396001600160a01b0385166000908152600560205260409020549190610f00565b6001600160a01b038316600090815260056020526040902055600454610d809082610c00565b6004556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b6001600160a01b038316610e0d5760405162461bcd60e51b815260040180806020018281038252602c81526020018061114e602c913960400191505060405180910390fd5b6001600160a01b038216610e525760405162461bcd60e51b815260040180806020018281038252602a8152602001806110b2602a913960400191505060405180910390fd5b6001600160a01b038316600090815260056020526040902054610e759082610c00565b6001600160a01b038085166000908152600560205260408082209390935590841681522054610ea49082610a08565b6001600160a01b0380841660008181526005602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610f8f5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610f54578181015183820152602001610f3c565b50505050905090810190601f168015610f815780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505090039056fe4552433230546f6b656e3a2063616e6e6f74206275726e2066726f6d203078302061646472657373496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742074686520696e697469616c697a657257726170706564576569546f6b656e3a20636f6e73756d657220616c7265616479206578697374734552433230546f6b656e3a2063616e6e6f7420617070726f766520746f203078302061646472657373536166654d6174684c69623a207375627472616374696f6e206f766572666c6f774552433230546f6b656e3a2063616e6e6f7420617070726f76652066726f6d2030783020616464726573734552433230546f6b656e3a2063616e6e6f74206d696e7420746f2030783020616464726573734552433230546f6b656e3a2063616e6e6f74207472616e7366657220746f20307830206164647265737357726170706564576569546f6b656e3a20636f6e73756d657220646f65736e277420657869737457726170706564576569546f6b656e3a207472616e73616374696f6e2072657665727465644552433230546f6b656e3a206275726e2076616c756520657863656564732062616c616e63654552433230546f6b656e3a2063616e6e6f74207472616e736665722066726f6d203078302061646472657373a164736f6c634300060c000a4552433230546f6b656e3a2063616e6e6f74206d696e7420746f203078302061646472657373";