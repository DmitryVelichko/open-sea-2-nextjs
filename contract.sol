pragma solidity ^0.4.24;

contract MyContract {
    string value;

    function get() public view returns(string) {
        return value;
    }
}