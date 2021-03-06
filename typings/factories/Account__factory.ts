/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Account, AccountInterface } from "../Account";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "registry_",
        type: "address",
      },
      {
        internalType: "address",
        name: "implementation_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__305923d6",
        type: "bytes8",
      },
    ],
    name: "c_305923d6",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__d6b1085a",
        type: "bytes8",
      },
    ],
    name: "c_d6b1085a",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__e208e0f4",
        type: "bytes8",
      },
    ],
    name: "c_e208e0f4",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__305923d6",
        type: "bytes8",
      },
    ],
    name: "c_false305923d6",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__d6b1085a",
        type: "bytes8",
      },
    ],
    name: "c_falsed6b1085a",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__e208e0f4",
        type: "bytes8",
      },
    ],
    name: "c_falsee208e0f4",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__305923d6",
        type: "bytes8",
      },
    ],
    name: "c_true305923d6",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__d6b1085a",
        type: "bytes8",
      },
    ],
    name: "c_trued6b1085a",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__e208e0f4",
        type: "bytes8",
      },
    ],
    name: "c_truee208e0f4",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "controller",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "executeTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "registry",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation_",
        type: "address",
      },
    ],
    name: "setImplementation",
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
  "0x608060405234801561001057600080fd5b50604051610f32380380610f328339818101604052604081101561003357600080fd5b810190808051906020019092919080519060200190929190505050610068679894797dc84081af60c01b61019960201b60201c565b610082674e0f327275f95bf160c01b61019960201b60201c565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506100dc6794e469383b340c9160c01b61019c60201b60201c565b6100f66786f2a31597afd57a60c01b61019c60201b60201c565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506101516788e2a6c2eb66825d60c01b61019c60201b60201c565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505061019f565b50565b50565b610d84806101ae6000396000f3fe6080604052600436106100e15760003560e01c80637b1039991161007f578063b49762a111610059578063b49762a114610664578063d784d426146106d0578063dd54622814610721578063f77c479114610777576100e8565b80637b103999146105775780638f27e6b6146105b8578063abe124f61461060e576100e8565b806334d23875116100bb57806334d23875146103355780633f579f42146103a15780635c60da1b146104ca5780636480a27b1461050b576100e8565b8063062e4f9c146101f15780631454d4701461025d5780632486e26f146102c9576100e8565b366100e857005b3480156100f457600080fd5b5061010967267be5c007ba493660c01b6107b8565b61011d67c98405188afd4dab60c01b6107b8565b610131676a933c5d83132d2460c01b6107b8565b600080369050146101db5761015067b3d07c93e15dcc6960c01b6107b8565b610164670848f5b7587f259a60c01b6107b8565b610178677607056d4b83e95960c01b6107b8565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506101b367b7ff281b6713313460c01b6107b8565b368060008037600080826000855af43d806000803e81600081146101d657816000f35b816000fd5b6101ef6707d26d689f0268c060c01b6107b8565b005b3480156101fd57600080fd5b506102456004803603602081101561021457600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506107bb565b60405180821515815260200191505060405180910390f35b34801561026957600080fd5b506102b16004803603602081101561028057600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506107c2565b60405180821515815260200191505060405180910390f35b3480156102d557600080fd5b5061031d600480360360208110156102ec57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506107c9565b60405180821515815260200191505060405180910390f35b34801561034157600080fd5b506103896004803603602081101561035857600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506107d4565b60405180821515815260200191505060405180910390f35b3480156103ad57600080fd5b5061044f600480360360608110156103c457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561040b57600080fd5b82018360208201111561041d57600080fd5b8035906020019184600183028401116401000000008311171561043f57600080fd5b90919293919293905050506107df565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561048f578082015181840152602081019050610474565b50505050905090810190601f1680156104bc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156104d657600080fd5b506104df610b13565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561051757600080fd5b5061055f6004803603602081101561052e57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610b39565b60405180821515815260200191505060405180910390f35b34801561058357600080fd5b5061058c610b44565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156105c457600080fd5b5061060c600480360360208110156105db57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610b6a565b005b34801561061a57600080fd5b506106626004803603602081101561063157600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610b6d565b005b34801561067057600080fd5b506106b86004803603602081101561068757600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610b70565b60405180821515815260200191505060405180910390f35b3480156106dc57600080fd5b5061071f600480360360208110156106f357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b77565b005b34801561072d57600080fd5b506107756004803603602081101561074457600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506107b8565b005b34801561078357600080fd5b5061078c610d27565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b50565b6000919050565b6000919050565b600060019050919050565b600060019050919050565b60606107f5675aa5d179f54cb87d60c01b6107b8565b61080967a226552386468aff60c01b610b6d565b61081d67bb06267d15cafc8560c01b610b6d565b61083167d0eb72184d8e714c60c01b610b6d565b61084567f128b7cf1088330a60c01b610b6d565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108e9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180610d4c602c913960400191505060405180910390fd5b6108fd6787dbbb5ffe0583c160c01b610b6d565b61091167f3741b7d431227a560c01b610b6d565b6109256737f078ab60df830760c01b6107b8565b61093967e4de2ba80b3b44d560c01b6107b8565b61094d675abe6251e319bc7c60c01b6107b8565b6109616726cc190ece09b7db60c01b6107b8565b6060610977676002c94a45713e1f60c01b6107b8565b61098b678d82d94b1795aafc60c01b6107b8565b60006109a167df08c3b5e2fa54f560c01b6107b8565b8673ffffffffffffffffffffffffffffffffffffffff1686868660405180838380828437808301925050509250505060006040518083038185875af1925050503d8060008114610a0d576040519150601f19603f3d011682016040523d82523d6000602084013e610a12565b606091505b508093508192505050610a2f67f28a312aa9cfaa7160c01b6107b8565b610a4367162325a0fb69618f60c01b6107b8565b610a576711f6077f17c7465a60c01b6107b8565b80610aca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4163636f756e743a207472616e73616374696f6e20726576657274656400000081525060200191505060405180910390fd5b610ade6780640c61604c38b060c01b6107b8565b610af267157aa11e3950a2a260c01b6107b8565b610b06671a32fc353aeb8d2f60c01b6107b8565b8192505050949350505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060019050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b50565b50565b6000919050565b610b8b67c3094137b7a928f360c01b6107b8565b610b9f67a226552386468aff60c01b610b6d565b610bb367bb06267d15cafc8560c01b610b6d565b610bc767d0eb72184d8e714c60c01b610b6d565b610bdb67f128b7cf1088330a60c01b610b6d565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c7f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180610d4c602c913960400191505060405180910390fd5b610c936787dbbb5ffe0583c160c01b610b6d565b610ca767f3741b7d431227a560c01b610b6d565b610cbb6710c6caed8159651f60c01b6107b8565b610ccf67ac6d8f9c43d3285d60c01b6107b8565b610ce3679d4a82d94581f52860c01b6107b8565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fe436f6e74726f6c6c65643a206d73672e73656e646572206973206e6f742074686520636f6e74726f6c6c6572a164736f6c634300060c000a";

type AccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Account__factory extends ContractFactory {
  constructor(...args: AccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    registry_: string,
    implementation_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Account> {
    return super.deploy(
      registry_,
      implementation_,
      overrides || {}
    ) as Promise<Account>;
  }
  getDeployTransaction(
    registry_: string,
    implementation_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      registry_,
      implementation_,
      overrides || {}
    );
  }
  attach(address: string): Account {
    return super.attach(address) as Account;
  }
  connect(signer: Signer): Account__factory {
    return super.connect(signer) as Account__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AccountInterface {
    return new utils.Interface(_abi) as AccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Account {
    return new Contract(address, _abi, signerOrProvider) as Account;
  }
}
