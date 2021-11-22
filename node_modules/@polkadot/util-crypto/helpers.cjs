"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAsHex = createAsHex;
exports.createBitHasher = createBitHasher;
exports.isWasmOnly = isWasmOnly;

var _util = require("@polkadot/util");

var _wasmCrypto = require("@polkadot/wasm-crypto");

// Copyright 2017-2021 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createAsHex(fn) {
  return function () {
    return (0, _util.u8aToHex)(fn(...arguments));
  };
}

function createBitHasher(bitLength, fn) {
  return (data, onlyJs) => fn(data, bitLength, onlyJs);
}

function isWasmOnly(onlyJs) {
  return (0, _wasmCrypto.isReady)() && !onlyJs;
}