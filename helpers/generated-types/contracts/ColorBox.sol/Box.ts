/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export interface BoxInterface extends utils.Interface {
  functions: {
    "changeColorDryRun(string)": FunctionFragment;
    "changeValue(string)": FunctionFragment;
    "changeValueOwner(string)": FunctionFragment;
    "getValue()": FunctionFragment;
    "getVersion()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "switchShouldRevert()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "changeColorDryRun"
      | "changeValue"
      | "changeValueOwner"
      | "getValue"
      | "getVersion"
      | "owner"
      | "renounceOwnership"
      | "switchShouldRevert"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "changeColorDryRun",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "changeValue", values: [string]): string;
  encodeFunctionData(
    functionFragment: "changeValueOwner",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getValue", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getVersion",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "switchShouldRevert",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "changeColorDryRun",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeValueOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getValue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getVersion", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "switchShouldRevert",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "ColorChanged(string)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "ShouldRevertChanged(bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ColorChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ShouldRevertChanged"): EventFragment;
}

export interface ColorChangedEventObject {
  newValue: string;
}
export type ColorChangedEvent = TypedEvent<[string], ColorChangedEventObject>;

export type ColorChangedEventFilter = TypedEventFilter<ColorChangedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface ShouldRevertChangedEventObject {
  newValue: boolean;
}
export type ShouldRevertChangedEvent = TypedEvent<
  [boolean],
  ShouldRevertChangedEventObject
>;

export type ShouldRevertChangedEventFilter =
  TypedEventFilter<ShouldRevertChangedEvent>;

export interface Box extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BoxInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    changeColorDryRun(
      newValue: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeValue(
      newValue: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeValueOwner(
      newValue: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getValue(overrides?: CallOverrides): Promise<[string]>;

    getVersion(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    switchShouldRevert(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  changeColorDryRun(
    newValue: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeValue(
    newValue: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeValueOwner(
    newValue: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getValue(overrides?: CallOverrides): Promise<string>;

  getVersion(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  switchShouldRevert(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    changeColorDryRun(
      newValue: string,
      overrides?: CallOverrides
    ): Promise<void>;

    changeValue(newValue: string, overrides?: CallOverrides): Promise<void>;

    changeValueOwner(
      newValue: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getValue(overrides?: CallOverrides): Promise<string>;

    getVersion(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    switchShouldRevert(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ColorChanged(string)"(newValue?: null): ColorChangedEventFilter;
    ColorChanged(newValue?: null): ColorChangedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "ShouldRevertChanged(bool)"(
      newValue?: null
    ): ShouldRevertChangedEventFilter;
    ShouldRevertChanged(newValue?: null): ShouldRevertChangedEventFilter;
  };

  estimateGas: {
    changeColorDryRun(
      newValue: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeValue(
      newValue: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeValueOwner(
      newValue: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getValue(overrides?: CallOverrides): Promise<BigNumber>;

    getVersion(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    switchShouldRevert(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    changeColorDryRun(
      newValue: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeValue(
      newValue: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeValueOwner(
      newValue: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    switchShouldRevert(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
