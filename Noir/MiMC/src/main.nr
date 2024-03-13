use dep::std;

// 370 - input: [Field; 1]
// 5983 - input: [Field; 10]
// 40386 - input: [Field; 50]
// 90074 - input: [Field; 100] - long
fn main(input: [Field; 1], _hash: Field) {  
	let hash = std::hash::mimc::mimc_bn254(input);
    assert(hash == _hash);
}
