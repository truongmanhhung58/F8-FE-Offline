var counter = document.querySelector(".counter");
var btnGetLink = document.querySelector(".btn-get-link");

var counterTime = 11;
var checkTime = 0;
var focusOut = false;


function startDown(currentTime) {
  if (!checkTime) checkTime = currentTime;
  if (currentTime - checkTime > 1000) {
    counterTime--;
    checkTime = currentTime;
    counter.innerText = counterTime;
  }
  if(counterTime > 0) {
    window.requestAnimationFrame(startDown);
  } else {
    window.cancelAnimationFrame(startDown)
    btnGetLink.disabled = false;
    btnGetLink.addEventListener("click",() => {
        window.location.href="https://fullstack.edu.vn/courses"
    })
  }
}

startDown();










