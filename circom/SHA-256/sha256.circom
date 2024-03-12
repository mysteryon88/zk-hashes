pragma circom 2.0.0;

include "./node_modules/circomlib/circuits/sha256/sha256_2.circom";

// non-linear constraints: 30134
template sha256() {
    signal input value;
    signal output hashedValue;

    component hasher = Sha256_2();

    hasher.a <== value;
    hasher.b <== value;
    hashedValue <== hasher.out;
}

component main = sha256();
