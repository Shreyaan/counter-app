// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let count = 0

let saveEl = document.getElementById("save-el") 

function increment() {
    count += 1
    countEl.innerText = count
}
let i = 1;
function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
if (i == 1){
saveCount = count  ;
    }
    else{
saveCount =   " - " + count ;
        
    }
    i++;
    
saveEl.innerHTML += saveCount;
    console.log(saveCount)
count = 0;
 countEl.innerText = count
}


