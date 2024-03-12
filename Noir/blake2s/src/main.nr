use dep::std;

// 19380 - input: [u8; 10]
// 21444 - input: [u8; 100]
// 49668 - input: [u8; 1000]
fn main(input: [u8; 1000], _hash: [u8; 32]) {  
	let hash = std::hash::blake2s(input); 
    assert(hash == _hash);
}
