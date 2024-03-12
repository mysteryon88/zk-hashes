
pragma circom 2.1.8;

include "../node_modules/circomlib/circuits/pedersen_old.circom";

// linear constraints: 1 - Pedersen(1)
// non-linear constraints: 1 - Pedersen(2)
// non-linear constraints: 4 - Pedersen(3)
// non-linear constraints: 25 - Pedersen(10)
// non-linear constraints: 738 - Pedersen(248)
template pedersen() {
	signal input value;
    signal output hashedValue[2];

    // in bits
    component hasher = Pedersen(248);

    for (var i = 0; i < 248; i++) {
        hasher.in[i] <== value;
    }


    hashedValue[0] <== hasher.out[0];
    hashedValue[1] <== hasher.out[1];

}

component main = pedersen();
