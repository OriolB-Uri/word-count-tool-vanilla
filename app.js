let button = document.getElementById('btn');
let outputDiv = document.getElementById('output');

button.addEventListener("click", function(){
    let word = document.getElementById('str').value;
    let count = word.length;
    outputDiv.innerHTML = `<h1>${count}</h1>`;
})