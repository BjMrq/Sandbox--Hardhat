/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ColorBox, ColorBoxInterface } from "../../contracts/ColorBox";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "initialColor",
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
    inputs: [
      {
        internalType: "string",
        name: "newColor",
        type: "string",
      },
    ],
    name: "changeColor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newColor",
        type: "string",
      },
    ],
    name: "changeColorDryRun",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getColor",
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
    name: "getVersion",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161084838038061084883398101604081905261002f91610151565b61003833610052565b805161004b9060019060208401906100a2565b505061025b565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8280546100ae90610220565b90600052602060002090601f0160209004810192826100d05760008555610116565b82601f106100e957805160ff1916838001178555610116565b82800160010185558215610116579182015b828111156101165782518255916020019190600101906100fb565b50610122929150610126565b5090565b5b808211156101225760008155600101610127565b634e487b7160e01b600052604160045260246000fd5b6000602080838503121561016457600080fd5b82516001600160401b038082111561017b57600080fd5b818501915085601f83011261018f57600080fd5b8151818111156101a1576101a161013b565b604051601f8201601f19908116603f011681019083821181831017156101c9576101c961013b565b8160405282815288868487010111156101e157600080fd5b600093505b8284101561020357848401860151818501870152928501926101e6565b828411156102145760008684830101525b98975050505050505050565b600181811c9082168061023457607f821691505b6020821081141561025557634e487b7160e01b600052602260045260246000fd5b50919050565b6105de8061026a6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638da5cb5b1161005b5780638da5cb5b146100cf5780639a86139b146100ea578063ac7a25ee146100f2578063f2fde38b1461010557600080fd5b80630d8e6e2c146100825780636aa2afd5146100b2578063715018a6146100c7575b600080fd5b604080518082019091526002815261563160f01b60208201525b6040516100a99190610412565b60405180910390f35b6100c56100c0366004610467565b610118565b005b6100c5610195565b6000546040516001600160a01b0390911681526020016100a9565b61009c6101cb565b6100c5610100366004610467565b61025d565b6100c56101133660046104d9565b61028e565b6000546001600160a01b0316331461014b5760405162461bcd60e51b815260040161014290610509565b60405180910390fd5b61015760018383610379565b507fea8482eb24fdcbd88250f9fd14644f201467fcaf3c5f08a0675ed9d46977ae3b828260405161018992919061053e565b60405180910390a15050565b6000546001600160a01b031633146101bf5760405162461bcd60e51b815260040161014290610509565b6101c96000610329565b565b6060600180546101da9061056d565b80601f01602080910402602001604051908101604052809291908181526020018280546102069061056d565b80156102535780601f1061022857610100808354040283529160200191610253565b820191906000526020600020905b81548152906001019060200180831161023657829003601f168201915b5050505050905090565b7fea8482eb24fdcbd88250f9fd14644f201467fcaf3c5f08a0675ed9d46977ae3b828260405161018992919061053e565b6000546001600160a01b031633146102b85760405162461bcd60e51b815260040161014290610509565b6001600160a01b03811661031d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610142565b61032681610329565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8280546103859061056d565b90600052602060002090601f0160209004810192826103a757600085556103ed565b82601f106103c05782800160ff198235161785556103ed565b828001600101855582156103ed579182015b828111156103ed5782358255916020019190600101906103d2565b506103f99291506103fd565b5090565b5b808211156103f957600081556001016103fe565b600060208083528351808285015260005b8181101561043f57858101830151858201604001528201610423565b81811115610451576000604083870101525b50601f01601f1916929092016040019392505050565b6000806020838503121561047a57600080fd5b823567ffffffffffffffff8082111561049257600080fd5b818501915085601f8301126104a657600080fd5b8135818111156104b557600080fd5b8660208285010111156104c757600080fd5b60209290920196919550909350505050565b6000602082840312156104eb57600080fd5b81356001600160a01b038116811461050257600080fd5b9392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b600181811c9082168061058157607f821691505b602082108114156105a257634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220ae9eb2d2d995655ec45cbf721ac32c4ab6c09ee2b88d5ccd6f14d538ce79f85c64736f6c63430008090033";

type ColorBoxConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ColorBoxConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ColorBox__factory extends ContractFactory {
  constructor(...args: ColorBoxConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    initialColor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ColorBox> {
    return super.deploy(initialColor, overrides || {}) as Promise<ColorBox>;
  }
  override getDeployTransaction(
    initialColor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(initialColor, overrides || {});
  }
  override attach(address: string): ColorBox {
    return super.attach(address) as ColorBox;
  }
  override connect(signer: Signer): ColorBox__factory {
    return super.connect(signer) as ColorBox__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ColorBoxInterface {
    return new utils.Interface(_abi) as ColorBoxInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ColorBox {
    return new Contract(address, _abi, signerOrProvider) as ColorBox;
  }
}
