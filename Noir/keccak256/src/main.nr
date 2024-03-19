use dep::std;

// 54830 - x: [u8; 1]
// 54830 - x: [u8; 128]
// 69142 - x: [u8; 256]
// 155014 - x: [u8; 1024]
// 303017 - x: [u8; 2048]
fn main(x: Field, result: [u8; 32]) {
    // We use the `as` keyword here to denote the fact that we want to take just the first byte from the x Field
    let digest = std::hash::keccak256([x as u8], 1);
    assert(digest == result);
    //  --- variable message size ---
    // let message_size = 4;
    // let hash_a = std::hash::keccak256([1, 2, 3, 4], message_size);
    // let hash_b = std::hash::keccak256([1, 2, 3, 4, 0, 0, 0, 0], message_size);
    // assert(hash_a == hash_b);
    // let message_size_big = 8;
    // let hash_c = std::hash::keccak256([1, 2, 3, 4, 0, 0, 0, 0], message_size_big);
    // assert(hash_a != hash_c);
}
