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

function check_password() {
  if (inp_passw.value === passwrd) {
    on_ok_passwrd();
    return;
  }

  on_wrong_passwrd();
}

var btn_enter = document.querySelector("#enter-button");
var inp_passw = document.querySelector("#input");
var box_form = document.querySelector("#box");
var input_div = document.querySelector("#input-field");

var passwrd = "jkferreira1126";

btn_enter.addEventListener("click", check_password);
