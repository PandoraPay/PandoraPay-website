module.exports = {

    port: 8000,

    app: {
        name: "PandoraPay",
        title: "PandoraPay - Anonymous Decentralized P2P Exchange",
        version: "0.1",
        description: "World's First Anonymous Decentralized P2P Exchange",
        logo: "/public/assets/images/pandora-pay-logo",
        image: "/public/assets/images/pandora-cover-image",
        keywords: ["decentralized", "pandora pay", "zero"],

        wallet: "http://testnet.pandorapay.org/",
        explorer: "http://testnet.pandorapay.org/explorer",
    },

    consensus: [{
        address: "http://localhost:4000",
    }],

}
