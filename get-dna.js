const wget = require("node-wget-js");

const clutterLanguage = {
    targetDnaName: "clutter",
    dna: "https://github.com/artbrock/clutter/releases/download/v0.2.1/clutter.dna"
}

async function main() {
    url = clutterLanguage.dna;
    dest = `./${clutterLanguage.targetDnaName}.dna`;
    wget({ url, dest });
}

main();
