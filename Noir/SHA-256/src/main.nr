use dep::std;

// 38799 - x: [u8; 1]
// 38799 - x: [u8; 10]
// 41739 - x: [u8; 100]
fn main(x: [u8; 1], _hash: pub [u8; 32]) {
    let hash = std::hash::sha256(x);
    assert(hash == _hash);
}

#[test(should_fail)]
fn test_bad_main() {
    main(
        [1],
        [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32
    ]
    );
}

#[test]
fn test_good_main() {
    main([1], std::hash::sha256([1]));
}
