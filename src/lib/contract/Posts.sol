// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract PostSystem {
    struct Post {
        uint id;
        address author;
        string content;
        uint likes;
        uint dislikes;
    }

    // Post ID tracker
    uint private postCounter;

    // Mapping of post ID to Post struct
    mapping(uint => Post) private posts;

    // Mapping of user address to their post IDs
    mapping(address => uint[]) private userPosts;

    // Mapping to track user reactions to posts (1 for like, -1 for dislike, 0 for no reaction)
    mapping(uint => mapping(address => int8)) private userReactions;

    event PostCreated(uint postId, address author, string content);
    event PostLiked(uint postId, address reactor);
    event PostDisliked(uint postId, address reactor);

    // Function to create a post
    function createPost(string memory _content) external {
        require(bytes(_content).length > 0, "Content cannot be empty.");
        require(bytes(_content).length <= 500, "Content exceeds 500 characters.");

        postCounter++;
        posts[postCounter] = Post(postCounter, msg.sender, _content, 0, 0);
        userPosts[msg.sender].push(postCounter);

        emit PostCreated(postCounter, msg.sender, _content);
    }

    // Function to like a post
    function likePost(uint _postId) external {
        require(_postId > 0 && _postId <= postCounter, "Invalid post ID.");
        require(userReactions[_postId][msg.sender] == 0, "You have already reacted to this post.");

        posts[_postId].likes++;
        userReactions[_postId][msg.sender] = 1;

        emit PostLiked(_postId, msg.sender);
    }

    // Function to dislike a post
    function dislikePost(uint _postId) external {
        require(_postId > 0 && _postId <= postCounter, "Invalid post ID.");
        require(userReactions[_postId][msg.sender] == 0, "You have already reacted to this post.");

        posts[_postId].dislikes++;
        userReactions[_postId][msg.sender] = -1;

        emit PostDisliked(_postId, msg.sender);
    }

    // Get details of a specific post
    function getPost(uint _postId) external view returns (Post memory) {
        require(_postId > 0 && _postId <= postCounter, "Invalid post ID.");
        return posts[_postId];
    }

    // Get all posts created by a user
    function getUserPosts(address _user) external view returns (uint[] memory) {
        return userPosts[_user];
    }

    // Get all posts with their author addresses, likes, and dislikes
    function getAllPosts() external view returns (Post[] memory) {
        Post[] memory allPosts = new Post[](postCounter);

        for (uint i = 1; i <= postCounter; i++) {
            allPosts[i - 1] = posts[i];
        }

        return allPosts;
    }
}
