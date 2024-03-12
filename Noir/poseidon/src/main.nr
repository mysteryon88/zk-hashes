use dep::std;

// 578 - input: [Field; 1]
// 2168 - input: [Field; 2]
// 2283 - input: [Field; 3]
// 2754 - input: [Field; 4]
// 3941 - input: [Field; 8]
// 7054 - input: [Field; 16] - max
fn main(input: [Field; 2]) {  
	let hash1 = std::hash::poseidon::bn254::hash_2(input);  
	assert(hash1 == 0x115cc0f5e7d690413df64c6b9662e9cf2a3617f2743245519e19607a4417189a);  
}

#[test]
fn test_main() {
    main([1, 2]);
}
