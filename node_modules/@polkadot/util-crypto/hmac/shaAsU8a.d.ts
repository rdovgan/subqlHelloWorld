declare type HashFn = (key: Uint8Array | string, data: Uint8Array, onlyJs?: boolean) => Uint8Array;
export declare function hmacShaAsU8a(key: Uint8Array | string, data: Uint8Array, bitLength?: 256 | 512, onlyJs?: boolean): Uint8Array;
export declare const hmacSha256AsU8a: HashFn;
export declare const hmacSha512AsU8a: HashFn;
export {};
