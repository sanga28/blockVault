// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract ObjectStorage {
    struct ObjectLog {
        string objectName;
        uint256 timestamp;
    }

    mapping(uint256 => ObjectLog) public logs;
    uint256 public logCount = 1; 

    event ObjectStored(string objectName, uint256 timestamp);

    constructor() {
        logCount = 1;  
        emit ObjectStored("Contract Initialized", block.timestamp);
    }

    function storeObject(string memory objectName) public {
        logCount++;
        logs[logCount] = ObjectLog({objectName: objectName, timestamp: block.timestamp});
        emit ObjectStored(objectName, block.timestamp);
    }

    function getObject(uint256 logId) public view returns (string memory, uint256) {
        require(logId > 0 && logId <= logCount, "Invalid log ID");
        ObjectLog memory log = logs[logId];
        return (log.objectName, log.timestamp);
    }
}
