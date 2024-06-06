import { burger } from "./burger.js";
import { table } from "./table.js";
import { popup } from "./popup.js";
import { popupForm } from "./popupForm.js";
import { changeInput } from "./changeInput.js";

window.addEventListener('DOMContentLoaded', () => {
    burger(); 
    table();   
    popup();
    popupForm();
    changeInput();
})