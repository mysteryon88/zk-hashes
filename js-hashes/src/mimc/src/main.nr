use dep::std;

fn main(input: [Field; 1]) -> pub Field {
    let hash = std::hash::mimc::mimc_bn254(input);
    hash
}
