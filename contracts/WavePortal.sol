// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    mapping (address => uint256) public friends;

    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }

    function wave() public {
        totalWaves += 1;
        friends[msg.sender] += 1;
        console.log("%s has waved!", msg.sender);

    }

    function getTotalWaves() public view returns(uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }

    function getMyWaves() public view {
        console.log("%s waved %d times", msg.sender, friends[msg.sender]);
    }

}