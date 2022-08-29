/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  PausableBox,
  PausableBoxInterface,
} from "../../contracts/PausableBox";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "initialValue",
        type: "string",
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
        internalType: "string",
        name: "newValue",
        type: "string",
      },
    ],
    name: "ColorChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
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
    ],
    name: "Paused",
    type: "event",
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
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newValue",
        type: "string",
      },
    ],
    name: "changeValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getValue",
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
    name: "owner",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "value",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000a0538038062000a05833981016040819052620000349162000165565b6000805460ff19169055620000493362000066565b80516200005e906001906020840190620000bf565b50506200028e565b600080546001600160a01b03838116610100818102610100600160a81b0319851617855560405193049190911692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35050565b828054620000cd906200023b565b90600052602060002090601f016020900481019282620000f157600085556200013c565b82601f106200010c57805160ff19168380011785556200013c565b828001600101855582156200013c579182015b828111156200013c5782518255916020019190600101906200011f565b506200014a9291506200014e565b5090565b5b808211156200014a57600081556001016200014f565b6000602080838503121562000178578182fd5b82516001600160401b03808211156200018f578384fd5b818501915085601f830112620001a3578384fd5b815181811115620001b857620001b862000278565b604051601f8201601f19908116603f01168101908382118183101715620001e357620001e362000278565b816040528281528886848701011115620001fb578687fd5b8693505b828410156200021e5784840186015181850187015292850192620001ff565b828411156200022f57868684830101525b98975050505050505050565b600181811c908216806200025057607f821691505b602082108114156200027257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b610767806200029e6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063715018a611610066578063715018a6146100de5780638456cb59146100e65780638da5cb5b146100ee578063e3a07ac014610117578063f2fde38b1461012a57600080fd5b806320965255146100985780633f4ba83a146100b65780633fa4f245146100c05780635c975abb146100c8575b600080fd5b6100a061013d565b6040516100ad91906106a3565b60405180910390f35b6100be6101d7565b005b6100a06101e9565b60005460ff1660405190151581526020016100ad565b6100be610277565b6100be610289565b60005461010090046001600160a01b03166040516001600160a01b0390911681526020016100ad565b6100be610125366004610607565b610299565b6100be6101383660046105d9565b6102eb565b6060610147610369565b60018054610154906106f6565b80601f0160208091040260200160405190810160405280929190818152602001828054610180906106f6565b80156101cd5780601f106101a2576101008083540402835291602001916101cd565b820191906000526020600020905b8154815290600101906020018083116101b057829003601f168201915b5050505050905090565b6101df6103af565b6101e761040f565b565b600180546101f6906106f6565b80601f0160208091040260200160405190810160405280929190818152602001828054610222906106f6565b801561026f5780601f106102445761010080835404028352916020019161026f565b820191906000526020600020905b81548152906001019060200180831161025257829003601f168201915b505050505081565b61027f6103af565b6101e76000610461565b6102916103af565b6101e76104ba565b6102a1610369565b6102ad60018383610540565b507fea8482eb24fdcbd88250f9fd14644f201467fcaf3c5f08a0675ed9d46977ae3b82826040516102df929190610674565b60405180910390a15050565b6102f36103af565b6001600160a01b03811661035d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61036681610461565b50565b60005460ff16156101e75760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610354565b6000546001600160a01b036101009091041633146101e75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610354565b6104176104f7565b6000805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600080546001600160a01b03838116610100818102610100600160a81b0319851617855560405193049190911692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35050565b6104c2610369565b6000805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586104443390565b60005460ff166101e75760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610354565b82805461054c906106f6565b90600052602060002090601f01602090048101928261056e57600085556105b4565b82601f106105875782800160ff198235161785556105b4565b828001600101855582156105b4579182015b828111156105b4578235825591602001919060010190610599565b506105c09291506105c4565b5090565b5b808211156105c057600081556001016105c5565b6000602082840312156105ea578081fd5b81356001600160a01b0381168114610600578182fd5b9392505050565b60008060208385031215610619578081fd5b823567ffffffffffffffff80821115610630578283fd5b818501915085601f830112610643578283fd5b813581811115610651578384fd5b866020828501011115610662578384fd5b60209290920196919550909350505050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b6000602080835283518082850152825b818110156106cf578581018301518582016040015282016106b3565b818111156106e05783604083870101525b50601f01601f1916929092016040019392505050565b600181811c9082168061070a57607f821691505b6020821081141561072b57634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212200c44dd898be47872cd2c305eb8064dfc1d2013c940fbacb6e67a6d487ce6eb6364736f6c63430008040033";

type PausableBoxConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PausableBoxConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PausableBox__factory extends ContractFactory {
  constructor(...args: PausableBoxConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    initialValue: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PausableBox> {
    return super.deploy(initialValue, overrides || {}) as Promise<PausableBox>;
  }
  override getDeployTransaction(
    initialValue: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(initialValue, overrides || {});
  }
  override attach(address: string): PausableBox {
    return super.attach(address) as PausableBox;
  }
  override connect(signer: Signer): PausableBox__factory {
    return super.connect(signer) as PausableBox__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PausableBoxInterface {
    return new utils.Interface(_abi) as PausableBoxInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PausableBox {
    return new Contract(address, _abi, signerOrProvider) as PausableBox;
  }
}
