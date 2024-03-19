import { Noir } from "@noir-lang/noir_js";
import { BarretenbergBackend } from "@noir-lang/backend_barretenberg";
import { CompiledCircuit, ProofData } from "@noir-lang/types";
import { compile, createFileManager } from "@noir-lang/noir_wasm";

async function getCircuit(name: string) {
  const fm = createFileManager(name);
  const compiled = await compile(fm, name);
  if (!("program" in compiled)) {
    throw new Error("Compilation failed");
  }
  return compiled.program;
}

describe("MiMC", () => {
  let main: CompiledCircuit;
  beforeEach(async () => {
    main = await getCircuit("main");
  });

  test("test", async () => {});
});
