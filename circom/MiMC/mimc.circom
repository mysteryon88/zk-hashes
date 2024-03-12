pragma circom 2.1.8;

include "./node_modules/circomlib/circuits/mimcsponge.circom";

//non-linear constraints: 660
template mimcsponge() {
    signal input value;
    signal output hashedValue;
    
    component hasher = MiMCSponge(1, 220, 1);
    hasher.ins[0] <== value;
    hasher.k <== 0;

    hashedValue <== hasher.outs[0];
}

component main = mimcsponge();