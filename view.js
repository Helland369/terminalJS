//
//
//
disp();
function disp() {
    main.innerHTML = `
        <div id="mainTerm">
            <div id="dispTerm"></div>
            <form id="terminal">
                <input id="termIn" type="text" placeholder=">" action="javascript:">
                <button id="return">Return</button>
            </form>
        </div>
    `;
}
