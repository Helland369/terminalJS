//
//
//
function mainController(inCmd) {
    // makes it possible to sepparate the input
    const split = inCmd.trim().split(" ");
    // get the first part of the split string // commands like; cd, ls etc
    const cmd = split[0];
    // this is the rest of the string // arguments like; -l, -ld // whatever comes afther the command
    const arg = split.slice(1);

    if (cmd === "cd") {
        // func(arg[0]);
    }
}
