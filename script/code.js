function kontrol() {
  var input = document.getElementById("html-input1").value;
  var cevap1 = "deneme";
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
}
