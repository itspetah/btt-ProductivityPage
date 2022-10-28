///Beginning of Timer JS

var mins;
var secs;
var started = false;

function startTimer() {
  //check for valid timer input
  if (parseInt(document.getElementById("setTime").value, 10) <= 0 || document.getElementById("setTime").value == "") {
    alert('Invalid Input!');
  }

  //if not yet started + timer input > 0:
  else if (!started && parseInt(document.getElementById("setTime").value, 10) > 0) {
    started = true;
    mins = parseInt(document.getElementById("setTime").value, 10);
    secs = mins * 60;
    ticking();
  }
  //else do nothing
}

function resetTimer() {
  //stops the ticking (weird solution from stackoverflow)
  //gets all setTimeout ID's and iterates through each,
  //clearing them
  //doesnt work with just clearTimeout(1);
  var highestTimeoutId = setTimeout(";");
  for (var i = 0; i < highestTimeoutId; i++) {
    clearTimeout(i);
  }
  //clear all values;
  started = false;
  mins = 0;
  secs = 0;
  minutes.value = 0;
  seconds.value = 0;

}

function ticking() {
  if (true) {
    minutes = document.getElementById("minutes");
    seconds = document.getElementById("seconds");
    if (seconds < 59) {
      seconds.value = secs;
    }
    else {
      minutes.value = getminutes();
      seconds.value = getseconds();
    }

    if (mins < 0) {
      //alarm is working
      var audio = new Audio('alarm.mp3');
      audio.play();
      alert('Times up!');
      audio.stop();
      minutes.value = 0;
      seconds.value = 0;
      started = false;

    }

    //decreases time left box
    else {
      secs--;
      setTimeout(ticking, 1000);
    }
  }

}

function getminutes() {
  mins = Math.floor(secs / 60);
  return mins;
}

function getseconds() {
  return secs - Math.round(mins * 60);
}

///Timer end



///To Do List JS
var myNodelist = document.getElementsByClassName("tdlLi");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");

var list = document.getElementById('myUL');
list.addEventListener('click', function(ev) {
  if (ev.target.className == "tdlLi" && ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  li.className = "tdlLi";
  var inputValue = document.getElementById("tdlInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("tdlInput").value = "";

  var span = document.createElement("SPAN");
  span.className = "close";
  span.appendChild(document.createTextNode("x"));
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
