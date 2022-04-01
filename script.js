var button = document.getElementById("enter"); //gets the button element
var input = document.getElementById("userinput") //gets the text input control
var ul = document.querySelector("ul") //selects the unordered list

/* This function returns the length of the text entered in the text 
input control*/
function inputLength() {
	return input.value.length;
}

/* This function creates a list item and append same to the button 
of the list & then clears the text input control
*/
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = ""; //clears the text input control
}

/* This function checks whether a text was entered in the text input control
and then calls the createListElement() function to add the item to the list*/
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

/* This function adds an item to the list when the ENTER key is pressed. 
The code for the enter key is 13*/
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);