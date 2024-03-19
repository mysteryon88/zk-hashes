import {
  BigNumberish,
  Mimc7,
  buildMimc7,
  MimcSponge,
  buildMimcSponge,
  PedersenHash,
  buildPedersenHash,
  Poseidon,
  buildPoseidon,
  buildPoseidonOpt,
  buildPoseidonReference,
} from "circomlibjs";

import { toHexString } from "./utils";

export class MiMC7 {
  private mimc7!: Mimc7;

  async init() {
    this.mimc7 = await buildMimc7();
  }

  hash(x: BigNumberish, k: BigNumberish): string {
    if (!this.mimc7) {
      console.error("MiMC7 not initialized. Call init() first.");
      return "";
    }

    const mimcHash = this.mimc7.hash(x, k);
    const hash = this.mimc7.F.toString(mimcHash);
    console.log("MiMC7 hash:", hash);
    return hash;
  }

  multiHash(x: BigNumberish[], k?: BigNumberish): string {
    if (!this.mimc7) {
      console.error("MiMC7 not initialized. Call init() first.");
      return "";
    }

    const mimcHash = this.mimc7.multiHash(x, k);
    const hash = this.mimc7.F.toString(mimcHash);
    console.log("MiMC7 multiHash:", hash);
    return hash;
  }
}

export class MiMCSponge {
  private mimcSponge!: MimcSponge;

  async init() {
    this.mimcSponge = await buildMimcSponge();
  }

  hash(xL_in: BigNumberish, xR_in: BigNumberish, k: BigNumberish): string {
    if (!this.mimcSponge) {
      console.error("MimcSponge not initialized. Call init() first.");
      return "";
    }

    const mimcHash = this.mimcSponge.hash(xL_in, xR_in, k);
    const hash = this.mimcSponge.F.toString(mimcHash);
    console.log("MimcSponge hash:", hash);
    return hash;
  }

  multiHash(x: BigNumberish[], k?: BigNumberish, numOutputs?: number): string {
    if (!this.mimcSponge) {
      console.error("MiMCSponge not initialized. Call init() first.");
      return "";
    }

    const mimcHash = this.mimcSponge.multiHash(x, k, numOutputs);
    const hash = this.mimcSponge.F.toString(mimcHash);
    console.log("MimcSponge multiHash:", hash);
    return hash;
  }
}

export class Pedersen {
  private pedersen!: PedersenHash;

  async init() {
    this.pedersen = await buildPedersenHash();
  }

  // default
  hash(msg: Uint8Array): Uint8Array {
    if (!this.pedersen) {
      console.error("MimcSponge not initialized. Call init() first.");
      return new Uint8Array();
    }

    const hash = this.pedersen.hash(msg);
    console.log("Pedersen default hash:", hash);

    const hexString = toHexString(hash);
    console.log("Pedersen default hash in hex:", hexString);
    return hash;
  }
}

export class PoseidonHash {
  private poseidon!: Poseidon;

  async init() {
    this.poseidon = await buildPoseidon();
  }

  // max 16
  hash(msg: BigNumberish[]): string {
    if (!this.poseidon) {
      console.error("PoseidonHash not initialized. Call init() first.");
      return "";
    }

    const hash = this.poseidon(msg);
    const string = this.poseidon.F.toString(hash);
    console.log("Poseidon default hash:", string);

    return string;
  }
}

export class PoseidonOpt {
  private poseidonOpt!: Poseidon;

  async init() {
    this.poseidonOpt = await buildPoseidonOpt();
  }

  // max 16
  hash(msg: BigNumberish[]): string {
    if (!this.poseidonOpt) {
      console.error("PoseidonHash not initialized. Call init() first.");
      return "";
    }

    const hash = this.poseidonOpt(msg);
    const string = this.poseidonOpt.F.toString(hash);
    console.log("Poseidon opt hash:", string);

    return string;
  }
}

export class PoseidonRef {
  private poseidonRef!: Poseidon;

  async init() {
    this.poseidonRef = await buildPoseidonReference();
  }

  // max 16
  hash(msg: BigNumberish[]): string {
    if (!this.poseidonRef) {
      console.error("PoseidonHash not initialized. Call init() first.");
      return "";
    }

    const hash = this.poseidonRef(msg);
    const string = this.poseidonRef.F.toString(hash);
    console.log("Poseidon opt hash:", string);

    return string;
  }
}
