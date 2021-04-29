// What is Q key code? so here all the keys code you need to know
// https://keycode.info/
let hStandPoint = 0;
let vStandPoint = 0;
function goUp() {
  vStandPoint -= 10;
  mini.style.top = vStandPoint + "px";
}
function goDown() {
  vStandPoint += 10;
  mini.style.top = vStandPoint + "px";
}
function goRight() {
  hStandPoint += 10;
  mini.style.left = hStandPoint + "px";
}
function goLeft() {
  hStandPoint -= 10;
  mini.style.right = hStandPoint + "px";
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
