
function refreshPage(){
    window.location.reload();
}

function getRandomNumber(min,max) {
  return Math.floor(Math.random()*max)+min;
}

var randomNumbers = document.querySelectorAll(".number");

function displayNumber(){
  for (i = 0; i < randomNumbers.length; i++) {
    randomNumbers[i].innerHTML = getRandomNumber(1,3);
  }
}

displayNumber();

var message = document.getElementById("display");

function rowMatches(rowBegin,rowEnd){

  var matches = []

  if (randomNumbers[rowBegin].innerHTML === randomNumbers[rowBegin + 1].innerHTML) {
    randomNumbers[rowBegin].classList.add("highlight");
    randomNumbers[rowBegin + 1].classList.add("highlight");

    matches.push(randomNumbers[rowBegin].innerHTML);
  }

  if (randomNumbers[rowEnd].innerHTML === randomNumbers[rowEnd - 1].innerHTML) {
    randomNumbers[rowEnd].classList.add("highlight");
    randomNumbers[rowEnd - 1].classList.add("highlight");

    matches.push(randomNumbers[rowEnd].innerHTML);
  }
  return matches[0];
}

rowMatches(0,2);
rowMatches(3,5);
rowMatches(6,8);

function whichRow(rowBegin,rowEnd){

  if (rowBegin === 0 || rowEnd === 2){
    return "Row-one"
  }
  else if (rowBegin === 3 || rowEnd === 5){
    return "Row-two"
  }
  else if (rowBegin === 6 || rowEnd === 8){
    return "Row-three"
  }

}

function checkForRowMatches(rowBegin,rowEnd){

  if (rowMatches(rowBegin,rowEnd) !== undefined){
    return ("There is a match on " + whichRow(rowBegin,rowEnd) + " and the matching numbers are " + rowMatches(rowBegin,rowEnd) + ' s ' );
  }
  else {
    return ('There is no match in ' + whichRow(rowBegin,rowEnd));
  }
}

message.innerHTML = checkForRowMatches(0,2) + " and <br> " + checkForRowMatches(3,5) + " and <br> " + checkForRowMatches(6,8);
