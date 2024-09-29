//
//
//
const term = document.getElementById("dispTerm");

/* mainDirectory();
 * function mainDirectory() {
 *     for (let i = 0; i < filesystem.length; i++) {
 *         const array = Object.values(filesystem[i]);
 *         term.innerHTML = array;
 *         console.log(array);
 *     }
 * } */

/* filesystem.forEach((obj) => {
 *     const para = document.createElement("p");
 *     para.textContent = `Name: ${obj.dirName}, Size: ${obj.owner}`;
 *     term.appendChild(para);
 * }); */

// for testing currently
function mainDirectory(obj, append) {
    for (let i in obj) {
        // ^^^^^ itterate/loop each itmen in the filesystem array//object
        if (typeof obj[i] == "object" && obj[i] !== null) {
            // ^^^^^check to see if its an object and that its not nothing.
            const div = document.createElement("div"); // create new div element as needed.
            div.style.marginLeft = "20px"; // make the text indented(tab) when printed.
            div.textContent = i + ":"; // display the content
            append.appendChild(div); // make/append a new div per item.
            mainDirectory(obj[i], div); // run the function for as long as there is objects.
        } else {
            // if there is a non object next in line do this.
            const pEle = document.createElement("p"); // make a new p element
            pEle.textContent = `${i}: ${obj[i]}`; // display content.
            append.appendChild(pEle); // make/append a new p element
        }
    }
}

// Loop each item in filesystem and run mainDirectory() for each item.
filesystem.forEach((item) => mainDirectory(item, term));
