use dep::std;

// 19380 - input: [u8; 10]
// 19428 - input: [u8; 31]
// 21444 - input: [u8; 100]
// 27492 - input: [u8; 310]
// 35556 - input: [u8; 527]
// 49668 - input: [u8; 1000]
// 151269 - input: [u8; 3100]
fn main(input: [u8; 3100], _hash: [u8; 32]) {
    let hash = std::hash::blake2s(input);
    assert(hash == _hash);
}
