#!/usr/bin/env node

const path = require('path');
const { extract } = require('../index');
const { blue, green, red } = require('kleur');
const { DEFAULT_CONFIG } = require('../params');

// Log a message when the script is run
console.log(
  `${blue(
    'integration-tools [INIT] '
  )} Extraction procedure starting...`
);

let config;

// Load configuration and log a message when done or on error.
try {
  config = require(path.join(process.cwd(), process.argv[2]));
  console.log(
    `${green(
      'integration-tools [DONE] '
    )} Extraction procedure has loaded the configuration file.`
  );
} catch (err) {
  console.log(`${red('integration-tools [ERRR]  ')} Extraction prodecure has encountered an error while loading the configuration file: ${err}`);
  process.exit(1);
}

extract(Object.assign({}, DEFAULT_CONFIG, config ));

console.log(
  `${blue(
    'integration-tools [EXIT] '
  )} Extraction procedure exiting...`
);
