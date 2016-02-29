//Refresh page button

function refreshPage() {
  window.location.reload();
}

//Generate random function

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * max) + min;
}

//display random numbers

var randomNumbers = document.querySelectorAll(".number");

function displayNumber() {
  for (i = 0; i < randomNumbers.length; i++) {
    randomNumbers[i].innerHTML = getRandomNumber(1, 9);
  }
}

displayNumber();

function checkMatches(start, end, gap, highlight) {

  var matches = [];

  if (randomNumbers[start].innerHTML === randomNumbers[start + gap].innerHTML) {
    randomNumbers[start].classList.add(highlight);
    randomNumbers[start + gap].classList.add(highlight);

    matches.push(randomNumbers[start].innerHTML);
  }

  if (randomNumbers[end].innerHTML === randomNumbers[end - gap].innerHTML) {
    randomNumbers[end].classList.add(highlight);
    randomNumbers[end - gap].classList.add(highlight);

    matches.push(randomNumbers[end].innerHTML);
  }

  return (matches[0]);
}

checkMatches(0, 2, 1, "rowHighlight");
checkMatches(3, 5, 1, "rowHighlight");
checkMatches(6, 8, 1, "rowHighlight");

checkMatches(0, 6, 3, "colHighlight");
checkMatches(1, 7, 3, "colHighlight");
checkMatches(2, 8, 3, "colHighlight");

checkMatches(0, 8, 4, "diagHighlight");
checkMatches(2, 6, 2, "diagHighlight");

//Search which row or column has matches

function whichRowOrCol(start, end, gap, highlight) {

  if (start === 0 && end === 2) {
    return ("Row-one");
  } else if (start === 3 && end === 5) {
    return ("Row-two");
  } else if (start === 6 && end === 8) {
    return ("Row-three");
  } else if (start === 0 && end === 6) {
    return ("Column-one");
  } else if (start === 1 && end === 7) {
    return ("Column-two");
  } else if (start === 2 && end === 8) {
    return ("Column-three");
  } else if (start === 0 && end === 8) {
    return ("First-Diagonal");
  } else if (start === 2 && end === 6) {
    return ("Second-Diagonal");
  }
}

//Display which rows and columns have matches

var rowMessage = document.getElementById("rowDisplay");
var colMessage = document.getElementById("colDisplay");
var diagMessage = document.getElementById("diagDisplay");

function matchDisplay(start, end, gap, highlight) {

  if (checkMatches(start, end, gap, highlight) !== undefined) {
    return ("Match found in " + whichRowOrCol(start, end, gap, highlight) + " with " + checkMatches(start, end, gap, highlight) + 's matching');
  } else {
    return ('No match in ' + whichRowOrCol(start, end, gap, highlight));
  }
}

//Display message

rowMessage.innerHTML = matchDisplay(0, 2, 1, "rowHighlight") + " and <br> " + matchDisplay(3, 5, 1, "rowHighlight") + " and <br> " + matchDisplay(6, 8, 1, "rowHighlight");
colMessage.innerHTML = matchDisplay(0, 6, 3, "colHighlight") + " and <br> " + matchDisplay(1, 7, 3, "colHighlight") + " and <br> " + matchDisplay(2, 8, 3, "colHighlight");
diagMessage.innerHTML = matchDisplay(0, 8, 4, "diagHighlight") + " and <br> " + matchDisplay(2, 6, 2, "diagHighlight");
