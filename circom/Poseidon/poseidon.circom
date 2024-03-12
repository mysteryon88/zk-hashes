pragma circom 2.1.8;

include "../node_modules/circomlib/circuits/poseidon.circom";

// non-linear constraints: 213 - Poseidon(1)
// non-linear constraints: 609 - Poseidon(16) - max
template poseidon() {
	signal input value;
    signal output hashedValue;

    component hasher = Poseidon(1);

    for (var i = 0; i < 1; i++) {
        hasher.inputs[i] <== value;
    }
    hashedValue <== hasher.out;
}

component main = poseidon();
