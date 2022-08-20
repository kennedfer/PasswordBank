function on_ok_passwrd() {
  /*input_div.style.animationPlayState = "running";

  input_div.addEventListener("animationend", function () {
    input_div.style.animationName = "input-error";
    input_div.style.animationIterationCount = 2;
  });*/
  console.log("a");
}

function reset_input_anim() {
  input_div.classList.remove("input-field");
  void input_div.offsetWidth;
  input_div.classList.add("input-field");
}

function on_wrong_passwrd() {
  reset_input_anim();
  inp_passw.value = "";
}

function hash(encrypt) {
  var hash = 0;
  for (var i in encrypt) {
    var ch = encrypt.charAt(i);
    hash += (hash << 5) - hash + ch;
  }

  return hash;
}

function encrypt(text) {
  return window.btoa(text);
}

function check_password() {
  console.log(passwrd);
  console.log(hash(encrypt(inp_passw.value)));

  if (hash(encrypt(inp_passw.value)) === passwrd) {
    on_ok_passwrd();
    return;
  }

  on_wrong_passwrd();
}

var btn_enter = document.querySelector("#enter-button");
var inp_passw = document.querySelector("#input");
var box_form = document.querySelector("#box");
var input_div = document.querySelector("#input-field");

var passwrd =
  "00aNaNmNaNtNaNmNaNZNaNXNaNJNaNyNaNZNaNWNaNlNaNyNaNYNaNTNaNENaNxNaNMNaNjNaNYNaN=";

btn_enter.addEventListener("click", check_password);
