// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase
let countEl = document.getElementById("count-el")


let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}
function reset() {
    count = 0
    countEl.innerText = count
}
let i = 1;

function hatetrb() {
    // count = 0
  
i++;  

    if (i%2 == 0) {
        document.getElementById("hatetrb").innerText = 'hate trb'
    }
    else
    {

        document.getElementById("hatetrb").innerHTML = ' <span style="visibility: hidden;"> hatetrb </span>'
    }
    

    // countEl.innerText = "hate trb"
}


function newFunction(i) {
    i++
    return i
}

