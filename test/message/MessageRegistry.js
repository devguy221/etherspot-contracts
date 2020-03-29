/* eslint-env node, mocha */

const expect = require('expect');
const {
  logGasUsed,
  parseBlockNumber,
  randomAddress,
  randomBytes32,
} = require('../utils');

const MessageRegistry = artifacts.require('MessageRegistry');

contract('MessageRegistry', (addresses) => {
  const sender = addresses[0];
  let messageRegistry;

  before(async () => {
    messageRegistry = await MessageRegistry.new();
  });

  context('views', () => {
    const messageHash = randomBytes32();
    let messageHashBlockNumber;

    before(async () => {
      messageHashBlockNumber = parseBlockNumber(await messageRegistry.addMessageHash(messageHash));
    });

    describe('verifySenderMessageHashAtBlock()', () => {
      it('expect to return true on correct sender', async () => {
        await expect(messageRegistry.verifySenderMessageHashAtBlock(
          sender,
          messageHash,
          0,
        )).resolves.toBeTruthy();
      });

      it('expect to return true on correct block number', async () => {
        await expect(messageRegistry.verifySenderMessageHashAtBlock(
          sender,
          messageHash,
          messageHashBlockNumber - 1,
        )).resolves.toBeTruthy();
      });

      it('expect to return false on wrong sender', async () => {
        await expect(messageRegistry.verifySenderMessageHashAtBlock(
          randomAddress(),
          messageHash,
          0,
        )).resolves.toBeFalsy();
      });

      it('expect to return false on wrong block number', async () => {
        await expect(messageRegistry.verifySenderMessageHashAtBlock(
          randomAddress(),
          messageHash,
          messageHashBlockNumber,
        )).resolves.toBeFalsy();
      });
    });
  });

  context('methods', () => {
    const messageHash = randomBytes32();

    describe('addMessageHash()', () => {
      it('expect to add message hash', async () => {
        const output = await messageRegistry.addMessageHash(messageHash);

        logGasUsed(output);

        const { logs: [log] } = output;

        expect(log.event).toBe('MessageHashAdded');
        expect(log.args.sender).toBe(sender);
        expect(log.args.messageHash).toBe(messageHash);
      });
    });

    describe('removeMessageHash()', () => {
      it('expect to remove message hash', async () => {
        const output = await messageRegistry.removeMessageHash(messageHash);

        logGasUsed(output);

        const { logs: [log] } = output;

        expect(log.event).toBe('MessageHashRemoved');
        expect(log.args.sender).toBe(sender);
        expect(log.args.messageHash).toBe(messageHash);
      });
    });
  });
});
