pragma circom 2.1.8;

include "vocdoni-keccak/keccak.circom";
include "../node_modules/circomlib/circuits/bitify.circom";

// non-linear constraints: 151104 - 1
// non-linear constraints: 301952 - 2
// non-linear constraints: 2413824 - 16
template KeccakN(N) {
    signal input a;
    signal keccak_in[256];
    signal keccak_out[256];
    signal output out;

    component toNBits = Num2Bits(256);
    component fromNBits = Bits2Num(256);
    
    // need to build N keccak circuits to perform N-times hashing
    component keccak[N];

    toNBits.in <== a;
    
    var i;
    keccak[0] = Keccak(256,256);
    for (i=0; i<256; i++) {
        keccak[0].in[i] <== toNBits.out[i];
    }
    
    var j;
    for (j=1; j<N; j++) {  
        keccak[j] = Keccak(256,256); 
        for (i=0; i<256; i++) {
            keccak[j].in[i] <== keccak[j-1].out[i];
        }
    }
    
    for (i=0; i<256; i++) {
        fromNBits.in[i] <== keccak[j-1].out[i];
    }
    out <== fromNBits.out;
}

component main = KeccakN(16); 