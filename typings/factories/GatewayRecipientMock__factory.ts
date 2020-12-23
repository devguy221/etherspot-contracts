/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { GatewayRecipientMock } from "../GatewayRecipientMock";

export class GatewayRecipientMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    gateway_: string,
    overrides?: Overrides
  ): Promise<GatewayRecipientMock> {
    return super.deploy(
      gateway_,
      overrides || {}
    ) as Promise<GatewayRecipientMock>;
  }
  getDeployTransaction(
    gateway_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(gateway_, overrides || {});
  }
  attach(address: string): GatewayRecipientMock {
    return super.attach(address) as GatewayRecipientMock;
  }
  connect(signer: Signer): GatewayRecipientMock__factory {
    return super.connect(signer) as GatewayRecipientMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GatewayRecipientMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as GatewayRecipientMock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "gateway_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "Context",
    type: "event",
  },
  {
    inputs: [],
    name: "emitContext",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gateway",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161036c38038061036c8339818101604052602081101561003357600080fd5b505161003e81610044565b50610066565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6102f7806100756000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063116191b61461003b5780636d0e77801461005f575b600080fd5b610043610069565b604080516001600160a01b039092168252519081900360200190f35b610067610078565b005b6000546001600160a01b031681565b7f1b86fe2ccdffbf1a2c71e8eca215369d319e2c66c438a84d666fb2536ffbfb3a6100a1610107565b6100a9610118565b6100b1610124565b604080516001600160a01b0380871682528516602082015260609181018281529181018390529060808201848480828437600083820152604051601f909101601f191690920182900397509095505050505050a1565b60006101136028610163565b905090565b60006101136014610163565b3660003660006101326101d9565b156101535761014a36602719810190600090816102a0565b9150915061015a565b5060009050365b90925090509091565b60008061016e6101d9565b156101d05736838103906101c89061018e906014840190849060006102a0565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061023792505050565b9150506101d3565b50335b92915050565b6000805481906001600160a01b031633141561011357602c36101561022f5760405162461bcd60e51b81526004018080602001828103825260228152602001806102c96022913960400191505060405180910390fd5b506001905090565b6000808251601414610290576040805162461bcd60e51b815260206004820152601d60248201527f42797465734c69623a20696e76616c69642064617461206c656e677468000000604482015290519081900360640190fd5b505060200151600160601b900490565b600080858511156102af578182fd5b838611156102bb578182fd5b505082019391909203915056fe47617465776179526563697069656e743a20696e76616c6964206d73672e64617461a164736f6c634300060c000a";