import 'jest-canvas-mock';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import '@testing-library/jest-dom';
import 'jest-styled-components';
import fetchMock from 'jest-fetch-mock';

const util = require('util');

global.TextEncoder = util.TextEncoder;
global.TextDecoder = util.TextDecoder;

fetchMock.enableMocks();
