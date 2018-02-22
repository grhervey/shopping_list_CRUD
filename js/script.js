var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');


function getInputLength() {
    return input.value.length;
}


function createLiElement() {
    var li = document.createElement('li');
    var remove = document.createElement('button');
    var span = document.createElement('span');
    var val = document.createTextNode(" " + input.value);
    remove.appendChild(document.createTextNode('X'));
    span.appendChild(val);
    li.appendChild(remove);
    li.appendChild(span);
    ul.appendChild(li);
    input.value = '';
}


function updateList(e) {
     var target = e.target;
     if (target.tagName === 'SPAN') {
        target.classList.toggle('done');
     } if (target.tagName === 'BUTTON') {
        target.parentNode.remove();
     }
}

function addListAfterClick() {
    if (getInputLength() > 0) {
        createLiElement();
    }
}

function addListAfterKeypress(event) {
    if (getInputLength() > 0 && event.keyCode === 13) {
        createLiElement();
    }
}

function addLineAfterClick() {
    span.classList.toggle('done');
}

// listening to item s on shopping list
ul.addEventListener("click", updateList);

// add event listener for Enter button
button.addEventListener("click", addListAfterClick);

// add event listener for key press for user input
input.addEventListener("keypress", addListAfterKeypress);
