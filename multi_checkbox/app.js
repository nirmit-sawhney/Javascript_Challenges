let checkboxes = document.querySelectorAll("input[type='checkbox']");
let lastChecked = null;

document.onselectstart = new Function("return false");

const checkAll = (event) => {
    if (event.shiftKey && lastChecked) {
        let s = parseInt(lastChecked.slice(8));
        let e = parseInt(event.target.id.slice(8));
        let state = event.target.checked;

        if (s > e) {
            let temp = s;
            s = e;
            e = temp;
        }

        for (let k = s; k < e; k++) {
            checkboxes[k].checked = state;
        }
    }

    lastChecked = event.target.id;
};

checkboxes.forEach((elem) => {
    elem.addEventListener("click", checkAll);
});
