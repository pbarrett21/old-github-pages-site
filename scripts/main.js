//First JavaScript for website
var myBody = document.querySelector('body');
//myBody.textContent = 'Goodbye interesting cromagnon information';
alert("Testing alert for Javascript, press ok.");
var myImage = document.querySelector('img');
var countClicks = 0;
myImage.onclick = function() {
  countClicks = countClicks + 1;
  if (countClicks % 3 === 0) {
  alert("Stop clicking on the Cromagnon!");
}
  var myHeading = document.querySelector('h1');
  myHeading.textContent = 'Learning Web Programming, with HTML, CSS, and JS';
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/cromagnon.JPG') {
    myImage.setAttribute('src', 'images/cromaggy2.jpeg');
  } else {
      myImage.setAttribute('src', 'images/cromagnon.JPG');
    }
}
