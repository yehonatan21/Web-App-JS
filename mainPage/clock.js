`use strict`
var datetime = new Date();
function startTime() {
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");

    document.getElementById('time').innerHTML = formattedString;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  startTime()