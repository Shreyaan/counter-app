// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let count = 0

let saveEl = document.getElementById("save-el")
let oldtext = localStorage.getItem('saveEl')
saveEl.innerHTML = oldtext
if(oldtext == null){
    saveEl.innerHTML = "Previous entires: ";
}

else{
    saveEl.innerHTML = oldtext

}

function increment() {
    count += 1
    countEl.innerText = count
}
let i ;

if(localStorage.getItem('number') != null ){
i= localStorage.getItem('number')
}
else{
i = 1;
}

function bruhclear() {
    saveEl.innerHTML = "Previous entires: ";
    countEl.innerText = "0";
    i = 1;


}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    if (count == 0) {

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

        saveEl.innerHTML += saveCount;
        console.log(saveCount)
    }
    count = 0;
    countEl.innerText = count
    localStorage.setItem('saveEl' , saveEl.innerHTML );
    localStorage.setItem('number' , i );
}

// localStorage.setItem('saveEl' , saveEl.innerHTML );