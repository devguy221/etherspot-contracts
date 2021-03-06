/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ENSAbstractResolver,
  ENSAbstractResolverInterface,
} from "../ENSAbstractResolver";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__ac93193e",
        type: "bytes8",
      },
    ],
    name: "c_ac93193e",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__ac93193e",
        type: "bytes8",
      },
    ],
    name: "c_falseac93193e",
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
        name: "c__ac93193e",
        type: "bytes8",
      },
    ],
    name: "c_trueac93193e",
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
];

export class ENSAbstractResolver__factory {
  static readonly abi = _abi;
  static createInterface(): ENSAbstractResolverInterface {
    return new utils.Interface(_abi) as ENSAbstractResolverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ENSAbstractResolver {
    return new Contract(address, _abi, signerOrProvider) as ENSAbstractResolver;
  }
}
