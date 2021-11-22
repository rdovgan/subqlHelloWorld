// Copyright 2017-2021 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import scryptsy from 'scryptsy';
import { bufferToU8a, u8aToBuffer, u8aToU8a } from '@polkadot/util';
import { scrypt } from '@polkadot/wasm-crypto';
import { isWasmOnly } from "../helpers.js";
import { randomAsU8a } from "../random/asU8a.js";
import { DEFAULT_PARAMS } from "./defaults.js";
export function scryptEncode(passphrase, salt = randomAsU8a(), params = DEFAULT_PARAMS, onlyJs) {
  const u8a = u8aToU8a(passphrase);
  const password = isWasmOnly(onlyJs) ? scrypt(u8a, salt, Math.log2(params.N), params.r, params.p) : bufferToU8a(scryptsy(u8aToBuffer(u8a), u8aToBuffer(salt), params.N, params.r, params.p, 64));
  return {
    params,
    password,
    salt
  };
}