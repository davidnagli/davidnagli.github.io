/* global wrong */
var pracMode = true;


/*
TO DO:
    ^prevent image overflow when inner height is smaller than image
	    ^do this by making a function onload and on resize that first removes any width styling
		and then checks if img.clientHeight is smaller than window.innerHeight.
		if it is then img.style.width = "100%", else img.style.width = "";
	^add timer
*/

//var ArrowStates = ["MD", "DE", "NJ", "CT", "RI", "MA", "NH"];
var ArrowStates = ["MD", "DE", "NJ", "CT", "RI", "MA", "NH", "VT"];
//var ArrowStates = [];

var extra = ["OK", "NM", "AZ", "NV", "UT", "CO", "ID", "MT", "WY", "ND", "SD", "NE", "WA","FL", "WV", "AL", "MS", "AR", "LA", "TX", "CA", "KS", "MO", "ME", "OH", "MI", "IN", "IL", "WI", "MN", "OR", "IA"];
//var extra = ["OK", "NM", "AZ", "NV", "UT", "CO", "ID", "MT", "WY", "ND", "SD", "NE", "WA"];

var vals = ["GA", "SC", "NC", "VA", "NY", "PA", "TN", "KY"];
// var vals = ["FL", "GA", "SC", "NC", "VA", "WV", "TN", "AL", "MS", "AR", "LA", "TX", "CA", "KS", "MO", "KY", "ME", "NY", "PA", "OH", "MI", "IN", "IL", "WI", "MN", "OR", "IA"];

var statesAmt = 0;



var vals = vals.concat(extra);





var vals = vals.concat(ArrowStates);



var arrowStatesAmt = ArrowStates.length;

var score = 0;
var end = true;

//console.log(vals)


function resetGame() {
	score = 0;
	for (var i = 0; i < vals.length; i++) {
		document.getElementById(vals[i]).value = "";
		document.getElementById(vals[i]).style.borderColor = "#000000";
	}
	for (var i = 0; i < ArrowStates.length; i++) {
		document.getElementsByTagName(ArrowStates[i].toLowerCase())[0].style.backgroundColor = "#000000";
	}
}


function toggleStates() {
    if (document.getElementById("showHide").checked) {
        //alert("checked");
        for (var i = 0; i < extra.length; i++) {
			document.body.removeChild(document.getElementById(vals[vals.indexOf(extra[i])]));
			//vals.splice(vals.indexOf(extra[i]))
			//console.log(vals.indexOf(extra[i]))
		}

		for (var a = 0; a < extra.length; a++) {
			vals.splice(vals.indexOf(extra[a]), 1);
			//console.log(vals);
		}
		//console.log(vals);
        
    } else {
        vals = vals.concat(extra);
        for (var b = 0; b < extra.length; b++) {
			var inputElement = document.createElement("input");
			inputElement.id = extra[b];
			document.body.appendChild(inputElement);
			inputElement.onchange = function () { checkFull() };
		}
        //console.log(vals);
    }
}

function appendInputs(elementId) {
	if (vals.indexOf(elementId) < (vals.length - ArrowStates.length)) {
		var inputElement = document.createElement("input");
		inputElement.id = elementId;
		document.body.appendChild(inputElement);
		inputElement.onchange = function () {
			checkFull()
		};
	}
}

window.onload = function () {
	for (var i = 0; i < vals.length; i++) {
		appendInputs(vals[i]);
	}
	alert("WARNING: THIS GAME DOES NOT ALWAYS WORK ON MOBILE DEVICES. PLEASE ACCESS IT FROM A COMPUTER \n \nTo play enter the US Postal abreviations for as many states as you can. Then press DONE when you are finished \n \n P.S. Check the checkbox in the upper left corner to hide all the states that you don't need to know for Ms.Eizenbaum's class.");
};

function checkFull() {
	for (var i = 0; i < vals.length; i++) {
		if (document.getElementById(vals[i]).value !== "") {
			if (pracMode) {
				if (document.getElementById(vals[i]).value.toUpperCase() === vals[i]) {
					document.getElementById(vals[i]).style.borderColor = "green";
				} else {
					document.getElementById(vals[i]).style.borderColor = "red";
				}
			} else {
				document.getElementById(vals[i]).style.borderColor = "#555555";
			}
		} else {
			document.getElementById(vals[i]).style.borderColor = "#000000";
		}
	}
	for (var i = 0; i < ArrowStates.length; i++) {
		//console.log(document.getElementById(ArrowStates[i]).value);
		if (document.getElementById(ArrowStates[i]).value !== "") {
			if (pracMode) {
				if (document.getElementById(ArrowStates[i]).value.toUpperCase() === ArrowStates[i]) {
					//document.getElementById(vals[i]).style.borderColor = "green";
					document.getElementsByTagName(ArrowStates[i].toLowerCase())[0].style.backgroundColor = "green";
				} else {
					//document.getElementById(vals[i]).style.borderColor = "red";
					document.getElementsByTagName(ArrowStates[i].toLowerCase())[0].style.backgroundColor = "red";
				}
			} else {
				document.getElementById(vals[i]).style.borderColor = "#555555";
			}
		} else {
			if (pracMode) {
				document.getElementsByTagName(ArrowStates[i].toLowerCase())[0].style.backgroundColor = "#000000";
			} else {
				document.getElementById(vals[i]).style.borderColor = "#000000";
			}

		}
	}
}

window.addEventListener("click", function () {
	checkFull();
});

function clearInputs() {
	for (var i = 0; i < vals.length; i++) {
		document.getElementById(vals[i]).value = "";
		document.getElementById(vals[i]).style.borderColor = "#ffffff";
	}
}

function endGame() {

	alert("Score: " + score + " / " + vals.length + "\nWRONG: " + wrong);
	score = 0;
	for (var i = 0; i < vals.length; i++) {
		document.getElementById(vals[i]).value = "";
		document.getElementById(vals[i]).style.borderColor = "#000000";
	}
	for (var i = 0; i < ArrowStates.length; i++) {
		document.getElementsByTagName(ArrowStates[i].toLowerCase())[0].style.backgroundColor = "#000000";
	}
}

function submit() {
	wrong = [];
	end = true;
	checkFull()
	var i = null;
	for (i = 0; i < vals.length; i++) {
		//document.getElementById(vals[i]).blur();
		if (document.getElementById(vals[i]).value.toUpperCase() === vals[i]) {
			score++;

		} else {
			wrong.push(vals[i]);
		}

		if (document.getElementById(vals[i]).value === "") {
			document.getElementById(vals[i]).style.borderColor = "#dddd00";
			end = false;
		}
	}
	for (var i = 0; i < ArrowStates.length; i++) {
		if (document.getElementById(ArrowStates[i]).value === "") {
			document.getElementsByTagName(ArrowStates[i].toLowerCase())[0].style.backgroundColor = "#dddd00";
		}
	}
	if (!end) {
		var dialog = confirm("You didn't enter a value for one or more states. Press OK to submit answers as they are or click CANCEL to continue working.");
		if (dialog) {
			endGame();
		} else {
			score = 0;
			checkFull();
		}
	} else {
		endGame();
	}
}
function settings() {
	console.log("settings button pressed");
	document.getElementsByTagName("cover")[0].style.display = "initial";
}