// Address = 0x2d981D33fE07922027F600B0B588a95e8494E528
export const abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_content",
        type: "string",
      },
    ],
    name: "createPost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_postId",
        type: "uint256",
      },
    ],
    name: "dislikePost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_postId",
        type: "uint256",
      },
    ],
    name: "likePost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "postId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "author",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "content",
        type: "string",
      },
    ],
    name: "PostCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "postId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "reactor",
        type: "address",
      },
    ],
    name: "PostDisliked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "postId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "reactor",
        type: "address",
      },
    ],
    name: "PostLiked",
    type: "event",
  },
  {
    inputs: [],
    name: "getAllPosts",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "author",
            type: "address",
          },
          {
            internalType: "string",
            name: "content",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "likes",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dislikes",
            type: "uint256",
          },
        ],
        internalType: "struct PostSystem.Post[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_postId",
        type: "uint256",
      },
    ],
    name: "getPost",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "author",
            type: "address",
          },
          {
            internalType: "string",
            name: "content",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "likes",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dislikes",
            type: "uint256",
          },
        ],
        internalType: "struct PostSystem.Post",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getUserPosts",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
