// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let count = 0

let saveEl = document.getElementById("save-el")
let oldtext = localStorage.getItem('saveEl')
saveEl.innerHTML = oldtext
if (oldtext == null) {
    saveEl.innerHTML = "Previous entires: ";
} else {
    saveEl.innerHTML = oldtext

}

function increment() {
    count += 1
    countEl.innerText = count
}
let i;

if (localStorage.getItem('number') != null) {
    i = localStorage.getItem('number')
} else {
    i = 1;
}

let wasClearUsed = false;

function bruhclear() {
    saveEl.innerHTML = "Previous entires: ";
    countEl.innerText = "0";
    // i = 1; dont need anymore coz we now save last data
    wasClearUsed = true;

}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph

    // if (localStorage.getItem('number') != null) {
    //     i = localStorage.getItem('number')
    // } else {
    //     i = 1;
    // }

    if (count == -1) {

        if (i == 1) {
            saveEl.innerHTML += "🙄  ";
        } else {
            saveEl.innerHTML += " - 🙄  ";
        }

        i++;
    } else {

        if (i == 1) {
            saveCount = count;
        } else {
            saveCount = " - " + count;

        }
        i++;

        if (wasClearUsed == true) {

            oldtext = localStorage.getItem('saveEl')
            localStorage.setItem('saveEl', saveEl.innerHTML);
            saveEl.innerHTML = oldtext + saveCount;
            wasClearUsed = false;
            i = 2;
               localStorage.setItem('number' , i );

        } else {

            saveEl.innerHTML += saveCount;
        }


        console.log(saveCount)
    }
    count = 0;
    countEl.innerText = count
    localStorage.setItem('saveEl', saveEl.innerHTML);
    localStorage.setItem('number', i);
}


function clearSab(){
    saveEl.innerHTML = "Previous entires: ";
    countEl.innerText = "0";
    i = 1; 
    // wasClearUsed = true;
    localStorage.setItem('saveEl', saveEl.innerHTML);
    localStorage.setItem('number', i);

}

// localStorage.setItem('saveEl' , saveEl.innerHTML );