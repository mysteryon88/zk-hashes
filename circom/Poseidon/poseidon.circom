pragma circom 2.1.8;

include "../node_modules/circomlib/circuits/poseidon.circom";

// non-linear constraints: 213
template poseidon() {
	signal input value;
    signal output hashedValue;

    component hasher = Poseidon(1);
    hasher.inputs[0] <== value;
    hashedValue <== hasher.out;
}

component main = poseidon();
