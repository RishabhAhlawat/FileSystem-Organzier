const fs = require("fs");

const path = require("path");

function helpFn() {
    console.log(`List of all the commands->
                                   1)Tree - node FO.js tree <dirPath>
                                   2) organize - node FO.js organize <dirPath>
                                   3)help - node FO.js help`);
  }

  module.exports = {
      helpFnkey : helpFn
  }