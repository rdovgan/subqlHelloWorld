"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keccakAsHex = exports.keccak512AsU8a = exports.keccak256AsU8a = void 0;
exports.keccakAsU8a = keccakAsU8a;

var _jsSha = _interopRequireDefault(require("js-sha3"));

var _util = require("@polkadot/util");

var _wasmCrypto = require("@polkadot/wasm-crypto");

var _helpers = require("../helpers.cjs");

// Copyright 2017-2021 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name keccakAsU8a
 * @summary Creates a keccak Uint8Array from the input.
 * @description
 * From either a `string` or a `Buffer` input, create the keccak and return the result as a `Uint8Array`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { keccakAsU8a } from '@polkadot/util-crypto';
 *
 * keccakAsU8a('123'); // => Uint8Array
 * ```
 */
function keccakAsU8a(value) {
  let bitLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 256;
  let onlyJs = arguments.length > 2 ? arguments[2] : undefined;
  const is256 = bitLength === 256;
  const u8a = (0, _util.u8aToU8a)(value);
  return (0, _helpers.isWasmOnly)(onlyJs) ? is256 ? (0, _wasmCrypto.keccak256)(u8a) : (0, _wasmCrypto.keccak512)(u8a) : new Uint8Array(is256 ? _jsSha.default.keccak256.update(u8a).arrayBuffer() : _jsSha.default.keccak512.update(u8a).arrayBuffer());
}
/**
 * @name keccak256AsU8a
 * @description Creates a keccak256 Uint8Array from the input.
 */


const keccak256AsU8a = (0, _helpers.createBitHasher)(256, keccakAsU8a);
/**
 * @name keccak512AsU8a
 * @description Creates a keccak512 Uint8Array from the input.
 */

exports.keccak256AsU8a = keccak256AsU8a;
const keccak512AsU8a = (0, _helpers.createBitHasher)(512, keccakAsU8a);
/**
 * @name keccakAsHex
 * @description Creates a keccak hex string from the input.
 */

exports.keccak512AsU8a = keccak512AsU8a;
const keccakAsHex = (0, _helpers.createAsHex)(keccakAsU8a);
exports.keccakAsHex = keccakAsHex;