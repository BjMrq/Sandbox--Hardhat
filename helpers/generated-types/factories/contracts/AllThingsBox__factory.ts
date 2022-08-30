/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AllThingsBox,
  AllThingsBoxInterface,
} from "../../contracts/AllThingsBox";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_someString",
        type: "string",
      },
      {
        internalType: "uint112",
        name: "_anyNumber",
        type: "uint112",
      },
      {
        internalType: "address",
        name: "_testAddress",
        type: "address",
      },
      {
        internalType: "string[]",
        name: "_moreArray",
        type: "string[]",
      },
      {
        components: [
          {
            internalType: "string",
            name: "coolName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "coolLevel",
            type: "uint256",
          },
        ],
        internalType: "struct AllThingsBox.CoolStruct",
        name: "_aCoolStruct",
        type: "tuple",
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
        name: "anyThing",
        type: "string",
      },
    ],
    name: "Nothing",
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
    inputs: [],
    name: "aPublicString",
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
    name: "getAddress",
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
    name: "getArray",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getInteger",
    outputs: [
      {
        internalType: "uint112",
        name: "",
        type: "uint112",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getString",
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
    name: "getStruct",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "coolName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "coolLevel",
            type: "uint256",
          },
        ],
        internalType: "struct AllThingsBox.CoolStruct",
        name: "",
        type: "tuple",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_someString",
        type: "string",
      },
      {
        internalType: "uint112",
        name: "_anyNumber",
        type: "uint112",
      },
      {
        internalType: "address",
        name: "_testAddress",
        type: "address",
      },
      {
        internalType: "string[]",
        name: "_moreArray",
        type: "string[]",
      },
      {
        components: [
          {
            internalType: "string",
            name: "coolName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "coolLevel",
            type: "uint256",
          },
        ],
        internalType: "struct AllThingsBox.CoolStruct",
        name: "_aCoolStruct",
        type: "tuple",
      },
    ],
    name: "testInput",
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
  "0x60c06040526009608081905268536f207075626c696360b81b60a09081526200002c91600791906200014f565b503480156200003a57600080fd5b50604051620011bb380380620011bb8339810160408190526200005d91620004b5565b6200006833620000ff565b84516200007d9060019060208801906200014f565b50600280546001600160701b0319166001600160701b038616179055600380546001600160a01b0319166001600160a01b0385161790558151620000c9906004906020850190620001de565b50805180518291600591620000e69183916020909101906200014f565b50602082015181600101559050505050505050620005c6565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8280546200015d9062000589565b90600052602060002090601f016020900481019282620001815760008555620001cc565b82601f106200019c57805160ff1916838001178555620001cc565b82800160010185558215620001cc579182015b82811115620001cc578251825591602001919060010190620001af565b50620001da9291506200023e565b5090565b82805482825590600052602060002090810192821562000230579160200282015b828111156200023057825180516200021f9184916020909101906200014f565b5091602001919060010190620001ff565b50620001da92915062000255565b5b80821115620001da57600081556001016200023f565b80821115620001da5760006200026c828262000276565b5060010162000255565b508054620002849062000589565b6000825580601f1062000295575050565b601f016020900490600052602060002090810190620002b591906200023e565b50565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715620002f957620002f9620002b8565b604052919050565b600082601f8301126200031357600080fd5b81516001600160401b038111156200032f576200032f620002b8565b602062000345601f8301601f19168201620002ce565b82815285828487010111156200035a57600080fd5b60005b838110156200037a5785810183015182820184015282016200035d565b838111156200038c5760008385840101525b5095945050505050565b600082601f830112620003a857600080fd5b815160206001600160401b0380831115620003c757620003c7620002b8565b8260051b620003d8838201620002ce565b9384528581018301938381019088861115620003f357600080fd5b84880192505b858310156200043457825184811115620004135760008081fd5b620004238a87838c010162000301565b8352509184019190840190620003f9565b98975050505050505050565b6000604082840312156200045357600080fd5b604080519081016001600160401b038082118383101715620004795762000479620002b8565b8160405282935084519150808211156200049257600080fd5b50620004a18582860162000301565b825250602083015160208201525092915050565b600080600080600060a08688031215620004ce57600080fd5b85516001600160401b0380821115620004e657600080fd5b620004f489838a0162000301565b602089015190975091506001600160701b03821682146200051457600080fd5b60408801519195506001600160a01b03821682146200053257600080fd5b6060880151919450808211156200054857600080fd5b6200055689838a0162000396565b935060808801519150808211156200056d57600080fd5b506200057c8882890162000440565b9150509295509295909350565b600181811c908216806200059e57607f821691505b60208210811415620005c057634e487b7160e01b600052602260045260246000fd5b50919050565b610be580620005d66000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80638da5cb5b116100665780638da5cb5b14610120578063a951aa9c14610131578063d504ea1d14610139578063f2fde38b1461014e578063fab0d4dc1461016157600080fd5b806309b1b3f2146100a357806338cc4831146100c1578063715018a6146100e657806389ea642f146100f05780638b84925b14610105575b600080fd5b6100ab610174565b6040516100b891906107fb565b60405180910390f35b6003546001600160a01b03165b6040516001600160a01b0390911681526020016100b8565b6100ee610237565b005b6100f8610276565b6040516100b8919061082d565b6002546040516001600160701b0390911681526020016100b8565b6000546001600160a01b03166100ce565b6100f8610308565b610141610396565b6040516100b89190610847565b6100ee61015c3660046108c5565b61046f565b6100ee61016f366004610a06565b61050a565b60408051808201909152606081526000602082015260056040518060400160405290816000820180546101a690610b3f565b80601f01602080910402602001604051908101604052809291908181526020018280546101d290610b3f565b801561021f5780601f106101f45761010080835404028352916020019161021f565b820191906000526020600020905b81548152906001019060200180831161020257829003601f168201915b50505050508152602001600182015481525050905090565b6000546001600160a01b0316331461026a5760405162461bcd60e51b815260040161026190610b7a565b60405180910390fd5b6102746000610615565b565b60606001805461028590610b3f565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610b3f565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b6007805461031590610b3f565b80601f016020809104026020016040519081016040528092919081815260200182805461034190610b3f565b801561038e5780601f106103635761010080835404028352916020019161038e565b820191906000526020600020905b81548152906001019060200180831161037157829003601f168201915b505050505081565b60606004805480602002602001604051908101604052809291908181526020016000905b828210156104665783829060005260206000200180546103d990610b3f565b80601f016020809104026020016040519081016040528092919081815260200182805461040590610b3f565b80156104525780601f1061042757610100808354040283529160200191610452565b820191906000526020600020905b81548152906001019060200180831161043557829003601f168201915b5050505050815260200190600101906103ba565b50505050905090565b6000546001600160a01b031633146104995760405162461bcd60e51b815260040161026190610b7a565b6001600160a01b0381166104fe5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610261565b61050781610615565b50565b6000546001600160a01b031633146105345760405162461bcd60e51b815260040161026190610b7a565b8451610547906001906020880190610665565b50600280546dffffffffffffffffffffffffffff19166001600160701b038616179055600380546001600160a01b0319166001600160a01b03851617905581516105989060049060208501906106e9565b508051805182916005916105b3918391602090910190610665565b50602082015181600101559050507ffb325292c62ed319cf84976eb8065f1819f1a7876aa2855fbf5d976850836cc160405161060690602080825260039082015262776f6160e81b604082015260600190565b60405180910390a15050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b82805461067190610b3f565b90600052602060002090601f01602090048101928261069357600085556106d9565b82601f106106ac57805160ff19168380011785556106d9565b828001600101855582156106d9579182015b828111156106d95782518255916020019190600101906106be565b506106e5929150610742565b5090565b828054828255906000526020600020908101928215610736579160200282015b828111156107365782518051610726918491602090910190610665565b5091602001919060010190610709565b506106e5929150610757565b5b808211156106e55760008155600101610743565b808211156106e557600061076b8282610774565b50600101610757565b50805461078090610b3f565b6000825580601f10610790575050565b601f0160209004906000526020600020908101906105079190610742565b6000815180845260005b818110156107d4576020818501810151868301820152016107b8565b818111156107e6576000602083870101525b50601f01601f19169290920160200192915050565b60208152600082516040602084015261081760608401826107ae565b9050602084015160408401528091505092915050565b60208152600061084060208301846107ae565b9392505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561089c57603f1988860301845261088a8583516107ae565b9450928501929085019060010161086e565b5092979650505050505050565b80356001600160a01b03811681146108c057600080fd5b919050565b6000602082840312156108d757600080fd5b610840826108a9565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561091f5761091f6108e0565b604052919050565b600082601f83011261093857600080fd5b813567ffffffffffffffff811115610952576109526108e0565b610965601f8201601f19166020016108f6565b81815284602083860101111561097a57600080fd5b816020850160208301376000918101602001919091529392505050565b6000604082840312156109a957600080fd5b6040516040810167ffffffffffffffff82821081831117156109cd576109cd6108e0565b8160405282935084359150808211156109e557600080fd5b506109f285828601610927565b825250602083013560208201525092915050565b600080600080600060a08688031215610a1e57600080fd5b853567ffffffffffffffff80821115610a3657600080fd5b610a4289838a01610927565b965060209150818801356001600160701b0381168114610a6157600080fd5b9550610a6f604089016108a9565b9450606088013581811115610a8357600080fd5b8801601f81018a13610a9457600080fd5b803582811115610aa657610aa66108e0565b8060051b610ab58582016108f6565b918252828101850191858101908d841115610acf57600080fd5b86850192505b83831015610b0b57823586811115610aed5760008081fd5b610afb8f8983890101610927565b8352509186019190860190610ad5565b9750505050608089013592505080821115610b2557600080fd5b50610b3288828901610997565b9150509295509295909350565b600181811c90821680610b5357607f821691505b60208210811415610b7457634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260408201526060019056fea2646970667358221220ffb69357773233299810912f89b1edb2bf5640bf14aa554a1fd374f23ba6f7e664736f6c63430008090033";

type AllThingsBoxConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AllThingsBoxConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AllThingsBox__factory extends ContractFactory {
  constructor(...args: AllThingsBoxConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _someString: string,
    _anyNumber: BigNumberish,
    _testAddress: string,
    _moreArray: string[],
    _aCoolStruct: AllThingsBox.CoolStructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AllThingsBox> {
    return super.deploy(
      _someString,
      _anyNumber,
      _testAddress,
      _moreArray,
      _aCoolStruct,
      overrides || {}
    ) as Promise<AllThingsBox>;
  }
  override getDeployTransaction(
    _someString: string,
    _anyNumber: BigNumberish,
    _testAddress: string,
    _moreArray: string[],
    _aCoolStruct: AllThingsBox.CoolStructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _someString,
      _anyNumber,
      _testAddress,
      _moreArray,
      _aCoolStruct,
      overrides || {}
    );
  }
  override attach(address: string): AllThingsBox {
    return super.attach(address) as AllThingsBox;
  }
  override connect(signer: Signer): AllThingsBox__factory {
    return super.connect(signer) as AllThingsBox__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AllThingsBoxInterface {
    return new utils.Interface(_abi) as AllThingsBoxInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AllThingsBox {
    return new Contract(address, _abi, signerOrProvider) as AllThingsBox;
  }
}