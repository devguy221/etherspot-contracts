pragma solidity 0.5.12;

/**
 * @title SignatureValidator
 */
interface ISignatureValidator {
  function verifySignature(
    bytes32 _messageHash,
    bytes calldata _signature,
    address _signer
  ) external view returns (bool);
}
