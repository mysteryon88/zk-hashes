use dep::std;

// 18774 - input: [u8; 1]
// 18804 - input: [u8; 10]
// 20244 - input: [u8; 128]
// 29988 - input: [u8; 527]
// 39732 - input: [u8; 1000]
// 108085 - input: [u8; 3100]
fn main(input: [u8; 3100]) -> pub [u8; 32] {
    let hash = std::hash::blake3(input);
    hash
}
