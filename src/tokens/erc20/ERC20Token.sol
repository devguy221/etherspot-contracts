pragma solidity 0.5.15;

import "../../shared/SafeMathLib.sol";


/**
 * @title ERC20Token
 */
contract ERC20Token {
  using SafeMathLib for uint256;

  uint256 public totalSupply;

  mapping(address => uint256) private balances;
  mapping(address => mapping(address => uint256)) private allowances;

  // events

  event Transfer(
    address indexed from,
    address indexed to,
    uint256 value
  );

  event Approval(
    address indexed owner,
    address indexed spender,
    uint256 value
  );

  /**
   * @dev internal constructor
   */
  constructor() internal {}

  // external functions

  function transfer(
    address to,
    uint256 value
  )
    external
    returns (bool)
  {
    internallyTransfer(msg.sender, to, value);

    return true;
  }

  function transferFrom(
    address from,
    address to,
    uint256 value
  )
    external
    returns (bool)
  {
    internallyTransfer(from, to, value);
    internallyApprove(from, msg.sender, allowances[from][msg.sender].sub(value));

    return true;
  }

  function approve(
    address spender,
    uint256 value
  )
    external
    returns (bool)
  {
    internallyApprove(msg.sender, spender, value);

    return true;
  }

  // external functions (views)

  function balanceOf(
    address owner
  )
    external
    view
    returns (uint256)
  {
    return balances[owner];
  }

  function allowance(
    address owner,
    address spender
  )
    external
    view
    returns (uint256)
  {
    return allowances[owner][spender];
  }

  // internal functions

  function internallyTransfer(
    address from,
    address to,
    uint256 value
  )
    internal
  {
    require(
      from != address(0)
    );
    require(
      to != address(0)
    );

    balances[from] = balances[from].sub(value);
    balances[to] = balances[to].add(value);

    emit Transfer(from, to, value);
  }

  function internallyApprove(
    address owner,
    address spender,
    uint256 value
  )
    internal
  {
    require(
      owner != address(0)
    );
    require(
      spender != address(0)
    );

    allowances[owner][spender] = value;

    emit Approval(owner, spender, value);
  }

  function internallyMint(
    address owner,
    uint256 value
  )
    internal
  {
    require(
      owner != address(0)
    );

    balances[owner] = balances[owner].add(value);
    totalSupply = totalSupply.add(value);

    emit Transfer(address(0), owner, value);
  }

  function internallyBurn(
    address owner,
    uint256 value
  )
    internal
  {
    require(
      owner != address(0)
    );

    balances[owner] = balances[owner].sub(value);
    totalSupply = totalSupply.sub(value);

    emit Transfer(owner, address(0), value);
  }
}