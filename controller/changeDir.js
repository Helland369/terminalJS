//
// Change directory command (cd)
//
// trying stuff
function changeDir(inputArg) {
    if (input === "/" || "root") {
        div.style.marginLeft = "10";
        div.textContent = filesystem.rootDir.dirName + " ";
    }
}

console.log(filesystem[0].rootDir.dirName);
document.getElementById("dispTerm").textContent = filesystem[0].rootDir.dirName;
