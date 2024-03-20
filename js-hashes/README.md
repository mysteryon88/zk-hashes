# Examples of using js-realizations

Two libraries were taken:

1. circomlibjs
2. noir-js

## Benchmark for comparison

- [Keccak-256 (hex)](https://emn178.github.io/online-tools/keccak_256.html)
- [SHA256 (hex)](https://emn178.github.io/online-tools/sha256.html)
- [blake2s256 (text)](https://toolkitbay.com/tkb/tool/BLAKE2s_256)
- [ZK Hashes](https://zk-hashes.vercel.app/)
  - Poseidon
  - MiMCSponge

## Tests and Sources

- `circom.ts` - wrapper over the circomlibjs library
- `noir.ts` - feature testing of noir-js
- `noirMiMC.test.ts` - An example of using noir-js to compile a schema and compute a specific hash from the schema
- `/src/mimc` - hash calculation scheme

```sh
npm test
npm run testNoir
npm run testNoitNoBack
```
