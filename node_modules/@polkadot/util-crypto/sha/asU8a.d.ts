/// <reference types="node" />
import type { HexString } from '@polkadot/util/types';
/**
 * @name shaAsU8a
 * @summary Creates a sha Uint8Array from the input.
 */
export declare function shaAsU8a(value: HexString | Buffer | Uint8Array | string, bitLength?: 256 | 512, onlyJs?: boolean): Uint8Array;
export declare const sha256AsU8a: (data: string | Buffer | Uint8Array, onlyJs?: boolean | undefined) => Uint8Array;
export declare const sha512AsU8a: (data: string | Buffer | Uint8Array, onlyJs?: boolean | undefined) => Uint8Array;
