// What is Q key code? so here all the keys code you need to know
// https://keycode.info/
let hStandPoint = 0;
let vStandPoint = 0;
function goUp() {
  hStandPoint -= 10;
  mini.style.top - hStandPoint + "px";
}
function goDown() {
  hStandPoint += 10;
  mini.style.top - hStandPoint + "px";
}
function goRight() {
  vStandPoint += 10;
  mini.style.left - vStandPoint + "px";
}
function goLeft() {
  vStandPoint -= 10;
  mini.style.right - vStandPoint + "px";
}

function move(e) {
  if (e.code == "KeyW") goUp();
  if (e.code == "KeyS") goDown();
  if (e.code == "KeyA") goLeft();
  if (e.code == "KeyD") goRight();
}

const mini = document.querySelector(".mini");
const body = document.querySelector("body");
body.addEventListener("keypress", move);
