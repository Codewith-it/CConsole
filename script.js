/* CodeConsole - A Javascript Console for logs and errors, with command line.
Created By Simone Bernardo. Try it on Codewith.it - free online code editor.
LICENSE MIT - 2020 Simone Bernardo.
*/


cconsole.innerHTML =`
	<div id="CCdebug" >  
	</div>
	<input id="CCinput" placeholder=">_" title="Write a command">
	<div id="CCbuttons">
		<button class="CCbtn" id="showConsole" onclick="CCopen('CCdebug'), CCopen('CCinput')" title="Hide/show Console (Open command line with double click first time)">_console</button>
	</div>
`;



var Debug = document.getElementById("CCdebug");
var ccinput = document.getElementById('CCinput');


function CCopen(d){
  var x = document.getElementById(d);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function CCshow(d){
  var x = document.getElementById(d);
    x.style.display = "block";
}



window.onload = function () {
ccinput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
	Debug.insertAdjacentHTML("beforeend","<p class='CCcon CCcon-input' title='Input'><span style='color:lightgray !important;'>>_ </span></span><span onclick='GetVal(this.innerHTML)'>"+ccinput.value+"</span><span style='float:right;color:lightgray !important;'>⮡</span></p>");
  	var Result = ccinput && eval(ccinput.value);
    Debug.insertAdjacentHTML("beforeend","<p class='CCcon CCcon-result' title='Result'><span style='color:lightgray !important;'>< </span>"+Result+"</p>");
	 Debug.scrollTop = Debug.scrollHeight;
    ccinput.value = "";
  }
});
}
function GetVal(tx){
	ccinput.value = tx;
}


window.console.log = function(message) {
Debug.insertAdjacentHTML("beforeend","<p class='CCcon CCcon-log' title='Console log' ><span style='color:lightgray !important;'>> </span><span onclick='GetVal(\""+message+"\")'>" + message + "</span></p>");
CCshow('CCinput');
 Debug.scrollTop = Debug.scrollHeight;
};
window.console.debug = function(message) {
Debug.insertAdjacentHTML("beforeend","<p class='CCcon CCcon-debug' title='Console debug'><span style='color:lightgreen !important;'>> </span><span onclick='GetVal(\""+message+"\")'>" + message + "</span></p>");
CCshow('CCinput');
 Debug.scrollTop = Debug.scrollHeight;
};
window.console.info = function(message) {
Debug.insertAdjacentHTML("beforeend","<p class='CCcon CCcon-info' title='Console info'><span style='color:lightblue !important;'>> </span><span onclick='GetVal(\""+message+"\")'>" + message + "</span></p>");
CCshow('CCinput');
 Debug.scrollTop = Debug.scrollHeight;
};
window.console.error = function(message) {
Debug.insertAdjacentHTML("beforeend","<p class='CCcon CCcon-err' title='Console error'>Error: <span onclick='GetVal(\""+message+"\")'>" + message + "</span></p>");
CCshow('CCinput');
 Debug.scrollTop = Debug.scrollHeight;
};
window.console.warn = function(message) {
Debug.insertAdjacentHTML("beforeend","<p class='CCcon CCcon-warn' title='Console warning'><span style='color:orange !important;'>> </span><span onclick='GetVal(\""+message+"\")'>" + message + "</span></p>");
CCshow('CCinput');
 Debug.scrollTop = Debug.scrollHeight;
};
window.console.dir = function(message) {
Debug.insertAdjacentHTML("beforeend","<p class='CCcon CCcon-dir' title='Console dir'><span style='color:lightgreen !important;'>> </span><span onclick='GetVal(\""+message+"\")'>" + message + "</span></p>");
CCshow('CCinput');
 Debug.scrollTop = Debug.scrollHeight;
};
window.onerror = function(message, url, line, col) {
Debug.insertAdjacentHTML("beforeend","<p class='CCcon CCcon-err' title='Error'>["+line+":"+col+"] Error: " + message + "</p>");
CCshow('CCinput');
 Debug.scrollTop = Debug.scrollHeight;
  return false;
}

