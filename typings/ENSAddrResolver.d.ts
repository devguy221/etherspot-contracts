/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ENSAddrResolverInterface extends ethers.utils.Interface {
  functions: {
    "addr(bytes32)": FunctionFragment;
    "setAddr(bytes32,uint256,bytes)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addr", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "setAddr",
    values: [BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "addr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setAddr", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "AddrChanged(bytes32,address)": EventFragment;
    "AddressChanged(bytes32,uint256,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddrChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AddressChanged"): EventFragment;
}

export class ENSAddrResolver extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ENSAddrResolverInterface;

  functions: {
    "addr(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "addr(bytes32,uint256)"(
      node: BytesLike,
      coinType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "setAddr(bytes32,uint256,bytes)"(
      node: BytesLike,
      coinType: BigNumberish,
      addr_: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setAddr(bytes32,address)"(
      node: BytesLike,
      addr_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "supportsInterface(bytes4)"(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  "addr(bytes32)"(node: BytesLike, overrides?: CallOverrides): Promise<string>;

  "addr(bytes32,uint256)"(
    node: BytesLike,
    coinType: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "setAddr(bytes32,uint256,bytes)"(
    node: BytesLike,
    coinType: BigNumberish,
    addr_: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setAddr(bytes32,address)"(
    node: BytesLike,
    addr_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "supportsInterface(bytes4)"(
    interfaceID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    "addr(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "addr(bytes32,uint256)"(
      node: BytesLike,
      coinType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "setAddr(bytes32,uint256,bytes)"(
      node: BytesLike,
      coinType: BigNumberish,
      addr_: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAddr(bytes32,address)"(
      node: BytesLike,
      addr_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsInterface(bytes4)"(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    AddrChanged(node: BytesLike | null, addr: null): EventFilter;

    AddressChanged(
      node: BytesLike | null,
      coinType: null,
      newAddress: null
    ): EventFilter;
  };

  estimateGas: {
    "addr(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "addr(bytes32,uint256)"(
      node: BytesLike,
      coinType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "setAddr(bytes32,uint256,bytes)"(
      node: BytesLike,
      coinType: BigNumberish,
      addr_: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setAddr(bytes32,address)"(
      node: BytesLike,
      addr_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsInterface(bytes4)"(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    "addr(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "addr(bytes32,uint256)"(
      node: BytesLike,
      coinType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "setAddr(bytes32,uint256,bytes)"(
      node: BytesLike,
      coinType: BigNumberish,
      addr_: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setAddr(bytes32,address)"(
      node: BytesLike,
      addr_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsInterface(bytes4)"(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
