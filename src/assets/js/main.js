import { burger } from "./burger.js";
import { table } from "./table.js";
import { popup } from "./popup.js";
import { popupForm } from "./popupForm.js";
import { changeInput } from "./changeInput.js";
import { copyToBuffer } from "./copyToBuffer.js";
import { tableHeaderFixed } from "./tableHeaderFixed.js";

window.addEventListener('DOMContentLoaded', () => {
    burger(); 
    table();   
    popup();
    popupForm();
    changeInput();
    copyToBuffer();
    tableHeaderFixed();
})