/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  StorageAccessible,
  StorageAccessibleInterface,
} from "../../../contracts/common/StorageAccessible";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "offset",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "getStorageAt",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "targetContract",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "calldataPayload",
        type: "bytes",
      },
    ],
    name: "simulateAndRevert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610305806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80635624b25b1461003b578063b4faba0914610064575b600080fd5b61004e610049366004610122565b610079565b60405161005b9190610144565b60405180910390f35b6100776100723660046101af565b6100ff565b005b60606000610088836020610295565b67ffffffffffffffff8111156100a0576100a0610199565b6040519080825280601f01601f1916602001820160405280156100ca576020820181803683370190505b50905060005b838110156100f75784810154602080830284010152806100ef816102b4565b9150506100d0565b509392505050565b600080825160208401855af480600052503d6020523d600060403e60403d016000fd5b6000806040838503121561013557600080fd5b50508035926020909101359150565b600060208083528351808285015260005b8181101561017157858101830151858201604001528201610155565b81811115610183576000604083870101525b50601f01601f1916929092016040019392505050565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156101c257600080fd5b82356001600160a01b03811681146101d957600080fd5b9150602083013567ffffffffffffffff808211156101f657600080fd5b818501915085601f83011261020a57600080fd5b81358181111561021c5761021c610199565b604051601f8201601f19908116603f0116810190838211818310171561024457610244610199565b8160405282815288602084870101111561025d57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156102af576102af61027f565b500290565b60006000198214156102c8576102c861027f565b506001019056fea2646970667358221220ec4c62327cee3f7bd65aca0e70db93634ba74b39c8f32d5be8a086cb009fa71764736f6c63430008090033";

type StorageAccessibleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StorageAccessibleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StorageAccessible__factory extends ContractFactory {
  constructor(...args: StorageAccessibleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StorageAccessible> {
    return super.deploy(overrides || {}) as Promise<StorageAccessible>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): StorageAccessible {
    return super.attach(address) as StorageAccessible;
  }
  override connect(signer: Signer): StorageAccessible__factory {
    return super.connect(signer) as StorageAccessible__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StorageAccessibleInterface {
    return new utils.Interface(_abi) as StorageAccessibleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StorageAccessible {
    return new Contract(address, _abi, signerOrProvider) as StorageAccessible;
  }
}