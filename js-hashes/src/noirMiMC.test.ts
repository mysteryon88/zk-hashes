import { Noir } from "@noir-lang/noir_js";
import { BarretenbergBackend } from "@noir-lang/backend_barretenberg";
import { CompiledCircuit } from "@noir-lang/types";
import { compile, createFileManager } from "@noir-lang/noir_wasm";
import { join, resolve } from "path";
import fs from "fs/promises";

async function getCircuit() {
  const basePath = resolve(join("./src/mimc"));
  const fm = createFileManager(basePath);
  const compiled = await compile(fm, basePath);
  if (!("program" in compiled)) {
    throw new Error("Compilation failed");
  }
  return compiled.program;
}

async function getCircuitFromFile(filePath: string): Promise<CompiledCircuit> {
  try {
    const data = await fs.readFile(filePath, "utf8");
    const json = JSON.parse(data);

    return json as CompiledCircuit;
  } catch (error) {
    throw new Error(`Failed to read or parse JSON file: ${error}`);
  }
}

describe("GetNoirMiMC", () => {
  let circuit: CompiledCircuit;
  let backend: BarretenbergBackend;
  let noir: Noir;

  afterEach(async () => {
    await backend.destroy();
  });

  test("test compile", async () => {
    circuit = await getCircuit();
    backend = new BarretenbergBackend(circuit, { threads: 8 });
    noir = new Noir(circuit, backend);

    const mainInput = { input: [1] };
    const { returnValue } = await noir.execute(mainInput);
    console.log(returnValue);
  });

  test("test precompile", async () => {
    const basePath = resolve(join("./src/mimc/target/mimc.json"));
    circuit = await getCircuitFromFile(basePath);
    backend = new BarretenbergBackend(circuit, { threads: 8 });
    noir = new Noir(circuit, backend);

    const mainInput = { input: [1] };
    const { returnValue } = await noir.execute(mainInput);
    console.log(returnValue);
  });
});
