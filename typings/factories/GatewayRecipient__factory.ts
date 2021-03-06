/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  GatewayRecipient,
  GatewayRecipientInterface,
} from "../GatewayRecipient";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__d5c463c2",
        type: "bytes8",
      },
    ],
    name: "c_d5c463c2",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__d5c463c2",
        type: "bytes8",
      },
    ],
    name: "c_falsed5c463c2",
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
        name: "c__d5c463c2",
        type: "bytes8",
      },
    ],
    name: "c_trued5c463c2",
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

export class GatewayRecipient__factory {
  static readonly abi = _abi;
  static createInterface(): GatewayRecipientInterface {
    return new utils.Interface(_abi) as GatewayRecipientInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GatewayRecipient {
    return new Contract(address, _abi, signerOrProvider) as GatewayRecipient;
  }
}
