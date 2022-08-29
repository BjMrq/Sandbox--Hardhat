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
import type { PromiseOrValue } from "../../../common";
import type {
  TimelockController,
  TimelockControllerInterface,
} from "../../../contracts/Timelock.sol/TimelockController";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minDelay",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "proposers",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "executors",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "CallExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "CallScheduled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "Cancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldDuration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newDuration",
        type: "uint256",
      },
    ],
    name: "MinDelayChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EXECUTOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PROPOSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TIMELOCK_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
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
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    inputs: [
      {
        internalType: "address",
        name: "target",
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
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperation",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperationBatch",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperation",
    outputs: [
      {
        internalType: "bool",
        name: "pending",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationDone",
    outputs: [
      {
        internalType: "bool",
        name: "done",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationPending",
    outputs: [
      {
        internalType: "bool",
        name: "pending",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationReady",
    outputs: [
      {
        internalType: "bool",
        name: "ready",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
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
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "schedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "scheduleBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [
      {
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "updateDelay",
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
  "0x60806040523480156200001157600080fd5b5060405162001e6e38038062001e6e8339810160408190526200003491620003a9565b6200004f60008051602062001e0e83398151915280620001e1565b6200007960008051602062001e2e83398151915260008051602062001e0e833981519152620001e1565b620000a360008051602062001e4e83398151915260008051602062001e0e833981519152620001e1565b620000be60008051602062001e0e833981519152336200022c565b620000d960008051602062001e0e833981519152306200022c565b60005b825181101562000142576200012f60008051602062001e2e8339815191528483815181106200011b57634e487b7160e01b600052603260045260246000fd5b60200260200101516200022c60201b60201c565b6200013a816200041a565b9050620000dc565b5060005b815181101562000198576200018560008051602062001e4e8339815191528383815181106200011b57634e487b7160e01b600052603260045260246000fd5b62000190816200041a565b905062000146565b5060028390556040805160008152602081018590527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a150505062000458565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b6200023882826200023c565b5050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000238576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620002983390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b80516001600160a01b0381168114620002f457600080fd5b919050565b600082601f8301126200030a578081fd5b815160206001600160401b038083111562000329576200032962000442565b8260051b604051601f19603f8301168101818110848211171562000351576200035162000442565b6040528481528381019250868401828801850189101562000370578687fd5b8692505b858310156200039d576200038881620002dc565b84529284019260019290920191840162000374565b50979650505050505050565b600080600060608486031215620003be578283fd5b835160208501519093506001600160401b0380821115620003dd578384fd5b620003eb87838801620002f9565b9350604086015191508082111562000401578283fd5b506200041086828701620002f9565b9150509250925092565b60006000198214156200043b57634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fd5b6119a680620004686000396000f3fe60806040526004361061014f5760003560e01c806364d62353116100b6578063b1c5f4271161006f578063b1c5f427146103f3578063c4d252f514610413578063d45c443514610433578063d547741f14610460578063e38335e514610480578063f27a0c921461049357600080fd5b806364d623531461033c5780638065657f1461035c5780638f2a0bb01461037c5780638f61f4f51461039c57806391d14854146103be578063a217fddf146103de57600080fd5b8063248a9ca311610108578063248a9ca31461025b5780632ab0f5291461028b5780632f2ff15d146102bc57806331d50750146102dc57806336568abe146102fc578063584b153e1461031c57600080fd5b806301d5062a1461015b57806301ffc9a71461017d57806307bd0265146101b25780630d3cf6fc146101f4578063134008d31461022857806313bc9f201461023b57600080fd5b3661015657005b600080fd5b34801561016757600080fd5b5061017b61017636600461131c565b6104a8565b005b34801561018957600080fd5b5061019d610198366004611525565b61052b565b60405190151581526020015b60405180910390f35b3480156101be57600080fd5b506101e67fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6381565b6040519081526020016101a9565b34801561020057600080fd5b506101e67f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca581565b61017b6102363660046112b2565b610562565b34801561024757600080fd5b5061019d6102563660046114e2565b6105da565b34801561026757600080fd5b506101e66102763660046114e2565b60009081526020819052604090206001015490565b34801561029757600080fd5b5061019d6102a63660046114e2565b6000908152600160208190526040909120541490565b3480156102c857600080fd5b5061017b6102d73660046114fa565b610600565b3480156102e857600080fd5b5061019d6102f73660046114e2565b61062a565b34801561030857600080fd5b5061017b6103173660046114fa565b610643565b34801561032857600080fd5b5061019d6103373660046114e2565b6106c6565b34801561034857600080fd5b5061017b6103573660046114e2565b6106dc565b34801561036857600080fd5b506101e66103773660046112b2565b610780565b34801561038857600080fd5b5061017b610397366004611434565b6107bf565b3480156103a857600080fd5b506101e660008051602061195183398151915281565b3480156103ca57600080fd5b5061019d6103d93660046114fa565b610929565b3480156103ea57600080fd5b506101e6600081565b3480156103ff57600080fd5b506101e661040e36600461138f565b610952565b34801561041f57600080fd5b5061017b61042e3660046114e2565b610997565b34801561043f57600080fd5b506101e661044e3660046114e2565b60009081526001602052604090205490565b34801561046c57600080fd5b5061017b61047b3660046114fa565b610a5a565b61017b61048e36600461138f565b610a7f565b34801561049f57600080fd5b506002546101e6565b6000805160206119518339815191526104c081610bde565b60006104d0898989898989610780565b90506104dc8184610beb565b6000817f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8b8b8b8b8b8a604051610518969594939291906116ba565b60405180910390a3505050505050505050565b60006001600160e01b03198216637965db0b60e01b148061055c57506301ffc9a760e01b6001600160e01b03198316145b92915050565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6361058e816000610929565b61059c5761059c8133610cda565b60006105ac888888888888610780565b90506105b88185610d3e565b6105c78160008a8a8a8a610dda565b6105d081610eee565b5050505050505050565b6000818152600160205260408120546001811180156105f95750428111155b9392505050565b60008281526020819052604090206001015461061b81610bde565b6106258383610f27565b505050565b60008181526001602052604081205481905b1192915050565b6001600160a01b03811633146106b85760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6106c28282610fab565b5050565b600081815260016020819052604082205461063c565b33301461073f5760405162461bcd60e51b815260206004820152602b60248201527f54696d656c6f636b436f6e74726f6c6c65723a2063616c6c6572206d7573742060448201526a62652074696d656c6f636b60a81b60648201526084016106af565b60025460408051918252602082018390527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a1600255565b600086868686868660405160200161079d969594939291906116ba565b6040516020818303038152906040528051906020012090509695505050505050565b6000805160206119518339815191526107d781610bde565b8887146107f65760405162461bcd60e51b81526004016106af906117cf565b8885146108155760405162461bcd60e51b81526004016106af906117cf565b60006108278b8b8b8b8b8b8b8b610952565b90506108338184610beb565b60005b8a81101561091b5780827f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8e8e8581811061088157634e487b7160e01b600052603260045260246000fd5b90506020020160208101906108969190611298565b8d8d868181106108b657634e487b7160e01b600052603260045260246000fd5b905060200201358c8c878181106108dd57634e487b7160e01b600052603260045260246000fd5b90506020028101906108ef919061185c565b8c8b604051610903969594939291906116ba565b60405180910390a36109148161191f565b9050610836565b505050505050505050505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b600088888888888888886040516020016109739897969594939291906116f7565b60405160208183030381529060405280519060200120905098975050505050505050565b6000805160206119518339815191526109af81610bde565b6109b8826106c6565b610a1e5760405162461bcd60e51b815260206004820152603160248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e2063616044820152701b9b9bdd0818994818d85b98d95b1b1959607a1b60648201526084016106af565b6000828152600160205260408082208290555183917fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb7091a25050565b600082815260208190526040902060010154610a7581610bde565b6106258383610fab565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63610aab816000610929565b610ab957610ab98133610cda565b878614610ad85760405162461bcd60e51b81526004016106af906117cf565b878414610af75760405162461bcd60e51b81526004016106af906117cf565b6000610b098a8a8a8a8a8a8a8a610952565b9050610b158185610d3e565b60005b89811015610bc857610bb882828d8d85818110610b4557634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610b5a9190611298565b8c8c86818110610b7a57634e487b7160e01b600052603260045260246000fd5b905060200201358b8b87818110610ba157634e487b7160e01b600052603260045260246000fd5b9050602002810190610bb3919061185c565b610dda565b610bc18161191f565b9050610b18565b50610bd281610eee565b50505050505050505050565b610be88133610cda565b50565b610bf48261062a565b15610c595760405162461bcd60e51b815260206004820152602f60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20616c60448201526e1c9958591e481cd8da19591d5b1959608a1b60648201526084016106af565b600254811015610cba5760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a20696e73756666696369656e746044820152652064656c617960d01b60648201526084016106af565b610cc481426118a1565b6000928352600160205260409092209190915550565b610ce48282610929565b6106c257610cfc816001600160a01b03166014611010565b610d07836020611010565b604051602001610d18929190611613565b60408051601f198184030181529082905262461bcd60e51b82526106af9160040161179c565b610d47826105da565b610d635760405162461bcd60e51b81526004016106af90611812565b801580610d7f5750600081815260016020819052604090912054145b6106c25760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a206d697373696e6720646570656044820152656e64656e637960d01b60648201526084016106af565b6000846001600160a01b0316848484604051610df7929190611603565b60006040518083038185875af1925050503d8060008114610e34576040519150601f19603f3d011682016040523d82523d6000602084013e610e39565b606091505b5050905080610ea65760405162461bcd60e51b815260206004820152603360248201527f54696d656c6f636b436f6e74726f6c6c65723a20756e6465726c79696e6720746044820152721c985b9cd858dd1a5bdb881c995d995c9d1959606a1b60648201526084016106af565b85877fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b5887878787604051610edd9493929190611688565b60405180910390a350505050505050565b610ef7816105da565b610f135760405162461bcd60e51b81526004016106af90611812565b600090815260016020819052604090912055565b610f318282610929565b6106c2576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610f673390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610fb58282610929565b156106c2576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6060600061101f8360026118b9565b61102a9060026118a1565b67ffffffffffffffff81111561105057634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561107a576020820181803683370190505b509050600360fc1b816000815181106110a357634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106110e057634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060006111048460026118b9565b61110f9060016118a1565b90505b60018111156111a3576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061115157634e487b7160e01b600052603260045260246000fd5b1a60f81b82828151811061117557634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c9361119c81611908565b9050611112565b5083156105f95760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016106af565b80356001600160a01b038116811461120957600080fd5b919050565b60008083601f84011261121f578182fd5b50813567ffffffffffffffff811115611236578182fd5b6020830191508360208260051b850101111561125157600080fd5b9250929050565b60008083601f840112611269578182fd5b50813567ffffffffffffffff811115611280578182fd5b60208301915083602082850101111561125157600080fd5b6000602082840312156112a9578081fd5b6105f9826111f2565b60008060008060008060a087890312156112ca578182fd5b6112d3876111f2565b955060208701359450604087013567ffffffffffffffff8111156112f5578283fd5b61130189828a01611258565b979a9699509760608101359660809091013595509350505050565b600080600080600080600060c0888a031215611336578081fd5b61133f886111f2565b965060208801359550604088013567ffffffffffffffff811115611361578182fd5b61136d8a828b01611258565b989b979a50986060810135976080820135975060a09091013595509350505050565b60008060008060008060008060a0898b0312156113aa578081fd5b883567ffffffffffffffff808211156113c1578283fd5b6113cd8c838d0161120e565b909a50985060208b01359150808211156113e5578283fd5b6113f18c838d0161120e565b909850965060408b0135915080821115611409578283fd5b506114168b828c0161120e565b999c989b509699959896976060870135966080013595509350505050565b600080600080600080600080600060c08a8c031215611451578081fd5b893567ffffffffffffffff80821115611468578283fd5b6114748d838e0161120e565b909b50995060208c013591508082111561148c578283fd5b6114988d838e0161120e565b909950975060408c01359150808211156114b0578283fd5b506114bd8c828d0161120e565b9a9d999c50979a969997986060880135976080810135975060a0013595509350505050565b6000602082840312156114f3578081fd5b5035919050565b6000806040838503121561150c578182fd5b8235915061151c602084016111f2565b90509250929050565b600060208284031215611536578081fd5b81356001600160e01b0319811681146105f9578182fd5b81835260006020808501808196508560051b8101915084845b878110156115cd5782840389528135601e19883603018112611586578687fd5b8701803567ffffffffffffffff81111561159e578788fd5b8036038913156115ac578788fd5b6115b986828985016115da565b9a87019a9550505090840190600101611566565b5091979650505050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b8183823760009101908152919050565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161164b8160178501602088016118d8565b7001034b99036b4b9b9b4b733903937b6329607d1b601791840191820152835161167c8160288401602088016118d8565b01602801949350505050565b60018060a01b03851681528360208201526060604082015260006116b06060830184866115da565b9695505050505050565b60018060a01b038716815285602082015260a0604082015260006116e260a0830186886115da565b60608301949094525060800152949350505050565b60a0808252810188905260008960c08301825b8b811015611738576001600160a01b03611723846111f2565b1682526020928301929091019060010161170a565b5083810360208501528881526001600160fb1b03891115611757578283fd5b8860051b9150818a6020830137016020818101838152848303909101604085015261178381888a61154d565b6060850196909652505050608001529695505050505050565b60208152600082518060208401526117bb8160408501602087016118d8565b601f01601f19169190910160400192915050565b60208082526023908201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d616040820152620e8c6d60eb1b606082015260800190565b6020808252602a908201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e206973604082015269206e6f7420726561647960b01b606082015260800190565b6000808335601e19843603018112611872578283fd5b83018035915067ffffffffffffffff82111561188c578283fd5b60200191503681900382131561125157600080fd5b600082198211156118b4576118b461193a565b500190565b60008160001904831182151516156118d3576118d361193a565b500290565b60005b838110156118f35781810151838201526020016118db565b83811115611902576000848401525b50505050565b6000816119175761191761193a565b506000190190565b60006000198214156119335761193361193a565b5060010190565b634e487b7160e01b600052601160045260246000fdfeb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1a264697066735822122020e7433df42eee6987b355a304706f7fadf46613ae4e2d212aabb94e83dd382c64736f6c634300080400335f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca5b09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1d8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63";

type TimelockControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimelockControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TimelockController__factory extends ContractFactory {
  constructor(...args: TimelockControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    minDelay: PromiseOrValue<BigNumberish>,
    proposers: PromiseOrValue<string>[],
    executors: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TimelockController> {
    return super.deploy(
      minDelay,
      proposers,
      executors,
      overrides || {}
    ) as Promise<TimelockController>;
  }
  override getDeployTransaction(
    minDelay: PromiseOrValue<BigNumberish>,
    proposers: PromiseOrValue<string>[],
    executors: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      minDelay,
      proposers,
      executors,
      overrides || {}
    );
  }
  override attach(address: string): TimelockController {
    return super.attach(address) as TimelockController;
  }
  override connect(signer: Signer): TimelockController__factory {
    return super.connect(signer) as TimelockController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimelockControllerInterface {
    return new utils.Interface(_abi) as TimelockControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TimelockController {
    return new Contract(address, _abi, signerOrProvider) as TimelockController;
  }
}
