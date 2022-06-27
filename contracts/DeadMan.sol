pragma solidity >=0.7.3;

contract DeadMan {
    //Setting up smartcontract owner
    address public owner = msg.sender;
    address payable public benficiary =
        payable(0xe4D9048Fda61b814D95Cb2846C4Ba05e0a608242);
    uint256 public block_no = block.number;
    uint256 public txn = 0;

    function still_alive() public {
        require(msg.sender == owner);
        require(block.number - block_no <= 10);
        block_no = block.number;
    }

    //Make a transaction 
    function make_txn() external {
        txn = txn + 1;
        if (block.number - block_no > 10) {
            //Transfer the value stored in contract
            benficiary.transfer(address(this).balance);
        }
    }

    //Make a transaction with amount
    function make_txn(uint256 _amount) external payable {
        txn = txn + 1;
        payable(address(this)).transfer(_amount);
        if (block.number - block_no > 10) {
            //Transfer the value stored in contract
            benficiary.transfer(address(this).balance);
        }
    }
}
