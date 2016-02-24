function getRandomNumber(min,max) {
  return Math.floor(Math.random()*max)+min;
}

var x = document.querySelectorAll(".number");

function displayNumber(){
      console.log(x.length)
      for (i = 0; i < x.length; i++) {
        x[i].innerHTML = getRandomNumber(1,3);
      }
}

displayNumber();
