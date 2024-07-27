// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AuthContract {
    
    struct User {
        string username;
        string email;
        bytes32 hashedPassword;
    }

    mapping(string => User) private users;

    function register(string memory _username,string memory _email, string memory _password) public returns (string memory) {
        if( keccak256(abi.encodePacked(users[_username].username))  != keccak256(abi.encodePacked("")))
        {
            return "User already exists";
        }
        bytes32 hashedPassword = keccak256(abi.encodePacked(_password));
        users[_username] = User(_username,_email,hashedPassword);
        return "true";
    }

    function login(string memory _username, string memory _password) public view returns (string memory) {
        if(keccak256(abi.encodePacked(users[_username].username)) == keccak256(abi.encodePacked(""))) return "Account does not exists";
        User memory user = users[_username];        
        if(user.hashedPassword == keccak256(abi.encodePacked(_password)))
        {
            return "true";
        }
        else
        {
            return "Invalid Password";
        }
    }

}