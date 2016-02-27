//Refresh page button

function refreshPage(){
  window.location.reload();
}

//Generate random function

function getRandomNumber(min,max) {
  return Math.floor(Math.random()*max)+min;
}

//display random numbers

var randomNumbers = document.querySelectorAll(".number");

function displayNumber(){
  for (i = 0; i < randomNumbers.length; i++) {
    randomNumbers[i].innerHTML = getRandomNumber(1,9);
  }
}

displayNumber();

//Check for row matches and highlight

function rowMatches(rowBegin,rowEnd){

  var row_matches = [];

  if (randomNumbers[rowBegin].innerHTML === randomNumbers[rowBegin + 1].innerHTML) {
    randomNumbers[rowBegin].classList.add("rowHighlight");
    randomNumbers[rowBegin + 1].classList.add("rowHighlight");

    row_matches.push(randomNumbers[rowBegin].innerHTML);
  }

  if (randomNumbers[rowEnd].innerHTML === randomNumbers[rowEnd - 1].innerHTML) {
    randomNumbers[rowEnd].classList.add("rowHighlight");
    randomNumbers[rowEnd - 1].classList.add("rowHighlight");

    row_matches.push(randomNumbers[rowEnd].innerHTML);
  }

  return (row_matches[0]);
}

//Check for column matches and highlight

function colMatches(colBegin,colEnd){

  var col_matches = [];

  if (randomNumbers[colBegin].innerHTML === randomNumbers[colBegin + 3 ].innerHTML) {
    randomNumbers[colBegin].classList.add("colHighlight");
    randomNumbers[colBegin + 3 ].classList.add("colHighlight");

    col_matches.push(randomNumbers[colBegin].innerHTML);
  }

  if (randomNumbers[colEnd].innerHTML === randomNumbers[colEnd - 3].innerHTML) {
    randomNumbers[colEnd].classList.add("colHighlight");
    randomNumbers[colEnd - 3].classList.add("colHighlight");

    col_matches.push(randomNumbers[colEnd].innerHTML);
  }

  return (col_matches[0]);
}

//Check for left to right, top to bottom diagonal match and highlight

function diagMatches(diagBegin,diagEnd){

  var diag_matches = [];

  if (randomNumbers[diagBegin].innerHTML === randomNumbers[diagBegin + 4 ].innerHTML) {
    randomNumbers[diagBegin].classList.add("diagHighlight");
    randomNumbers[diagBegin + 4 ].classList.add("diagHighlight");

    diag_matches.push(randomNumbers[diagBegin].innerHTML);
  }

  if (randomNumbers[diagEnd].innerHTML === randomNumbers[diagEnd - 4].innerHTML) {
    randomNumbers[diagEnd].classList.add("diagHighlight");
    randomNumbers[diagEnd - 4].classList.add("diagHighlight");

    diag_matches.push(randomNumbers[diagEnd].innerHTML);
  }

  return (diag_matches[0]);
}

//Check for right to left, top to bottom diagonal match and highlight

function diag1Matches(diag1Begin,diag1End){

  var diag1_matches = [];

  if (randomNumbers[diag1Begin].innerHTML === randomNumbers[diag1Begin + 2 ].innerHTML) {
    randomNumbers[diag1Begin].classList.add("diagHighlight");
    randomNumbers[diag1Begin + 2 ].classList.add("diagHighlight");

    diag1_matches.push(randomNumbers[diag1Begin].innerHTML);
  }

  if (randomNumbers[diag1End].innerHTML === randomNumbers[diag1End - 2].innerHTML) {
    randomNumbers[diag1End].classList.add("diagHighlight");
    randomNumbers[diag1End - 2].classList.add("diagHighlight");

    diag1_matches.push(randomNumbers[diag1End].innerHTML);
  }

  return (diag1_matches[0]);
}

rowMatches(0,2);
rowMatches(3,5);
rowMatches(6,8);
colMatches(0,6);
colMatches(1,7);
colMatches(2,8);
diagMatches(0,8);
diag1Matches(2,6)

//Search for which row has matches

function whichRow(rowBegin,rowEnd){

  if (rowBegin === 0 || rowEnd === 2){
    return ("Row-one");
  }
  else if (rowBegin === 3 || rowEnd === 5){
    return ("Row-two");
  }
  else if (rowBegin === 6 || rowEnd === 8){
    return ("Row-three");
  }
}

//Search for which column has matches

function whichCol(colBegin,colEnd){

  if (colBegin === 0 || colEnd === 6){
    return ("Column-one");
  }
  else if (colBegin === 1 || colEnd === 7){
    return ("Column-two");
  }
  else if (colBegin === 2 || colEnd === 8){
    return ("Column-three");
  }
}

//Display which rows and columns have matches

var rowMessage = document.getElementById("rowDisplay");
var colMessage = document.getElementById("colDisplay");

function rowMatchDisplay(rowBegin,rowEnd){

  if (rowMatches(rowBegin,rowEnd) !== undefined){
    return ("Match found in " + whichRow(rowBegin,rowEnd) + " with " + rowMatches(rowBegin,rowEnd) + 's matching' );
  }
  else {
    return ('No match in ' + whichRow(rowBegin,rowEnd));
  }
}

function colMatchDisplay(colBegin,colEnd){

  if (colMatches(colBegin,colEnd) !== undefined){
    return ("Match in " + whichCol(colBegin,colEnd) + " with " + colMatches(colBegin,colEnd) + 's matching' );
  }
  else {
    return ('No match in ' + whichCol(colBegin,colEnd));
  }
}

rowMessage.innerHTML = rowMatchDisplay(0,2) + " and <br> " + rowMatchDisplay(3,5) + " and <br> " + rowMatchDisplay(6,8);
colMessage.innerHTML = colMatchDisplay(0,6) + " and <br> " + colMatchDisplay(1,7) + " and <br> " + colMatchDisplay(2,8);
