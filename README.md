# A research on hash functions in different zk-tools

## Circuit constraints

Due to differences in implementations, different numbers of arguments are passed, which affects the number of constraints to some extent. A more detailed breakdown can be seen in each file, here are approximate values.

| Hash function | Circom  | ZoKrates        | Noir   |
| ------------- | ------- | --------------- | ------ |
| Keccak        | 151 104 | 146 376         | 54 830 |
| MiMC7         | -       | 365             | 370    |
| MiMCSponge    | 660     | 568             | -      |
| Pedersen      | 438     | 4 958           | 28 742 |
| Pedersen old  | 738     | -               | -      |
| Poseidon      | 213     | 241             | 578    |
| SHA_256       | 30 134  | 25 774 - 48 886 | 41 739 |
| Blake2        | -       | 46 912          | 21 444 |
