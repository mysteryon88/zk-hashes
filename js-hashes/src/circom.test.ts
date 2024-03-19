import {
  MiMC7,
  MiMCSponge,
  Pedersen,
  PoseidonHash,
  PoseidonOpt,
  PoseidonRef,
} from "./circom";

describe("Circom", () => {
  describe("MiMC", () => {
    let mimc7: MiMC7;
    let mimcSponge: MiMCSponge;

    beforeEach(async () => {
      mimc7 = new MiMC7();
      await mimc7.init();
      mimcSponge = new MiMCSponge();
      await mimcSponge.init();
    });

    test("Hash MiMC7", async () => {
      const x = 1;
      const hash = mimc7.hash(x, x);
    });

    test("MultiHash MiMC7", async () => {
      const x = 1;
      const hash = mimc7.multiHash([x], 1);
    });

    test("Hash MiMCSponge", async () => {
      const x = 1;
      const hash = mimcSponge.hash(x, x, 0);
    });

    test("MultiHash MiMCSponge", async () => {
      const x = [1, 2];
      const hash = mimcSponge.multiHash(x);
      const expectedHash =
        "19814528709687996974327303300007262407299502847885145507292406548098437687919";
      expect(hash).toEqual(expectedHash);
    });
  });

  describe("Pedersen", () => {
    let pedersen: Pedersen;

    beforeEach(async () => {
      pedersen = new Pedersen();
      await pedersen.init();
    });

    test("Default", async () => {
      const x = [1, 2];
      const uint8 = new Uint8Array(x);
      const hash = pedersen.hash(uint8);
    });
  });

  describe("Poseidon Hash", () => {
    describe("Poseidon Hash", () => {
      let poseidon: PoseidonHash;

      beforeEach(async () => {
        poseidon = new PoseidonHash();
        await poseidon.init();
      });

      test("test", async () => {
        let x = [1];
        let hash = poseidon.hash(x);
        let expectedHash =
          "18586133768512220936620570745912940619677854269274689475585506675881198879027";
        expect(hash).toEqual(expectedHash);

        x = [1, 2];
        hash = poseidon.hash(x);
        expectedHash =
          "7853200120776062878684798364095072458815029376092732009249414926327459813530";
        expect(hash).toEqual(expectedHash);
      });
    });

    describe("PoseidonOpt Hash", () => {
      let poseidonOpt: PoseidonOpt;

      beforeEach(async () => {
        poseidonOpt = new PoseidonOpt();
        await poseidonOpt.init();
      });

      test("test", async () => {
        let x = [1];
        let hash = poseidonOpt.hash(x);
        let expectedHash =
          "18586133768512220936620570745912940619677854269274689475585506675881198879027";
        expect(hash).toEqual(expectedHash);

        x = [1, 2];
        hash = poseidonOpt.hash(x);
        expectedHash =
          "7853200120776062878684798364095072458815029376092732009249414926327459813530";
        expect(hash).toEqual(expectedHash);
      });
    });

    describe("PoseidonRef Hash", () => {
      let poseidonRef: PoseidonRef;

      beforeEach(async () => {
        poseidonRef = new PoseidonRef();
        await poseidonRef.init();
      });

      test("test", async () => {
        let x = [1];
        let hash = poseidonRef.hash(x);
        let expectedHash =
          "18586133768512220936620570745912940619677854269274689475585506675881198879027";
        expect(hash).toEqual(expectedHash);

        x = [1, 2];
        hash = poseidonRef.hash(x);
        expectedHash =
          "7853200120776062878684798364095072458815029376092732009249414926327459813530";
        expect(hash).toEqual(expectedHash);
      });
    });
  });
});
