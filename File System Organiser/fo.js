

const helpmodule = require('../commands/help')
const orgmodule = require('../commands/organize')
const treemodule = require('../commands/tree')


let input = process.argv.slice(2);

let inputArr = input; // [organzie , folderpath]

let command = inputArr[0];



switch (command) {
    case 'tree':
        treemodule.treeFnkey(inputArr[1])
        break;
    case "organize":
        orgmodule.organizeFnkey(inputArr[1])
        break;
    case "help":
        helpmodule.helpFnkey()
        break;
    default:
        console.log("Please enter a Valid command");
        break;
}

// Help Function will list all the ways by which you can run the commands of this project

// Organize Function will organize all your target folder's files in a different folders acc to their extensions






