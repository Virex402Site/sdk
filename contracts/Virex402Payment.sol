// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Virex402Payment {

    address public owner;

    event PaymentReceived(
        address indexed agent,
        uint256 amount,
        string service
    );

    constructor() {
        owner = msg.sender;
    }

    function payForService(string memory service) public payable {

        require(msg.value > 0, "Payment required");

        emit PaymentReceived(msg.sender, msg.value, service);

    }

    function withdraw() public {

        require(msg.sender == owner, "Not owner");

        payable(owner).transfer(address(this).balance);

    }

}
