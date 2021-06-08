require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remember evil hover process obscure swarm'; 
let testAccounts = [
"0x06fa5042afa6875422b6a4966fb27bd33dd08a4703bbba7b35fd5e0f008f458c",
"0xf5abdc19794f4526f96d500c13029fbacda1ee51983f8d44a8518c6e0c76b6b4",
"0x779511aa6e9c1c6e4042b8b7d568e1156744ab4dff066e9ab5685fe188f90826",
"0x54b9ca6df7a6234eddf8774e9ee9067244305b53dec8aa99795fb79f4f691fb9",
"0x54df9ddcbac778b79cd551bc79d5e266b9441890e7f16be155f199d0dd1a1b89",
"0x66e66036d1b29ac89767ba2f2b1a17011a1679be91a50a018be0177e47b700e6",
"0x9f17b6a13ac3d32a0167589f39682145cf78d764b35107b6ba0b81bf49eb7384",
"0xe67a7c8ce840cef1cb56d57d2b7e03b46742c39e25f5b401607a308dec78c728",
"0xb554f36a8c267b575c12998a9e54a7b876b1c67df3656cd3b53d0b971f5fbef0",
"0x26cba6b837fe27e82d7bea9858bf21b7316df15dfd4a2adca48dd21abdb8d1e3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

