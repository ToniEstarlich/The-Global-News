// jest.setup.js
import { TextEncoder, TextDecoder } from 'util';

// Make sure TextEncoder/Decoder are available in the testing environment
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
