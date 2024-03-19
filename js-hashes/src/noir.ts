import { sha256, keccak256, blake2s256 } from "@noir-lang/acvm_js";
import { toHexString } from "./utils";

// 0x31 = 49 = '1'
const uint8arr = new Uint8Array([0x31]);
console.log("sha256", toHexString(sha256(uint8arr)));
console.log("keccak256", toHexString(keccak256(uint8arr)));
console.log("blake2s256", toHexString(blake2s256(uint8arr)));
