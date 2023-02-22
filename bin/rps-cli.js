#!/usr/bin/env node

import minimist from "minimist";
import rps from "../lib/rps.js";

const args = minimist(process.argv.slice(2));

const help = `Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)

  -h, --help      display this help message and exit
  -r, --rules     display the rules and exit

Examples:
  node-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win"}`;

if (args.h || args.help) {
    console.log(help);
    process.exit(1);
}

if (args.r || args.rules) {
    console.log(`Rules for Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`);
    process.exit(1);
}

const arr = args._

if (arr.length != 0) {
    let choice = arr[0].toLocaleLowerCase();
    if (["rock", "paper", "scissors"].includes(choice)) {
        console.log(rps(choice));
    } else {
        console.log(help);
        process.exit(0);
    }
} else {
    console.log(rps());
}
