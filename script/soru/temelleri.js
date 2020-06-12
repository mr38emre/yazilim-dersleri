function kontrol1() {
  var input = document.getElementById("html-input1").value;
  var cevap1 = "body";
  if (input == cevap1) {
    document.getElementById("html-input1").style.color = "#46a30f";
    document.getElementById("html-input1").style.border = "solid";
    document.getElementById("html-input1").style.borderColor = "#46a30f";
    document.getElementById("html-input1").style.transition = "0.5s";
  } else {
    document.getElementById("html-input1").style.color = "#a30f1b";
    document.getElementById("html-input1").style.borderColor = "#a30f1b";
    document.getElementById("html-input1").style.border = "solid";
    document.getElementById("html-input1").style.transition = "0.5s";
  }


  var input = document.getElementById("html-input2").value;
  var cevap1 = "/";
  if (input == cevap1) {
    document.getElementById("html-input2").style.color = "#46a30f";
    document.getElementById("html-input2").style.border = "solid";
    document.getElementById("html-input2").style.borderColor = "#46a30f";
    document.getElementById("html-input2").style.transition = "0.5s";
  } else {
    document.getElementById("html-input2").style.color = "#a30f1b";
    document.getElementById("html-input2").style.borderColor = "#a30f1b";
    document.getElementById("html-input2").style.border = "solid";
    document.getElementById("html-input2").style.transition = "0.5s";
  }

}