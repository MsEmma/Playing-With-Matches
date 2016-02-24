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

// function checkForMatches(){
//   //find matches
//   if (firstNumber === randomNumbers[1].innerHTML){
//     alert("match");
//   }
//}

function highLightMatches(){

  var message = document.getElementById("display");
  var case_one = randomNumbers[0].innerHTML === randomNumbers[1].innerHTML;
  var case_two = randomNumbers[0].innerHTML === randomNumbers[2].innerHTML;
  var case_three = randomNumbers[1].innerHTML === randomNumbers[2].innerHTML;
  var firstNumber = randomNumbers[0].innerHTML;
  var secondNumber = randomNumbers[1].innerHTML;
  var thirdNumber = randomNumbers[2].innerHTML;

  if (case_one && case_three) {
    randomNumbers[0].classList.add("highlight");
    randomNumbers[1].classList.add("highlight");
    randomNumbers[2].classList.add("highlight");
    message.innerHTML = 'There are three matches, three ' + firstNumber + 's';
    }

  else if (case_one){
    randomNumbers[0].classList.add("highlight");
    randomNumbers[1].classList.add("highlight");
    message.innerHTML = 'There is one match, two ' + firstNumber + 's';
    }

  else if (case_two){
    randomNumbers[0].classList.add("highlight");
    randomNumbers[2].classList.add("highlight");
    message.innerHTML = 'There is one match, two ' + firstNumber + 's';
    }

  else if (case_three){
    randomNumbers[1].classList.add("highlight");
    randomNumbers[2].classList.add("highlight");
    message.innerHTML = 'There is one match, two ' + secondNumber + 's';
    }

  else {
    message.innerHTML = 'There are no matches';
  }

}

highLightMatches();
