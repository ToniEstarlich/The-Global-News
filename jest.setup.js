// jest.setup.js
import { TextEncoder, TextDecoder } from 'util';

// Make sure TextEncoder/Decoder are available in the testing environment
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

module.exports = {
    testTimeout: 10000, // Increase timeout globally to 10 seconds
  };
  
